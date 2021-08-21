<template>
  <div class="mo-step-3">
    <ModalEducation
      v-if="modals.education.active"
      :active="modals.education.active"
      :edit="modals.education.edit"
      @close="toggleModal('education')"
    />
    <ModalExperience
      v-if="modals.experience.active"
      :active="modals.experience.active"
      :edit="modals.experience.edit"
      @close="toggleModal('experience')"
    />

    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.tellAboutExperience") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="nextScreen">
      <label class="profile-label">
        {{ $t("user.onboarding.experienceInYears") }}
      </label>
      <v-row class="d-flex align-center">
        <v-col cols="auto">
          <div class="monthly-salary">{{ value.working_experience }} years</div>
        </v-col>
        <v-col cols="cols d-flex">
          <v-slider
            v-model="value.working_experience"
            :rules="[validations.required]"
            class="my-auto"
            track-color="grey"
            color="primary"
            always-dirty
            hide-details
            min="0"
            max="40"
            step="0.5"
          ></v-slider>
        </v-col>
      </v-row>

      <div class="mt-3">
        <label class="profile-label">
          {{ $t("user.onboarding.yourProfessionalExperience") }}
        </label>
        <CardActionableList
          type="Experience"
          @edit="activateEdit('experience', $event)"
        />
        <v-btn
          @click="toggleModal('experience')"
          outlined
          rounded
          color="#0253B3"
        >
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
      </div>

      <div class="mt-3">
        <label class="profile-label">
          {{ $t("user.onboarding.yourEducation") }}
        </label>
        <CardActionableList
          type="Education"
          @edit="activateEdit('education', $event)"
        />
        <v-btn
          @click="toggleModal('education')"
          outlined
          rounded
          color="#0253B3"
        >
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
      </div>

      <v-row class="mt-5">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            height="55"
            class="full-w font-weight-medium "
          >
            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!formValid"
            type="submit"
            color="primary"
            height="55"
            class="full-w font-weight-medium dark-blue"
          >
            {{ $t("user.onboarding.next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import ModalEducation from "@/components/auth/manualOnboardingSteps/ModalEducation";
import ModalExperience from "@/components/auth/manualOnboardingSteps/ModalExperience";

export default {
  name: "Step5",

  components: {
    ModalEducation,
    ModalExperience,
    CardActionableList
  },

  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data() {
    return {
      formValid: false,
      modals: {
        education: {
          active: false,
          edit: false,
          component: ModalEducation
        },
        experience: {
          active: false,
          edit: false,
          component: ModalExperience
        }
      },
      fileActions: {
        experience: ["edit", "delete"],
        education: ["edit", "delete"]
      }
    };
  },
  methods: {
    toggleModal(type) {
      this.modals[type].edit = false;
      this.modals[type].active = !this.modals[type].active;
    },
    activateEdit(type, item) {
      this.toggleModal(type);
      this.modals[type].edit = item;
    }
  }
};
</script>

<style scoped lang="scss"></style>
