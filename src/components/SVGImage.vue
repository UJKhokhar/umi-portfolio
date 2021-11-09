<template>
  <div>
    <img class="responsive-img" alt="JS logo" :src="path" />
  </div>
</template>

<script>
export default {
  name: "SVG-image",
  props: {
    SVGFile: String,
  },
  computed: {
    path() {
      return require(`@/assets/editedSVG/${this.SVGFile}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.responsive-img {
  max-width: 100%;
  width: 100%;
  height: auto;
}
</style>