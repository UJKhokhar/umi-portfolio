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
</style>
