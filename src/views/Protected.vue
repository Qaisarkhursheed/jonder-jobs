<template>
  <auth-layout>
    <div>{{ $t("protected") }}</div>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
export default {
  name: "Protected",
  components: { AuthLayout }
};
</script>

<style></style>
