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
import Accordian from '@/components/Accordian.vue';
import projectList from '@/json/projectList';

export default {
  name: 'LiveProjects',
  components: {
    Accordian,
  },
  data() {
    return {
      activeProjectIndex: null,
      projectList: projectList,
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