<template>
  <div class="umi-header">
    <nav class="main-nav">
      <h1>Umi</h1>
      <BurgerMenu />
    </nav>
  </div>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
  name: 'UmiHeader',
  components: {
    BurgerMenu,
  },
};
</script>

<style lang="scss" scoped>

nav.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $purple;
    position: relative;
    z-index: 2;
  }
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}
</style>
