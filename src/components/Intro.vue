<template>
  <div class="intro h-align-items-center h-justify-content-center h-padding-top">
    <h2>Hi I'm Umi (they/them). A front-end developer who focuses on accessibility and inclusiveness. Let's build cool things together! ✌🏽</h2>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss">
.intro {
  text-align: center;

  h2 {
    @include tablet {
      max-width: 600px;
    }

    @include desktop {
      max-width: 850px;
    }
  }
}
</style>
