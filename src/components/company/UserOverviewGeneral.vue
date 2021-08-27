<template>
  <div class="user-overview-general">
    <v-row class="no-gutters">
      <v-col cols="12" md="8" class="left pl-10 pr-10 pt-7 pb-10">
        <div class="section about-me">
          <div class="title">About me</div>
          <div class="content">
            {{ user.about_me }}
          </div>
        </div>
        <div class="section experience mt-7">
          <div class="title">Experience</div>
          <div class="content">
            <div v-for="data in experience" :key="data.company">
              <div class="item pb-5 pt-5">
                <div class="title">{{ data.company_name }}</div>
                <div class="subtitle">{{ data.position }}</div>
                <div class="subtitle">
                  {{ data.start_time | moment("MMMM YYYY") }} -
                  <template v-if="data.end_time">
                    {{ data.end_time | moment("MMMM YYYY") }}
                  </template>
                  <template v-else>Present</template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="right pl-10 pr-10 pt-8">
        <div class="d-flex justify-space-between mb-7">
          <div class="section">
            <div class="title">
              Jobseeking status
            </div>
            <div class="content">
              Employed
            </div>
          </div>
          <div class="section">
            <div class="title">
              Position
            </div>
            <div class="content">
              {{ user.current_position }}
            </div>
          </div>
        </div>
        <div class="section mb-7">
          <div class="title">current industry</div>
          <div class="content">{{ user.branche }}</div>
        </div>
        <div class="section mb-7" v-if="user.location_show">
          <div class="title">city and address</div>
          <div class="content">{{ user.city }} {{ user.address }}</div>
        </div>
        <div class="section mb-7">
          <div class="title">
            DOCUMENTS & CERTIFICATS
          </div>
          <div class="content">
            <div v-if="user.cv" class="row mt-1">
              <div class="col-auto">
                <a :href="user.cv" target="_blank">
                  <img :src="require('@/assets/svg/pdf.svg')" />
                </a>
              </div>
              <div class="col my-auto">
                CV
              </div>
            </div>

            <div v-if="user.qualifications" class="row mt-1">
              <div class="col-auto">
                <a :href="user.qualifications" target="_blank">
                  <img :src="require('@/assets/svg/pdf.svg')" />
                </a>
              </div>
              <div class="col my-auto">
                Qualifications
              </div>
            </div>

            <div v-if="user.resume" class="row mt-1">
              <div class="col-auto">
                <a :href="user.resume" target="_blank">
                  <img :src="require('@/assets/svg/pdf.svg')" />
                </a>
              </div>
              <div class="col my-auto">
                Resume
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserOverviewGeneral",

  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      experience: [],
    };
  },
  methods: {
    getExperience() {
      this.$http
        .get(`${process.env.VUE_APP_API_BASE}/jobseeker-experience`)
        .then((res) => {
          let response = res.data.data.map((obj) => {
            return obj;
          });
          for (let i = 0; i < response.length; i++) {
            if (res.data.data[i].id === this.user.id) {
              this.experience.push(res.data.data[i]);
            }
          }
        })

        .catch((error) => {
          alert(error);
        });
    },
  },
  beforeMount() {
    this.getExperience();
  },
};
</script>
<style lang="scss" scoped>
.section {
  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px !important;
    color: #0253b3;
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    color: #222222;
  }
}
.experience {
  .item {
    border-bottom: 0.5px solid #cacaca;
    .title {
      font-weight: 600;
      font-size: 14px !important;
      line-height: 1.5;
      color: #000000;
    }
    .subtitle {
      font-weight: normal;
      line-height: 1.2;
      font-size: 13px !important;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
.right {
  border-left: 1px solid #e9e9e9;
}
.file {
  border-bottom: 0.5px solid #cacaca;

  &:last-child {
    border: none;
  }
}
</style>
