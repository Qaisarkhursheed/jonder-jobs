<template>
  <v-dialog
    class="dialog"
    v-model="active"
    @click:outside="close('abort')"
    persistent
    width="750px"
    max-width="750px"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <v-card flat class="rounded-lg wrap upgrade-dialog">
      <div class="modal-title">
        Add New Card
      </div>

      <div class="card-info">
        <v-col cols="6">
          <label class="profile-label">
            Kreditkartennummer
          </label>
          <v-text-field
            dense
            placeholder="XXXX-XXXX-XXXX-XXXX"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="profile-label">
            Karteninhaber
          </label>
          <v-text-field
            dense
            placeholder="Max Mustermann"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </div>
      <div class="card-info">
        <v-col cols="3">
          <label class="profile-label">
            Expiration Date
          </label>
          <v-text-field
            dense
            placeholder="Monat/Jahr"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <label class="profile-label">
            CVC
          </label>
          <v-text-field
            dense
            placeholder="***"
            type="text"
            outlined
            solo
            flat
            hide-details
            background-color="white"
          ></v-text-field>
        </v-col>
      </div>

      <div class="buttons">
        <v-btn
          @click="close"
          height="56"
          class="mt-16 font-weight-medium upgrade-btn"
          style="margin-right: 20px;"
        >
          {{ $t("general.cancel") }}
        </v-btn>
        <v-btn
          @click="save"
          color="primary"
          height="56"
          width="178"
          class="mt-16 font-weight-medium upgrade-btn"
        >
          Next
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";

export default {
  name: "AddNewCard",

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "ok"
    },
    edit: {
      type: [Object, Boolean]
    }
  },
  data() {
    return {};
  },
  created() {
    if (this.edit) {
      this.populate();
    }
  },
  methods: {
    close(type) {
      this.$emit("close", type);
    },
    save() {
      if (this.edit) {
        store.dispatch("user/updateUser", {
          id: this.edit.id,
          payload: this.form
        });
      } else {
        console.log();
      }
      this.$emit("close", 1);
    },
    populate() {}
  }
};
</script>

<style lang="scss" scoped>
.modal-title {
  padding: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
}

.card-info {
  display: flex;
  flex-direction: row;
  padding: 0 28px;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 40px;
}
</style>
