<template>
  <div class="team-management">
    <v-row class="heading mb-5">
      <v-col cols="col">
        <div class="title">
          {{ $t("messageTemplates") }}
        </div>
        <div class="subtitle">
          {{ $t("messageTemplatesSub") }}
        </div>
      </v-col>
      <v-col cols="auto">
        <MessageTemplatesForm />
      </v-col>
    </v-row>

    <div class="table">
      <MessageTemplatesTable />
    </div>
  </div>
</template>

<script>
import MessageTemplatesTable from "@/components/company/message-templates/MessageTemplatesTable";
import MessageTemplatesForm from "@/components/company/message-templates/MessageTemplatesForm";

export default {
  components: { MessageTemplatesTable, MessageTemplatesForm }
};
</script>

<style lang="scss" scoped>
.heading {
  font-weight: 600;
  font-size: 32px;
  color: #222222;

  .title {
    font-weight: 600;
    font-size: 32px !important;
    color: #222222;
  }

  .subtitle {
    font-weight: normal;
    font-size: 18px;
    color: #7a7a7a;
  }
}
</style>
