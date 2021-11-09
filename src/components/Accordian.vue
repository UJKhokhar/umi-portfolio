<template>
  <div>
    <div @click="$emit('fuck', index)">
      <h4>{{ workplace.workplace }}</h4>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in workplace.description" :key="index">
          {{ item }}
        </li>
      </ul>
      <a :href="workplace.link"
        ><SVGWrapper width="30" height="25" iconColor="#ffffff"
          ><Arrow />
        </SVGWrapper>
        Visit the Site</a
      >
    </div>
  </div>
</template>

<script>
import SVGWrapper from "@/components/SVGWrapper";
import Arrow from "@/assets/logos/Arrow";

export default {
  name: "Accordian",
  components: {
    SVGWrapper,
    Arrow,
  },
  props: ["workplace"],
  emits: ["fuck"],
};
</script>

<style lang="scss">
.content {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
  border-bottom: 1px solid white;
}

.active {
  .content {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
    padding-bottom: 12px;
  }
}
</style>
