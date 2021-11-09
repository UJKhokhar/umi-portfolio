<template>
  <div class="padding-top">
    <h3>Other companies I've worked with:</h3>
    <div class="grid-container">
      <SVGWrapper height="194.85832" width="300"><CitiLogo /></SVGWrapper>
      <SVGWrapper width="300" height="120.32412"><EbayLogo /></SVGWrapper>
      <SVGWrapper viewBox="0 0 270.0065 270" width="270.0065" height="270"
        ><HawaiiLogo
      /></SVGWrapper>
      <SVGWrapper viewBox="0 0 467.02979 469.96338"><NOAALogo /></SVGWrapper>
      <SVGWrapper width="449.1px" height="133.2px" viewBox="0 0 449.1 133.2"
        ><PromundoLogo
      /></SVGWrapper>
      <SVGWrapper viewBox="0 0 192.76 192.76"><TresemmeLogo /></SVGWrapper>
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
