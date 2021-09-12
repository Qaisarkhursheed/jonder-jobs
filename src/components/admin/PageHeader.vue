<template>
  <div class="admin-page-header">
    <div class="page-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {

  name: "PageHeader",

  props: {
    title: {
      type: String
    }
  }

}
</script>

<style lang="scss" scoped>
.admin-page-header {}

.page-title {
  font-weight: 500;
  font-size: 24px;
  color: rgba(24, 24, 25, 0.9);
}
</style>