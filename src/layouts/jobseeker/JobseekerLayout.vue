<template>
  <v-container
    fluid
    class="jobseeker-layout pa-0 d-flex flex-column flex-grow-1"
    style="background-color: #f5f5f5"
  >
    <header class="pa-5 white">
      <JobseekerHeader />
    </header>

    <main class="flex-grow-1">
      <slot />
      <router-view />
    </main>

    <footer>
      <JobseekerFooter />
    </footer>
  </v-container>
</template>

<script>
import JobseekerHeader from "./JobseekerHeader";
import JobseekerFooter from "./JobseekerFooter";

export default {
  components: { JobseekerHeader, JobseekerFooter },

  props: {
    backButton: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.jobseeker-layout {
  main {
    padding: 20px;

    @media (max-width: 575px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
