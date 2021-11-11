<template>
  <UmiHeader />
  <Intro />
  <Work />
  <!-- <Test /> -->
  <Companies />
  <Contact />
</template>

<script>
import UmiHeader from './components/UmiHeader.vue';
import Intro from './components/Intro.vue';
import Work from './components/Work.vue';
import Companies from './components/Companies.vue';
// import Test from "./components/Test.vue";
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    UmiHeader,
    Intro,
    Work,
    Companies,
    Contact,
    // Test,
  },
};
</script>

<style lang="scss">
@import './styles/reset.scss';

body {
  background-color: $black;
  color: $purple;
  margin: 0;
  padding: 40px 40px;
  font-family: "Nunito", Helvetica, sans-serif;
  font-weight: normal;
  font-size: clamp(100%, 1rem + 2vw, 24px);
}

.padding-top {
  padding-top: 60px;
}

h1 {
  font-weight: 900;
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
  color: $white;
}

h3 {
  font-size: 1.1em;
  margin-bottom: 48px;
  text-align: center;
  color: $yellow;
}

h4 {
  font-size: 0.9em;
  margin: 12px 0;
}

ul {
  list-style: circle;
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: $yellow;
  margin-bottom: 12px;
}

li {
  font-size: 0.7em;
  margin-bottom: 12px;
}

.h-align-items-center {
  display: flex;
  align-items: center;
}

.h-margin-right {
  margin-right: 6px;
}
</style>
