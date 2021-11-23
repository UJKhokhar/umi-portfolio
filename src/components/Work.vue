<template>
  <div class="work h-padding-top">
    <h3 href="#live">
      Live Projects
    </h3>
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
import Accordian from './Accordian.vue';

export default {
  name: 'Work',
  components: {
    Accordian,
  },
  data() {
    return {
      activeItemIndex: null,
      workList: [
        {
          workplace: 'ASCAP',
          description: [
            'Led development to modernize codebase and migrate front end from backbone.js to vue.js',
            'Built component libraries',
          ],
          link: 'https://ascap.com',
        },
        {
          workplace: 'Thingiverse',
          description: [
            'Full Stack development on a site with millions of users using PHP and JavaScript',
          ],
          link: 'https://thingiverse.com',
        },
        {
          workplace: 'Pink Art Machine',
          description: [
            'Designed and built a fully responsive custom portfolio site using Vue.js',
            'Set up site using AWS (Amazon Web Services) using S3 and cloudfront to reduce costs for client',
          ],
          link: 'https://pinkartmachine.com',
        },
        {
          workplace: 'TJMaxx',
          description: [
            'Built a site for TJMaxx to promote their Maxx You Project, dedicated to supporting women',
          ],
          link: 'https://maxxyouproject.com/',
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