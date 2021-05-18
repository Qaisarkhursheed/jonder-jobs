<template>
  <v-card :hover="true"
          class="candidate-card rounded-lg" flat>
    <div @click="$router.push({name: 'CompanyUser', params: {id: candidate.id}})">
      <v-card-text class="d-flex pa-0 pa-6 pb-5">
        <v-img
          :lazy-src="require('@/assets/candidate.png')"
          height="70px"
          width="70px"
          max-width="70px"
          :src="require('@/assets/candidate.png')"
          class="image">
        </v-img>
        <div class="pl-4">
          <div class="name font-weight-bold pb-1">
            {{candidate.first_name}} {{candidate.last_name}}
          </div>
          <div class="job pb-1">
            <v-icon size="18px"
                    color="#C4C6C9">
              mdi-briefcase-outline
            </v-icon>
            <span class="text-color-primary-blue-dark">
              {{candidate.job}}
            </span>
          </div>
          <div class="location">
            <v-icon size="18px"
                    color="#C4C6C9">
              mdi-map-marker-outline
            </v-icon>
            {{candidate.address}}
          </div>
        </div>
      </v-card-text>

      <v-card-text class="candidate-details">
        <div class="pb-4">
          <v-icon class="pr-3"
                  color="#C5C6C9">
            mdi-hexagon-multiple-outline
          </v-icon>
          <span class="label pr-2">Branche</span>
          <span class="value">{{candidate.branche}}</span>
        </div>
        <div class="pb-4">
          <v-icon class="pr-3"
                  color="#C5C6C9">
            mdi-domain
          </v-icon>
          <span class="label pr-2">Schulabschluss</span>
          <span class="value">{{candidate.training_studies}}</span>
        </div>
        <div class="pb-4">
          <v-icon class="pr-3"
                  color="#C5C6C9">
            mdi-school
          </v-icon>
          <span class="label pr-2">Ausbildung</span>
          <span class="value">{{candidate.your_qualification}}</span>
        </div>

      </v-card-text>

      <v-card-text class="job-info d-flex">
        <v-col cols="6" class="experience">
          <div class="value">{{candidate.work_experience}}</div>
          <div class="label">Berufserfahrung</div>
        </v-col>
        <v-col cols="6" class="wage">
          <div class="value">{{candidate.monthly_salary}}</div>
          <div class="label">Gehalt</div>
        </v-col>
      </v-card-text>
    </div>
    <v-card-actions @click="startConversation"
                    class="actions d-flex pa-0 pl-6 text-color-primary-blue-dark font-weight-bold"
                    style="background: #E3F2FB; height: 67px;">
      In Kontakt treten
    </v-card-actions>
  </v-card>
</template>

<script>

// Create generic people card with configuration and layout

export default {
  name: 'SearchResultsCard',

  props: {
    candidate: {
      type: Object
    }
  },

  methods: {
    startConversation() {
      this.$router.push({ name: 'CompanyInbox', params: { id: this.candidate.id, type: 'new', company: true }});
    }
  }
};

</script>

<style lang="scss" scoped>
  .candidate-details {
    .label {
      font-weight: 400;
      color: #82858C;
    }
    .value {
      font-weight: 600;
      color: #82858C;
    }
  }
  .job-info {
    border-top: 1px solid #EAEAEC;
  }
  .experience {
    .value {
      color: #0253B3;
      font-size: 18px;
      font-weight: 600;
    }
    .label {
      color: #82858C;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .actions {
    transition: background 0.3s;

    &:hover {
      background: #b2d6ec !important;
    }
  }
  .wage {
    .value {
      color: #0253B3;
      font-size: 18px;
      font-weight: 600;
      text-align: right;
    }
    .label {
      color: #82858C;
      font-size: 14px;
      font-weight: 400;
      text-align: right;
    }
  }
</style>