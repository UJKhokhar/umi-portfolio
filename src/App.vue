<template>
  <UmiHeader />
  <Intro />
  <Work />
  <Companies />
  <Contact />
</template>

<script>
import UmiHeader from './components/UmiHeader.vue';
import Intro from './components/Intro.vue';
import Work from './components/Work.vue';
import Companies from './components/Companies.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    UmiHeader,
    Intro,
    Work,
    Companies,
    Contact,
  },
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/main.scss';

body {
  background-color: $black;
  color: $purple;
  margin: 0;
  padding: 40px;

  @include tablet {
    padding: 60px;
  }

  @include desktop {
    padding: 80px;
  }
}
</style>
