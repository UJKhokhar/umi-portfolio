<template>
  <div class="padding-top">
    <h3>Other companies I've worked with:</h3>
    <div class="grid-container">
      <img src="http://placekitten.com/200/100" />
      <img src="http://placekitten.com/200/100" />
      <img src="http://placekitten.com/200/50" />
      <img src="http://placekitten.com/200/100" />
      <img src="http://placekitten.com/200/90" />
      <img src="http://placekitten.com/200/100" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  row-gap: 10px;
  justify-items: center;
  align-items: center;

  img {
    width: 100%;
  }
}
</style>
