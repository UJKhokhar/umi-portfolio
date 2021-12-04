<template>
  <div class=" [ h-align-items-center h-justify-content-center h-margin-bottom-lg-to-xl ]">
    <h2>
      Hi I'm Umi (they/them), a front-end developer who focuses on accessibility and inclusiveness.
      Let's make the internet a better place together.<span aria-label="Finger peace sign emoji">&#x270C;&#x1F3FD;</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss">
h2 {
  text-align: center;
  @include tablet {
    max-width: 600px;
  }

  @include desktop {
    max-width: 850px;
  }
}
</style>
