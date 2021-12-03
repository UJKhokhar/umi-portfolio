<template>
  <div class="intro h-align-items-center h-justify-content-center h-margin-bottom-lg-to-xl">
    <h2>
      Hi I'm Umi (they/them). A front-end developer who focuses on accessibility and inclusiveness.
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
