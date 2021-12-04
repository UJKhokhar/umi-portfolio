<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    aria-labelledbsy="title desc"
    :role="role"
    :color="svgColor"
  >
    <title id="title">{{ svgTitle }}</title>
    <desc id="desc">{{ desc }}</desc>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SVGWrapper',
  props: {
    svgTitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    viewBox: {
      type: String,
      required: true,
    },
    svgColor: {
      type: String,
      default: 'currentColor',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>