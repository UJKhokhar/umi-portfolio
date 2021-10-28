<template>
  <div class="padding-top backwhite">
    <button @click="foo">click me</button>
    <svg
      id="layer1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="000000"
      viewBox="0 0 100 20"
    >
      <title>svg-menu-test</title>
      <path
        id="burger"
        d="M87.62,20H12.38C5.55,20,0,15.51,0,10S5.55,0,12.38,0H87.62C94.45,0,100,4.49,100,10S94.45,20,87.62,20ZM12.38,1C6.1,1,1,5,1,10s5.11,9.05,11.39,9.05H87.62C93.9,19.05,99,15,99,10S93.9,1,87.62,1H12.38Z"
      />
      <path
        id="circ"
        fill="000000"
        style="visibility: hidden"
        d="M10,0a10,10,0,1,0,7.07,2.93A10,10,0,0,0,10,0Zm0,19.05a9.08,9.08,0,1,1,6.39-2.66A9,9,0,0,1,10,19.05Z"
      />
    </svg>
  </div>
</template>

<script>
import KUTE from "kute.js";

export default {
  name: "Test",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    foo() {
      KUTE.to(
        "#burger",
        { path: "#circ" },
        {
          duration: 1000,
          morphPrecision: 1,
          reverseFirstPath: true,
          reverseSecondPath: true,
        }
      ).start();
    },
  },
};
</script>

<style lang="scss">
.backwhite {
  background-color: white;
}
</style>
