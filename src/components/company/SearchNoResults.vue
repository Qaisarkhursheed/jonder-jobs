<template>
  <div class="search-no-results d-flex align-center flex-column pt-16 pb-16">
    <img :src="require('@/assets/searchnoresults.png')" class="image">
    <div class="message-title pt-4">There is no any results</div>
    <div class="message-subtitle">Try to change filters and search again.</div>
  </div>
</template>

<script>

export default {
  name: 'SearchNoResults',
};
</script>

<style lang="scss" scoped>
.message-title {
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: #222222;
}
.message-subtitle {
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  color: #222222;
}
.image {
  width: 60%;
}
</style>