<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("user.onboarding.whatYouLookinFor") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="handleNext">
      <!-- <label class="profile-label">
        {{ $t("user.onboarding.lookingForBranche") }}
      </label>
      <v-autocomplete
        v-clearable-autocomplete
        v-model="value.looking_for_branche"
        :items="types.JOB_BRANCHE"
        :rules="[validations.required]"
        outlined
        flat
        hide-no-data
        multiple
        :placeholder="$t('user.onboarding.choose')"
        class="mt-1"
      ></v-autocomplete> -->

      <label class="profile-label">
        {{ $t("user.onboarding.lookingForEmployement") }}
      </label>
      <v-select
        v-model="value.looking_for_employment_type"
        :items="types.EMPLOYEMENT_TYPE"
        :rules="[validations.required]"
        :placeholder="$t('user.onboarding.choose')"
        outlined
        class="mt-1"
      >
        <template v-slot:append-outer>
          <span style="color: red;">*</span>
        </template>
      </v-select>

      <label class="profile-label">
        {{ $t("user.onboarding.whereToWork") }}
      </label>
      <GooglePlacesAutocomplete 
        @select="e => (value.address_to_work = e)" 
        :required="true"
      />
      
      <v-checkbox
        class="mb-3 mt-0"
        label="Are you also open to working remotely?"
        hide-details="auto"
        v-model="value.work_remotely"
      ></v-checkbox>

      <label class="profile-label">
        {{ $t("user.onboarding.whenToStart") }}
      </label>
      <Calendar
        v-if="!dontKnowWhenToStart"
        @setDate="value.ready_for_work = $event"
        :rules="[validations.required]"
        type="date"
        :fromToday="true"
        hide-details="auto"
        :required="true"
      />

      <v-checkbox
        v-model="dontKnowWhenToStart"
        label="I don't know."
        class="mt-2 mb-3"
        hide-details
      ></v-checkbox>

      <div class="profile-label mb-3 mt-6">
        {{ $t("user.onboarding.monthlySalary") }}
      </div>
      <SliderInput 
        :value="value.monthly_salary"
        suffix="k"
        min="1"
        max="12"
        step="0.5"
        @change="(val) => (value.monthly_salary = val)"
      />

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
import types from "@/types";
import GooglePlacesAutocomplete from "@/components/GooglePlacesAutocomplete";
import Calendar from "@/components/Calendar";
import SliderInput from '@/components/SliderInput';

export default {
  name: "Step4",

  components: {
    Calendar,
    GooglePlacesAutocomplete,
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
      dontKnowWhenToStart: false
    };
  },
  computed: {
    types() {
      return types;
    }
  },
  methods: {
    handleNext() {
      if (this.dontKnowWhenToStart) {
        this.value.ready_for_work = null;
      }
      this.nextScreen();
    }
  }
};
</script>

<style scoped lang="scss"></style>
