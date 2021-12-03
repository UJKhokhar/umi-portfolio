<template>
  <div class="h-margin-bottom-lg-to-xl">
    <header>
      <h1>Umi</h1>
      <Menu />
    </header>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  name: 'UmiHeader',
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $purple;
    position: relative;
    z-index: 2;
  }
}
</style>
