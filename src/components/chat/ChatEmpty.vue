<template>
  <div class="chat-empty">
    <h1>
      <span class="greeting">{{ $t("hello") }}, </span>
      <span class="name">{{ $store.getters["user/user"] | fullname }}</span>
    </h1>

    <p>{{ $t("messagesEmpty") }}</p>

    <v-btn
      color="primary"
      height="48"
      class="px-10 mt-3"
      @click="$router.push({ name: 'EmployerSearch' })"
    >
      {{ $t("toJonderSearch") }}
    </v-btn>

    <v-img
      width="377"
      class="mx-auto mt-10"
      :src="require('@/assets/images/messages_empty.png')"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.chat-empty {
  h1 {
    font-size: 32px;

    .greeting {
      color: #222222;
      font-weight: 500;
    }

    .name {
      color: #0253b3;
      font-weight: 600;
    }
  }

  p {
    font-size: 20px;
    line-height: 24px;
    color: #222222;
  }
}
</style>
