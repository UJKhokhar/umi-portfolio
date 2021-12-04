<template>
  <div>
    <div class="svg-wrapper">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggleNav"
      >
        <title>Menu icon</title>
        <line
          id="line1"
          stroke-linecap="round"
          stroke-width="10"
          x1="30"
          y1="30"
          x2="70"
          y2="30"
          stroke="#9B59D0"
        />
        <line
          id="line2"
          stroke-linecap="round"
          stroke-width="10"
          x1="30"
          y1="70"
          x2="70"
          y2="70"
          stroke="#9B59D0"
        />
        <line
          id="line3"
          stroke-linecap="round"
          stroke-width="10"
          x1="30"
          y1="50"
          x2="70"
          y2="50"
          stroke="#9B59D0"
        />
      </svg>
    </div>
    <div
      class="navigation [ h-align-items-center h-justify-content-center ]"
      :class="{active : isNavOpen}"
    >
      <nav>
        <ul class="navigation__links [ h-align-items-center ]">
          <li>
            <a
              href="#live"
              @click="scrollTo('live_projects')"
            >Live Projects</a>
          </li>
          <li>
            <a
              href="#companies"
              @click="scrollTo('companies')"
            >Other Work</a>
          </li>
          <li>
            <a
              href="./umi_resume.pdf"
              download
            >Resume</a>
          </li>
          <li class="mail">
            <a href="#contact">

              <SVGWrapper
                desc="Opens email form to send to Umi"
                svg-title="Mail"
                role="link"
                width="100%"
                height="100%"
                viewBox="0 0 30 20"
                icon-color="#9b59d0"
              ><Mail /></SVGWrapper>
            </a>
          </li>
          <li class="linkedin">
            <a
              href="https://www.linkedin.com/in/ujkhokhar/"
              target="_blank"
            >
              <SVGWrapper
                desc="Go to Umi's Linkedin"
                svg-title="Linkedin"
                role="link"
                width="100%"
                height="100%"
                viewBox="0 0 21 21"
                icon-color="#9b59d0"
              ><Linkedin /></SVGWrapper>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import SVGWrapper from '@/components/SVGWrapper';
import Mail from '@/assets/svgComponents/Mail';
import Linkedin from '@/assets/svgComponents/Linkedin';
import anime from 'animejs/lib/anime.es.js';
let played = false;

export default {
  name: 'Menu',
  components: {
    SVGWrapper,
    Mail,
    Linkedin,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  mounted() {
    // Get the viewport height and we multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // In case of portrait to landscape on mobile
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
  methods: {
    scrollTo(elementId) {
      this.navEvents();
      document.getElementById(elementId).scrollIntoView({behavior: 'smooth'})
    },
    toggleNav() {
      this.navEvents();
      window.scrollTo(0,0);
    },
    navEvents() {
      // Animate nav
      // Toggle nav
      // Toggle scroll lock
      this.animateNav();
      this.isNavOpen = !this.isNavOpen;
      document.body.classList.toggle('h-no-scroll');
    },
    animateNav() {
      // This is not the ideal way to do this but it was fun
      // First animate menu to X
      // If the menu has been animated to an x already
      // animate back to menu

      const menuToX = anime.timeline({
        easing: 'easeOutExpo',
        duration: 200,
        autoplay: false,
      });

      menuToX.add({ // lines to circles
          targets: '#line1',
          x1: 30,
          x2: 30,
          y1: 30,
          y2: 30,
        })
        .add(
          {
            targets: '#line3',
            x1: 50,
            x2: 50,
            y1: 50,
            y2: 50,
          },
          '-=200'
        )
        .add(
          {
            targets: '#line2',
            x1: 70,
            x2: 70,
            y1: 70,
            y2: 70,
          },
          '-=400'
        )
        .add({
          targets: '#line1, #line2, #line3',
          x1: 50,
          x2: 50,
          y1: 50,
          y2: 50,
        })
        .add({
          targets: '#line1',
          x1: 30,
          y1: 30,
          x2: 70,
          y2: 70,
        })
        .add(
          {
            targets: '#line2',
            x1: 30,
            y1: 70,
            x2: 70,
            y2: 30,
          },
          '-=200'
        );

      const xToMenu = anime.timeline({
        easing: 'easeOutExpo',
        duration: 200,
        autoplay: false,
      });

      xToMenu.add({
        targets: '#line1',
        x1: 30,
        y1: 30,
        x2: 30,
        y2: 30
      })
      .add({
        targets: '#line2',
        x1: 30,
        y1: 70,
        x2: 30,
        y2: 70
      })
      .add({
        targets: '#line3',
        x1: 30,
        y1: 50,
        x2: 70,
        y2: 50
      })
      .add({
        targets: '#line1',
        x1: 30,
        y1: 30,
        x2: 70,
        y2: 30
      }, '-=200')
      .add({
        targets: '#line2',
        x1: 30,
        y1: 70,
        x2: 70,
        y2: 70,
      }, '-=200');

      played = !played;

      if (!played) {
        xToMenu.play();
      } else {
        menuToX.play();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-wrapper {
  width: 50px;
  height: 50px;
  z-index: 2;
  position: relative;
  cursor: pointer;
}

$border_size: 10px;

.navigation {
  width: calc(100vw - #{$border_size * 2});
  height: calc(100vh - #{$border_size * 2});
  // Fix for 100vh issue in mobile browsers
  height: calc(var(--vh, 1vh) * 100 - #{$border_size * 2});
  background-color: $white;
  z-index: 1;
  position: absolute;
  top: -2000px;
  left: 0;
  transition: ease-in top .25s;
  border: $border_size solid $purple;
  border-radius: 20px;

  &.active {
    top: 0;
  }

  .navigation__links {
    text-align: center;
    list-style-type: none;
    flex-direction: column;
    font-size: 1em;

    @include tablet {
      font-size: 2em;
    }

    @include desktop {
      font-size: 2.2em;
    }

    li {
      margin-bottom: $spacing-md;

      &.mail,
      &.linkedin {
        width: 40px;
      }

      @include tablet {
        margin-bottom: $spacing-lg;

        &.mail,
        &.linkedin {
          width: 60px;
        }
      }
    }

    a {
      color: $purple;
    }
  }
}
</style>
