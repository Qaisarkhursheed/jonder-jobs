<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 0H2.5C1.12109 0 0 1.12109 0 2.5V13.75C0 15.1289 1.12109 16.25 2.5 16.25H6.25V19.5312C6.25 19.9141 6.6875 20.1367 6.99609 19.9102L11.875 16.25H17.5C18.8789 16.25 20 15.1289 20 13.75V2.5C20 1.12109 18.8789 0 17.5 0Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#616161"
    }
  }
};
</script>
