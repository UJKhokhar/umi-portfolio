<template>
  <div class="padding-top">
    <h3>Other companies I've worked with:</h3>
    <div class="gridc">
      <SVGImage SVGFile="Citi" />
      <SVGImage SVGFile="Ebay" />
      <SVGImage SVGFile="Hawaii" />
      <SVGImage SVGFile="NOAA" />
      <SVGImage SVGFile="Promundo" />
      <SVGImage SVGFile="Tresemme" />
    </div>
  </div>
</template>

<script>
import SVGImage from "@/components/SVGImage";

export default {
  name: "Companies",
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
}
</style>
