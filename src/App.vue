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
body {
  background-color: #000000;
  color: #ffffff;
  margin: 0;
  padding: 10px 40px;
}
</style>
