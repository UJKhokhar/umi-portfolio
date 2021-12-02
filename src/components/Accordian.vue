<template>
  <div class="accordian">
    <button
      class="accordian__button"
      @click="$emit('fuck', index)"
    >
      {{ workplace.workplace }}
    </button>
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
        class="h-align-items-center accordian__link"
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
import Arrow from '@/assets/svgComponents/Arrow';

export default {
  name: 'Accordian',
  components: {
    SVGWrapper,
    Arrow,
  },
  props: {
    workplace: {
      type: Object,
      required: true,
    }
  },
  emits: ['fuck'],
};
</script>

<style lang="scss" scoped>
.accordian {
  border-bottom: 1px solid $purple;

  .accordian__button {
    cursor: pointer;
    width: 100%;
    text-align: left;
    margin: 0;
    padding: 0;
    border: none;
    height: 48px;
    background-color: transparent;
    color: $purple;
    font-size: .9em;

    @include tablet {
      height: 96px;
      font-size: 1.2em;
    }

    @include desktop {
      height: 96px;
      font-size: 1.2em;
    }
  }

  .accordian__link {
    justify-content: flex-end;
  }
}

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

  ul {
    list-style: circle;
    margin-left: 20px;

    @include tablet {
      margin-left: 25px;
    }
  }

  h4 {
    cursor: pointer;
  }
</style>
