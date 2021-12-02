<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    role="presentation"
  >
    <title>{{ svgTitle }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    svgTitle: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 100,
    },
    height: {
      type: [Number, String],
      default: 100,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>