<template>
  <div class="padding-top contact-container">
    <a
      class="h-align-items-center"
      href="mailto:ujkhokhar@gmail.com?subject=I saw your site Umi and it's awesome!"
    >
      <SVGWrapper
        width="30"
        height="22"
        icon-color="#ffffff"
      ><Mail /></SVGWrapper>
      <h3>Wanna say hi?</h3>
    </a>
  </div>
</template>

<script>
import SVGWrapper from '@/components/SVGWrapper';
import Mail from '@/assets/logos/Mail';

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
  text-decoration: none;
  color: $yellow;
  justify-content: space-evenly;
}

h3 {
  display: inline-block;
  margin-bottom: 0;
}
</style>
