<template>
  <div class="svg-wrapper">
    <svg
      id="poop"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      @click="toggleNav"
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
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
let played = false;

export default {
  name: 'BurgerMenu',
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      // // this.isNavOpen = !this.isNavOpen;
      // console.log("WTF");
      const t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 200,
        autoplay: false,
      });

      // // Lines to circles
      t1.add({
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
        .add(
          {
            targets: '#line3',
            opacity: 0,
          },
          '-=200'
        )
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

      played = !played;

      if (!played) {
        t1.reverse();
      }

      t1.play();
    },
  },
};
</script>

<style lang="scss">
.svg-wrapper {
  width: 50px;
  height: 50px;
}
</style>
