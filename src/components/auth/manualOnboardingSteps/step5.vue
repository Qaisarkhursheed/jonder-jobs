<template>
  <div class="mo-step-3">
    <ModalEducation v-if="modals.education.active" :active="modals.education.active"
      :edit="modals.education.edit"
      @close="toggleModal('education')" />
    <ModalExperience v-if="modals.experience.active" :active="modals.experience.active" 
      :edit="modals.experience.edit"
      @close="toggleModal('experience')" />
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        {{ $t('user.onboarding.tellAboutExperience') }}
      </p>
      <div class="mt-10">
        <v-row>
          <v-col cols="12" class="px-0">
            <p class="text-left font-weight-bold mb-3">
              {{ $t('user.onboarding.experienceInYears') }}
            </p>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <div class="monthly-salary">
                  {{ value.working_experience }} years
                </div>
              </v-col>
              <v-col cols="9">
                <v-slider
                  v-model="value.working_experience"
                  track-color="grey"
                  color="primary"
                  always-dirty
                  min="0"
                  max="40"
                  step="0.1"
                ></v-slider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="px-0">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.yourProfessionalExperience') }}
            </p>
          </v-col>
          <v-col cols="12"  class="px-0">
            <CardActionableList type="Experience"
              @edit="activateEdit('experience', $event)" />
            <v-btn
              @click="toggleModal('experience')"
              outlined
              rounded
              small
              fab
              color="#0253B3"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
              Add
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="px-0">
            <p class="text-left font-weight-bold mb-0">
              {{ $t('user.onboarding.yourEducation') }}
            </p>
          </v-col>
          <v-col cols="12" class="px-0">
            <CardActionableList type="Education" 
              @edit="activateEdit('education', $event)"/>
            <v-btn
              @click="toggleModal('education')"
              outlined
              rounded
              small
              fab
              color="#0253B3"
            >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
            Add
          </v-col>
        </v-row>
      </div>
      <v-btn
        @click="nextScreen"
        color="primary"
        height="58"
        class="full-w mt-16 font-weight-medium "
      >
        {{ $t('user.onboarding.next') }}
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
import CardActionableList from '@/components/user/JobseekerCardActionableList';
import ModalEducation from '@/components/auth/manualOnboardingSteps/ModalEducation';
import ModalExperience from '@/components/auth/manualOnboardingSteps/ModalExperience';

export default {
  name: "Step5",

  components: {
    ModalEducation,
    ModalExperience,
    CardActionableList,
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
      rules: [value => !!value || "Required."],
      positions: [
        this.$t('user.onboarding.positionDeveloper'),
        this.$t('user.onboarding.positionProjectManager'),
        this.$t('user.onboarding.positionConstructionManager'),
        this.$t('user.onboarding.positionIntern'),
        this.$t('user.onboarding.positionApprentice'),
        this.$t('user.onboarding.positionManager'),
      ],
      branches: [
         this.$t('user.onboarding.branchMedicine'),
         this.$t('user.onboarding.branchAutomotive'),
         this.$t('user.onboarding.branchMechanical'),
         this.$t('user.onboarding.branchChemical'),
         this.$t('user.onboarding.branchFood'),
         this.$t('user.onboarding.branchElectrical'),
      ],
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
        },
      },
      fileActions: {
        experience: ['edit', 'delete'],
        education: ['edit', 'delete'],
      },
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

<style scoped lang="scss">
.mo-step-3 {
  &__salary {
    border: solid 1px $primary-blue;
    border-radius: 4px;
    color: $primary-blue;
  }
}
</style>
