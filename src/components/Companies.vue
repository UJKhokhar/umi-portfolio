<template>
  <div class="padding-top">
    <h3>Other companies I've worked with:</h3>
    <div class="wrapper">
      <div class="grid-container">
        <img src="http://placekitten.com/200/100" />
        <img src="http://placekitten.com/200/100" />
        <img src="http://placekitten.com/200/50" />
        <img src="http://placekitten.com/200/100" />
        <img src="http://placekitten.com/200/90" />
        <img src="http://placekitten.com/200/100" />
      </div>
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
  width: 100%;
  display: grid;
  grid-template-columns: 40% 40%;
  column-gap: 5%;
  row-gap: 10px;
  justify-items: center;
  align-items: center;

  img {
    width: 100%;
  }
}

.wrapper {
  display: flex;
  justify-items: center;
}
</style>
