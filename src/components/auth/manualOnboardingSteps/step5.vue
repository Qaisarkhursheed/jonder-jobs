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
      <div class="profile-label mb-3">
        {{ $t("user.onboarding.experienceInYears") }}
      </div>
      <SliderInput 
        :value="value.working_experience"
        suffix=" years"
        min="0"
        max="40"
        step="0.5"
        @change="(val) => (value.working_experience = val)"
      />

      <div class="mt-4">
        <label class="profile-label">
          {{ $t("user.onboarding.yourProfessionalExperience") }}
        </label>
        <CardActionableList
          class="mt-1"
          type="Experience"
          @edit="activateEdit('experience', $event)"
        />
        <div @click="toggleModal('experience')" 
          class="d-flex">
          <v-btn
            rounded
            outlined
            color="#0253B3"
            height="26"
            width="26"
            style="cursor: pointer;"
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div class="ml-1" style="cursor: pointer; color: #0253B3; font-weight:600">
            Add
          </div>
        </div>
      </div>

      <div class="mt-5">
        <label class="profile-label">
          {{ $t("user.onboarding.yourEducation") }}
        </label>
        <CardActionableList
          class="mt-1"
          type="Education"
          @edit="activateEdit('education', $event)"
        />
        <div @click="toggleModal('education')" 
          class="d-flex">
          <v-btn
            rounded
            outlined
            color="#0253B3"
            height="26"
            width="26"
            style="cursor: pointer;"
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div class="ml-1" style="cursor: pointer; color: #0253B3; font-weight:600">
            Add
          </div>
        </div>
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
import SliderInput from '@/components/SliderInput';

export default {
  name: "Step5",

  components: {
    ModalEducation,
    ModalExperience,
    CardActionableList,
    SliderInput
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
