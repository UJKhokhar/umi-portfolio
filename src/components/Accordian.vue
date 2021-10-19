<template>
  <div class="accordian" @click="$emit('fuck', index)">
    <h3>{{ workplace.workplace }}</h3>
    <div class="content">
      <ul>
        <li v-for="(item, index) in workplace.description" :key="index">
          {{ item }}
        </li>
      </ul>
      <a :href="workplace.link">Visit the Site</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordian",
  props: ["workplace"],
  emits: ["fuck"],
};
</script>

<style lang="scss">
.active {
  height: 200px;
  background: gray;

  .content {
    display: block;
  }
}

.content {
  display: none;
}
</style>
