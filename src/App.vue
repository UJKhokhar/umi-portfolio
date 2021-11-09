<template>
  <UmiHeader />
  <Intro />
  <Work />
  <!-- <Test /> -->
  <Companies />
  <Contact />
</template>

<script>
import UmiHeader from "./components/UmiHeader.vue";
import Intro from "./components/Intro.vue";
import Work from "./components/Work.vue";
import Companies from "./components/Companies.vue";
// import Test from "./components/Test.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
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

<style style="scss">
@import "./styles/reset.scss";

body {
  background-color: #000000;
  color: #ffffff;
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
}

h3 {
  font-size: 1.1em;
  margin-bottom: 24px;
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
  color: inherit;
}

li {
  font-size: 0.7em;
  margin-bottom: 5px;
}
</style>
