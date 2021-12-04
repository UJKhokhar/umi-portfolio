<template>
  <div class="accordian">
    <button
      class="accordian__button"
      @click="$emit('expandProject')"
    >
      {{ project.workplace }}
    </button>
    <div class="project">
      <ul class="project__details h-margin-bottom-sm-to-md">
        <li
          v-for="(item, index) in project.description"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <div class="project__footer">
        <a
          :href="project.link"
          class="project__link [ h-align-items-center  h-margin-bottom-sm-to-md ]"
          :tabindex="tabIndexValue"
        ><SVGWrapper
          desc="Arrow used to indicate a link"
          svg-title="Arrow"
          role="link"
          class="h-margin-right-sm"
          width="15"
          height="12"
          viewBox="0 0 15 12"
          icon-color="#fff433"
        ><Arrow />
        </SVGWrapper>
          Visit the Site</a>
      </div>
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
    project: {
      type: Object,
      required: true,
    },
    tabIndexValue: {
      required: true,
      validator: (value) => (value == '-1') || (value == null)
    }
  },
  emits: ['expandProject'],
};
</script>

<style lang="scss" scoped>
.accordian {
  border-bottom: 1px solid $purple;

  .accordian__button {
    font-weight: 700;
    padding: $spacing-sm 0;
    background-color: transparent;
    color: $purple;
    font-size: .9em;
    font-family: "Nunito", Helvetica, sans-serif;

    @include tablet {
      padding: $spacing-md 0;
      font-size: 1.2em;
    }
  }
}

.project {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  .project__footer {
    display: flex;
    justify-content: flex-end;
  }

  .project__link {
    color: $yellow;
    font-size: 0.7em;
    cursor: pointer;

    @include tablet {
      font-size: 0.9em;
    }

    @include desktop {
      font-size: 1em;
    }

    svg {
      transition: translateX 1s ease-in-out;
    }

    &:hover {
      svg {
        transform: translateX(6px);
      }
    }
  }
}

.accordian--active {
  .project {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
  }
}

.project__details {
  list-style: circle;
  margin-left: $spacing-md;

  li {
    font-size: 0.7em;
    line-height: 1.3;
    &:not(:last-of-type) {
      margin-bottom: $spacing-sm;
    }

    @include tablet {
      font-size: 1em;

      &:not(:last-of-type) {
        margin-bottom: $spacing-md
      }
    }
  }
}

h4 {
  cursor: pointer;
}
</style>
