<template>
  <div class="[ h-align-items-center h-margin-bottom-lg-to-xl h-justify-content-center contact-container ]">
    <a
      class="[ h-align-items-center ]"
      href="mailto:ujkhokhar@gmail.com?subject=I saw your site Umi and it's awesome!"
    >
      <SVGWrapper
        desc="Mail icon used to indicate a link that opens a mail form"
        svg-title="Mail"
        role="link"
        class="[ h-margin-right-sm ]"
        width="30"
        height="20"
        viewBox="0 0 30 20"
        icon-color="#ffffff"
      ><Mail /></SVGWrapper>
      <h3 class="h-margin-none">Wanna say hi?</h3>
    </a>
  </div>
</template>

<script>
import SVGWrapper from '@/components/SVGWrapper';
import Mail from '@/assets/svgComponents/Mail';

export default {
  name: 'Contact',
  components: {
    SVGWrapper,
    Mail,
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $yellow;
  justify-content: space-evenly;
}
</style>
