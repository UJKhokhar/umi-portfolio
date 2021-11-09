<template>
  <div class="padding-top contact-container">
    <a
      href="mailto:ujkhokhar@gmail.com?subject=I saw your site Umi and it's awesome!"
    >
      <SVGWrapper width="30" height="22" iconColor="#ffffff"
        ><Mail
      /></SVGWrapper>
      <h3>Wanna say hi?</h3>
    </a>
  </div>
</template>

<script>
import SVGWrapper from "@/components/SVGWrapper";
import Mail from "@/assets/logos/Mail";

export default {
  name: "Contact",
  components: {
    SVGWrapper,
    Mail,
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff433;
}

.contact-container {
  display: flex;
  justify-content: center;
}

h3 {
  margin-left: 20px;
  display: inline-block;
}
</style>
