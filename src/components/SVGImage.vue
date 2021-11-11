<template>
  <div>
    <img
      class="responsive-img"
      alt="JS logo"
      :src="path"
    >
  </div>
</template>

<script>
export default {
  name: 'SVGImage',
  props: {
    svgFile: {
      type: String,
      required: true
    }
  },
  computed: {
    path() {
      return require(`@/assets/editedSVG/${this.svgFile}.svg`);
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