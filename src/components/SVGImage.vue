<template>
  <div>
    <img
      :src="path"
      alt="altText"
    >
  </div>
</template>

<script>
export default {
  name: 'SVGImage',
  props: {
    svgFile: {
      type: String,
      required: true,
    },
    altText: {
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
img {
  max-width: 100%;
  width: 100%;
}
</style>