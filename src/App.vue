<template>
  <UmiHeader />
  <Intro />
  <Work />
  <Companies />
  <Contact />
</template>

<script>
import UmiHeader from "./components/UmiHeader.vue";
import Intro from "./components/Intro.vue";
import Work from "./components/Work.vue";
import Companies from "./components/Companies.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    UmiHeader,
    Intro,
    Work,
    Companies,
    Contact,
  },
};
</script>

<style>
@import "./styles/reset.scss";

body {
  background-color: #000000;
  color: #ffffff;
  margin: 0;
  padding: 20px 40px;
  font-family: "Nunito", Helvetica, sans-serif;
  font-weight: normal;
  font-size: clamp(100%, 1rem + 2vw, 24px);
}

.padding-top {
  padding-top: 40px;
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
}
</style>
