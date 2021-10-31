<template>
  <div class="mo-step-3">
    <p class="text-center font-weight-bold text-h6">
      {{ $t("whatYouLookinFor") }}
    </p>

    <v-form v-model="formValid" @submit.prevent="handleNext">
      <label class="profile-label">
        {{ $t("lookingForEmployement") }}
        <span style="color: red;">*</span>
      </label>
      <v-select
        v-model="value.looking_for_employment_type"
        :items="types.EMPLOYEMENT_TYPE"
        :rules="[validations.min.selection(1)]"
        :item-text="$i18n.locale"
        item-value="id"
        :placeholder="$t('lookingForEmployementPlace')"
        outlined
        multiple
        small-chips
        deletable-chips
        append-icon="mdi-chevron-down"
        class="mt-1"
      />

      <label class="profile-label">
        {{ $t("whereToWork") }}
        <span style="color: red;">*</span>
      </label>
      <GooglePlacesInput
        :attach="false"
        v-model="value.address_to_work"
        :types="['(cities)']"
        :rules="[validations.min.selection(1), validations.max.selection(5)]"
        multiple
      />

      <v-checkbox
        class="mb-3 mt-0"
        :label="$t('remoteWork')"
        hide-details="auto"
        v-model="value.work_remotely"
      ></v-checkbox>

      <label class="profile-label">
        {{ $t("whenToStart") }}
        <span style="color: red;">*</span>
      </label>
      <DatePicker
        :attach="false"
        v-model="value.ready_for_work"
        :rules="!dontKnowWhenToStart ? [validations.required] : []"
        :disabled="dontKnowWhenToStart"
        min-this-month
        type="month"
        hide-details="auto"
      />

      <v-checkbox
        v-model="dontKnowWhenToStart"
        :label="$t('iDontKnow')"
        class="mt-2 mb-3"
        hide-details
      ></v-checkbox>

      <div class="profile-label mb-3 mt-6">
        {{ $t("monthlySalary") }}
      </div>
      <SliderRangeInput
        :value="getMonthlySalary"
        min="1000"
        max="20000"
        step="500"
        @change="changeMonthlySalary"
      />

      <v-row class="mt-5">
        <v-col cols="3">
          <v-btn @click="$emit('prevScreen')" height="55" text block>
            {{ $t("back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!formValid"
            type="submit"
            color="primary"
            height="55"
            block
          >
            {{ $t("next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import types from "@/types";
import SliderRangeInput from "../../SliderRangeInput";
import GooglePlacesInput from "@/components/controls/GooglePlacesInput";
import DatePicker from "@/components/controls/DatePicker";

export default {
  name: "Step3",

  components: {
    SliderRangeInput,
    GooglePlacesInput,
    DatePicker
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
    },
    getMonthlySalary() {
      const min = this.value.monthly_salary.min;
      const max = this.value.monthly_salary.max;
      return [min, max];
    }
  },
  methods: {
    handleNext() {
      if (this.dontKnowWhenToStart) {
        this.value.ready_for_work = null;
      }
      this.nextScreen();
    },
    changeMonthlySalary(event) {
      this.value.monthly_salary = {
        min: parseInt(event[0].toString()),
        max: parseInt(event[1].toString())
      };
    }
  }
};
</script>

<style scoped lang="scss"></style>
