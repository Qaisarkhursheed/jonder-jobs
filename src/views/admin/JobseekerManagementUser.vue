<template>
  <div class="jobseeker-management-user">
    <v-card flat class="pa-8">
      <v-row>
        <v-col cols="12">
          <div class="avatar">
            <v-avatar color="primary" size="70">
              <img v-if="user.profile_img" :src="user.profile_img" />
            </v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("firstName") }}
                </label>
                <v-text-field
                  v-model="user.first_name"
                  type="text"
                  outlined
                  readonly
                />
              </div>
            </v-col>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("lastName") }}
                </label>
                <v-text-field
                  v-model="user.last_name"
                  type="text"
                  outlined
                  readonly
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("aboutMe") }}
                </label>
                <v-textarea v-model="user.about_me" outlined readonly />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("address") }}
            </label>
            <v-text-field
              v-model="user.address"
              type="text"
              outlined
              readonly
            />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("emailAddress") }}
            </label>
            <v-text-field v-model="user.email" type="email" outlined readonly />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("phone") }}
            </label>
            <v-text-field v-model="user.phone" type="text" outlined readonly />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("currentPosition") }}
            </label>
            <v-autocomplete
              v-model="user.current_position"
              :items="types.JOB_POSITION"
              item-value="id"
              :item-text="$i18n.locale"
              type="text"
              outlined
              readonly
            />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("detailsAboutYouBranchesPlace") }}
            </label>
            <v-autocomplete
              :attach="true"
              v-model="user.branche"
              item-value="id"
              :item-text="$i18n.locale"
              :items="types.JOB_BRANCHE"
              outlined
              flat
              multiple
              :placeholder="$t('detailsAboutYouBranchesPlace')"
              class="mt-1"
              readonly
            >
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("detailsAboutYouRolePlace") }}
            </label>
            <v-autocomplete
              :attach="true"
              v-model="user.looking_for_position"
              :items="types.JOB_POSITION"
              item-value="id"
              :item-text="$i18n.locale"
              :placeholder="$t('detailsAboutYouRolePlace')"
              multiple
              outlined
              flat
              class="mt-1"
              readonly
            >
            </v-autocomplete>
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("lookingForEmployementPlace") }}
            </label>
            <v-select
              :attach="true"
              v-model="user.looking_for_employment_type"
              :items="types.EMPLOYEMENT_TYPE"
              :item-text="$i18n.locale"
              item-value="id"
              :placeholder="$t('lookingForEmployementPlace')"
              outlined
              multiple
              readonly
              class="mt-1"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import types from "@/types";

export default {
  name: "JobseekerManagementUser",

  props: {
    id: {
      type: [String, Number]
    }
  },

  data() {
    return {
      user: {}
    };
  },

  created() {
    axios.get(`/users/${this.id}`).then(res => {
      this.user = res.data.data;
    });
  },
  computed: {
    types() {
      return types;
    }
  }
};
</script>
