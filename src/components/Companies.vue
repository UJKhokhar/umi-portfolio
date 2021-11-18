<template>
  <div class="h-padding-top">
    <h3>Some companies I've worked with</h3>
    <div class="gridc">
      <SVGImage svg-file="Citi" />
      <SVGImage svg-file="Ebay" />
      <SVGImage svg-file="Hawaii" />
      <SVGImage svg-file="NOAA" />
      <SVGImage svg-file="Promundo" />
      <SVGImage svg-file="Tresemme" />
    </div>
  </div>
</template>

<script>
import SVGImage from '@/components/SVGImage';

export default {
  name: 'Companies',
  components: {
    SVGImage,
  },
};
</script>

<style lang="scss" scoped>
.gridc {
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
  grid-row-gap: 30px;
  align-items: center;

  @include tablet {
    grid-template-columns: .4fr .4fr;
    grid-column-gap: 96px;
    grid-row-gap: 48px;
  }
}
</style>
