<template>
  <div class="team-management">
    <v-row class="page-heading mb-5">
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

<style lang="scss" scoped></style>
