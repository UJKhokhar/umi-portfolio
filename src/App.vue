<template>
  <UmiHeader />
  <Intro />
  <Work />
</template>

<script>
import UmiHeader from "./components/UmiHeader.vue";
import Intro from "./components/Intro.vue";
import Work from "./components/Work.vue";

export default {
  name: "App",
  components: {
    UmiHeader,
    Intro,
    Work,
  },
};
</script>

<style>
body {
  background-color: #000000;
  color: #ffffff;
  margin: 0;
  padding: 0;
}
</style>
