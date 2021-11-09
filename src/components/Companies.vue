<template>
  <div class="padding-top">
    <h3>Other companies I've worked with:</h3>
    <div class="grid-container">
      <SVGWrapper height="65"><CitiLogo /></SVGWrapper>
      <SVGWrapper height="41"><EbayLogo /></SVGWrapper>
      <SVGWrapper><HawaiiLogo /></SVGWrapper>
      <SVGWrapper><NOAALogo /></SVGWrapper>
      <SVGWrapper height="30"><PromundoLogo /></SVGWrapper>
      <SVGWrapper height="51"><TresemmeLogo /></SVGWrapper>
    </div>
  </div>
</template>

<script>
import SVGWrapper from "@/components/SVGWrapper";
import CitiLogo from "@/assets/logos/CitiLogo.vue";
import EbayLogo from "@/assets/logos/EbayLogo.vue";
import HawaiiLogo from "@/assets/logos/HawaiiLogo.vue";
import NOAALogo from "@/assets/logos/NOAALogo.vue";
import PromundoLogo from "@/assets/logos/PromundoLogo.vue";
import TresemmeLogo from "@/assets/logos/TresemmeLogo.vue";

export default {
  name: "Companies",
  components: {
    SVGWrapper,
    CitiLogo,
    EbayLogo,
    HawaiiLogo,
    NOAALogo,
    PromundoLogo,
    TresemmeLogo,
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  row-gap: 10px;
  justify-items: center;
  align-items: center;

  img {
    width: 100%;
  }
}
</style>
