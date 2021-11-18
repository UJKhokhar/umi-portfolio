<template>
  <div class="umi-header">
    <nav class="main-nav">
      <h1>Umi</h1>
      <BurgerMenu @toggleNav="foo" />
    </nav>
    <div
      class="abso"
      :class="{active : isNavOpen}"
    >
      <nav>
        <ul>
          <a href="#live"><li>Live Projects</li></a>
          <a href="#companies"><li>Other Work</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
  name: 'UmiHeader',
  components: {
    BurgerMenu,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    foo() {
      console.log('hmm');
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style lang="scss" scoped>

nav.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $purple;
    position: relative;
    z-index: 2;
  }
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

$border_size: 10px;

.abso {
  width: calc(100vw - #{$border_size * 2});
  height: calc(100vh - #{$border_size * 2});
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
