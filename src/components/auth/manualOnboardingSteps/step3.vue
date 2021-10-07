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
        :attach="true"
        v-model="value.looking_for_employment_type"
        :items="types.EMPLOYEMENT_TYPE"
        :rules="[validations.required]"
        :item-text="$i18n.locale"
        item-value="id"
        :placeholder="$t('lookingForEmployementPlace')"
        outlined
        multiple
        append-icon="mdi-chevron-down"
        class="mt-1"
      >
        <!-- <template v-slot:selection="{ item }"> {{ $t(item.value) }}, </template>
        <template v-slot:item="{ item }">
          <v-list-item-action>
            <v-simple-checkbox
              v-ripple="false"
              @input="toggleValues($event, item.value)"
              :value="searchForValue(item.value)"
            >
            </v-simple-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t(item.value) }}
            </v-list-item-title>
          </v-list-item-content>
        </template> -->
      </v-select>

      <label class="profile-label">
        {{ $t("whereToWork") }}
        <span style="color: red;">*</span>
      </label>
      <v-autocomplete
        :attach="true"
        v-model="value.address_to_work"
        @update:search-input="
          $store.dispatch('google/places', {
            input: $event,
            types: ['(cities)']
          })
        "
        :items="
          $store.getters['google/places'].concat(value.address_to_work || [])
        "
        :loading="$store.getters['google/loadingPlaces']"
        :rules="[validations.required]"
        :placeholder="$t('choose')"
        ref="addressToWork"
        @change="$refs.addressToWork.lazySearch = ''"
        multiple
        small-chips
        deletable-chips
        hide-no-data
        no-filter
        outlined
        append-icon="mdi-chevron-down"
      ></v-autocomplete>

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
      <Calendar
        v-if="!dontKnowWhenToStart"
        @setDate="value.ready_for_work = $event"
        :rules="[validations.required]"
        type="date"
        :fromToday="true"
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
import Calendar from "@/components/Calendar";
import SliderRangeInput from "../../SliderRangeInput";

export default {
  name: "Step3",

  components: {
    SliderRangeInput,
    Calendar
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
    },
    searchForValue(name) {
      return (
        !!this.value.looking_for_employment_type &&
        this.value.looking_for_employment_type.indexOf(name) >= 0
      );
    },
    toggleValues(event, name) {
      if (!this.value.looking_for_employment_type) {
        this.value.looking_for_employment_type = [];
      }
      const index = this.value.looking_for_employment_type.indexOf(name);
      if (index < 0) {
        this.value.looking_for_employment_type.push(name);
      } else {
        this.value.looking_for_employment_type.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
