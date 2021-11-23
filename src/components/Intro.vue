<template>
  <div class="intro h-align-items-center h-justify-content-center h-padding-top">
    <h2>Hi I'm Umi (they/them). I give code. You give money.</h2>
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
    @include desktop {
      max-width: 700px;
    }
  }
}
</style>
