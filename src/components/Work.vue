<template>
  <div class="work padding-top">
    <h3>Work</h3>
    <Accordian
      v-for="(workplace, index) in workList"
      :key="index"
      :class="{ active: activeItemIndex === index }"
      :workplace="workplace"
      @fuck="shit(index)"
    />
  </div>
</template>

<script>
import Accordian from "./Accordian.vue";

export default {
  name: "Work",
  components: {
    Accordian,
  },
  data() {
    return {
      activeItemIndex: null,
      workList: [
        {
          workplace: "ASCAP",
          description: ["foo", "bar", "baz"],
          link: "google.com",
        },
        {
          workplace: "Thingiverse",
          description: ["aaa", "bbb", "ccc"],
          link: "twitter.com",
        },
        {
          workplace: "Pink Art Machine",
          description: ["lala", "emily", "blah"],
          link: "twitter.com",
        },
        {
          workplace: "TJMaxx",
          description: ["poop", "tin", "can"],
          link: "twitter.com",
        },
      ],
    };
  },
  methods: {
    shit(index) {
      if (index === this.activeItemIndex) {
        this.activeItemIndex = null;
      } else {
        this.activeItemIndex = index;
      }
    },
  },
};
</script>