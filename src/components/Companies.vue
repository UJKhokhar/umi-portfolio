<template>
  <div
    id="companies"
    class="h-margin-bottom-lg-to-xl"
  >
    <h3 class="h-margin-bottom-md-to-lg">
      Some companies I've worked with
    </h3>
    <div class="gridc">
      <SVGImage
        alt-text="Citi logo"
        svg-file="Citi"
      />
      <SVGImage
        alt-text="Ebay logo"
        svg-file="Ebay"
      />
      <SVGImage
        alt-text="Hawaii logo"
        svg-file="Hawaii"
      />
      <SVGImage
        alt-text="NOAA logo"
        svg-file="NOAA"
      />
      <SVGImage
        alt-text="Promundo logo"
        svg-file="Promundo"
      />
      <SVGImage
        alt-text="Tresemme logo"
        svg-file="Tresemme"
      />
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
  grid-template-columns: 0.4fr;
  justify-content: center;
  grid-row-gap: 30px;
  align-items: center;

  @include tablet {
    grid-template-columns: .3fr .3fr;
    justify-content: space-evenly;
  }

  @include desktop {
    grid-template-columns: .2fr .2fr .2fr;
  }
}
</style>
