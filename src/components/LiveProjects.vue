<template>
  <div
    id="live_projects"
    class="h-margin-bottom-lg-to-xl"
  >
    <h3>Live Projects</h3>
    <Accordian
      v-for="(project, index) in projectList"
      :key="index"
      :class="{ 'accordian--active': activeProjectIndex === index }"
      :project="project"
      :tab-index-value="activeProjectIndex === index ? null : '-1'"
      @expandProject="expandProject(index)"
    />
  </div>
</template>

<script>
import Accordian from './Accordian.vue';

export default {
  name: 'LiveProjects',
  components: {
    Accordian,
  },
  data() {
    return {
      activeProjectIndex: null,
      projectList: [
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
    expandProject(projectIndex) {
      if (projectIndex === this.activeProjectIndex) {
        this.activeProjectIndex = null;
      } else {
        this.activeProjectIndex = projectIndex;
      }
    },
  },
};
</script>