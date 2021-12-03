<template>
  <div>
    <div class="svg-wrapper">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        @click="navStuff"
      >
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
      class="abso"
      :class="{active : isNavOpen}"
    >
      <nav>
        <ul>
          <a
            href="#live"
            @click="go('work')"
          ><li>Live Projects</li></a>
          <a
            href="#companies"
            @click="go('companies')"
          ><li>Other Work</li></a>
          <a
            href="#contact"
          ><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
let played = false;

export default {
  name: 'Menu',
  data() {
    return {
      isNavOpen: false,
    };
  },
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
  methods: {
    go(where) {
      this.animateNav();
      this.isNavOpen = !this.isNavOpen;
      document.body.classList.toggle('h-no-scroll');
      document.getElementById(where).scrollIntoView({behavior: 'smooth'})
    },
    navStuff() {
      this.animateNav();
      window.scrollTo(0,0);
      this.isNavOpen = !this.isNavOpen;
      document.body.classList.toggle('h-no-scroll');
    },
    animateNav() {
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

.abso {
  width: calc(100vw - #{$border_size * 2});
  height: calc(100vh - #{$border_size * 2});
  height: calc(var(--vh, 1vh) * 100 - #{$border_size * 2});
  background-color: $white;
  z-index: 1;
  position: absolute;
  top: -2000px;
  left: 0;
  transition: ease-in top .25s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: $border_size solid $purple;
  border-radius: 20px;

  &.active {
    top: 0;
  }

  ul {
    text-align: center;
    list-style-type: none;

    li {
      padding: 20px 0;
    }

    a {
      color: $purple;
      text-decoration: none;
      font-size: 1.5em;

      @include tablet {
        font-size: 2.5em;
      }
    }
  }
}
</style>
