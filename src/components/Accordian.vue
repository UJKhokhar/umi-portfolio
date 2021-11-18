<template>
  <div class="h-border-bottom-purple">
    <div @click="$emit('fuck', index)">
      <h4>{{ workplace.workplace }}</h4>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in workplace.description"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <a
        :href="workplace.link"
        class="h-align-items-center"
      ><SVGWrapper
        class="h-margin-right"
        width="15"
        height="12"
        icon-color="#fff433"
      ><Arrow />
      </SVGWrapper>
        Visit the Site</a>
    </div>
  </div>
</template>

<script>
import SVGWrapper from '@/components/SVGWrapper';
import Arrow from '@/assets/logos/Arrow';

export default {
  name: 'Accordian',
  components: {
    SVGWrapper,
    Arrow,
  },
  props: ['workplace'],
  emits: ['fuck'],
};
</script>

<style lang="scss" scoped>
.content {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
}

.active {
  .content {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
  }
}

a {
  font-size: 0.8em;
}

.h-align-items-center {
  display: flex;
  align-items: center;
}

.h-margin-right {
  margin-right: 6px;
}

.h-border-bottom-purple {
  border-bottom: 1px solid $purple;
}

ul {
  list-style: circle;
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: $yellow;
  margin-bottom: 12px;
}

li {
  font-size: 0.7em;
  margin-bottom: 12px;
}
</style>
