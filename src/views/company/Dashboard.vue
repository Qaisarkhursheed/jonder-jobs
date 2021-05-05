<template>
  <v-container>
    <v-row class="heading ma-0 mb-10 flex-column">
      <div>Hello,</div>
      <div class="text-color-primary-blue-dark font-weight-bold">
        John Doe
      </div>
    </v-row>
    <v-row class="mb-16">
      <v-col cols="4">
        <div class="hd pb-7">Profile Views</div>
        <v-card class="rounded-lg"
                flat
                height="240px">
        </v-card>
      </v-col>
      <v-col cols="8">
        <div class="hd pb-7">People Reach</div>
        <v-card class="rounded-lg"
                flat 
                height="240px">
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-16">
      <v-col cols="5">
        <div class="hd pb-7">Anwendungen</div>
        <v-card class="rounded-lg"
                flat
                height="240px">
        </v-card>
      </v-col>
      <v-col cols="7">
        <div class="hd pb-7">Jährliche Aktivität</div>
        <v-card class="rounded-lg"
                flat 
                height="240px">
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(list, i) in candidates" :key="i">
        <CandidateList :list="list"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CandidateList from '@/components/company/CandidateList';

export default {
  name: 'CompanyDashboard',

  components: {
    CandidateList
  },

  data() {
    return {
      candidates: {
        0: {
          type: 'request',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
          ]
        },
        1: {
          type: 'negotiation',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
          ]
        },
        2: {
          type: 'call',
          items: [
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: true,
            },
            {
              name: 'Victoria Anderson',
              location: 'Berlin',
              job: 'UI/UX Designer',
              note: false,
            },
          ]
        }
      }
    };
  }
};

</script>

<style scoped>
  .hd {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #82858C;
  }

  .heading {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 20px;
  }
</style>