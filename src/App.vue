<template>
  <UmiHeader />
  <Intro />
  <LiveProjects />
  <Companies />
  <Contact />
</template>

<script>
import UmiHeader from './components/UmiHeader.vue';
import Intro from './components/Intro.vue';
import LiveProjects from './components/LiveProjects.vue';
import Companies from './components/Companies.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    UmiHeader,
    Intro,
    LiveProjects,
    Companies,
    Contact,
  },
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/main.scss';
</style>
