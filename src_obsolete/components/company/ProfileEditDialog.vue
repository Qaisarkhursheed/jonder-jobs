<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    width="350px"
    max-width="350px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card flat class="rounded-lg">
      <v-card>
        <template v-if="type == 'ok'">
          <v-card-text>
            <div class="text-center">
              <v-icon size="60px" color="#0253B3">
                mdi-check-circle-outline
              </v-icon>
            </div>
            <div class="message pl-12 pr-12 pt-5 pb-3 text-justify">
              <span>
                {{ $t("modalSuccess") }}
              </span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="action-btn ma-0 pa-0">
            <v-btn
              class="action-btn ma-0 pa-0 pb-7 pt-7"
              width="100%"
              color="#0253B3"
              text
              @click="close('ok')"
            >
              {{ $t("ok") }}
            </v-btn>
          </v-card-actions>
        </template>
        <template v-else-if="type === 'warning'">
          <v-card-text>
            <div class="text-center">
              <v-icon size="60px" color="#C96262">
                mdi-alert-rhombus-outline
              </v-icon>
            </div>
            <div class="message pl-12 pr-12 pt-5 pb-3 text-justify">
              <span>
                {{ $t("modalConfirm") }}
              </span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="action-btn ma-0 pa-0">
            <v-btn
              class="ma-0 pa-0 pb-7 pt-7"
              width="50%"
              color="#999"
              text
              @click="close('abort')"
            >
              {{ $t("cancel") }}
            </v-btn>
            <v-btn
              class="action-btn ma-0 pa-0 pb-7 pt-7"
              width="50%"
              color="#0253B3"
              text
              @click="close('save')"
            >
              {{ $t("save") }}
            </v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
// Move to generic global component if needed

export default {
  name: "ProfileEditDialog",

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "ok"
    }
  },

  methods: {
    close(type) {
      this.$emit("close", type);
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  font-family: $open-sans !important;
}
.message {
  font-weight: 600;
  font-size: 16px;
  color: #222222;
}
.action-btn {
  font-weight: bold;
  font-size: 16px;
}
</style>
