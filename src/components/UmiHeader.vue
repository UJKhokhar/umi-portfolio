<template>
  <div class="umi-header">
    <nav class="main-nav">
      <h1>Umi</h1>
      <button
        :class="{ open: isNavOpen }"
        aria-label="Toggle Navigation"
        @click="toggleNav"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            d="M90 7a3 3 0 0 1 3 3v80a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h80m0-7H10A10 10 0 0 0 0 10v80a10 10 0 0 0 10 10h80a10 10 0 0 0 10-10V10A10 10 0 0 0 90 0Z"
          />
          <g class="foo">
            <rect x="20" y="20" width="60" height="10" rx="5" />
          </g>
          <!-- <g>
            <rect x="20" y="45" width="60" height="10" rx="5" />
          </g>
          <g class="translate-up">
            <rect x="20" y="70" width="60" height="10" rx="5" />
          </g> -->
        </svg>
      </button>
    </nav>
    <nav class="hidden-nav" :class="{ open: isNavOpen }">
      <ul>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "UmiHeader",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;

      anime({
        targets: ".foo",
        translateY: 20,
        delay: 100,
        easing: "easeInOutQuad",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
nav.main-nav {
  display: flex;
  justify-content: space-between;
}

nav.hidden-nav {
  position: absolute;
  right: 0;
  top: 100px;
  display: none;
  background: #ffffff;
  color: #000000;

  &.open {
    display: block;
  }
}

// button g {
//   transition: all ease-in-out 0.25s;
//   transform-origin: center;
// }

// button.open .translate-down {
//   transform: translateY(10px);
//   transition-delay: 0s;
// }

// button.open .rotate {
//   transform: rotate(45deg);
//   transition-delay: 0.25s;
// }

// button.open .translate-up {
//   transform: translateY(-25px);
//   transition-delay: 0s;
// }

svg {
  fill: #ffffff;
  width: 25px;
}
</style>
