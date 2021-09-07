<template>
  <div class="message-templates-table">
    <MessageTemplatesForm
      v-if="clickedItem"
      :message-template="clickedItem"
      @close="clickedItem = null"
    />

    <v-data-table
      :loading="$store.getters['messageTemplates/loadingFetch']"
      :headers="headers"
      :items="$store.getters['messageTemplates/items']"
      :server-items-length="$store.getters['messageTemplates/totalItems']"
      :items-per-page.sync="params.per_page"
      :page.sync="params.page"
      :single-select="true"
      @update:page="fetchData()"
      @update:items-per-page="fetchData()"
      @click:row="item => (clickedItem = item)"
      disable-sort
      item-key="id"
      flat
    >
      <template v-slot:[`item.created_at`]="{ item }">
        {{ item.created_at | moment("MMM DD, HH:mm") }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import MessageTemplatesForm from "@/components/company/message-templates/MessageTemplatesForm";

export default {
  components: { MessageTemplatesForm },
  data() {
    return {
      clickedItem: null,
      params: {
        page: 1,
        per_page: 15
      },
      headers: [
        {
          text: this.$t("company.messageTemplates.templateName"),
          value: "title",
          width: "30%"
        },
        {
          text: this.$t("company.messageTemplates.templateContent"),
          value: "text",
          width: "50%"
        },
        {
          text: this.$t("general.createdAt"),
          value: "created_at",
          width: "20%"
        }
      ]
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$store.dispatch("messageTemplates/fetch", this.params);
    }
  }
};
</script>

<style lang="scss">
.message-templates-table {
  .v-data-table {
    tbody tr {
      cursor: pointer;
    }
  }
}
</style>
