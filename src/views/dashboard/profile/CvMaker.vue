<template>
  <component
    :is="`step${cvMakerStep}`"
    v-model="cvDetails"
    @confirm="goToStep"
    @back="goBack"
    @save="saveCV"
  />
</template>

<script>
import Step1 from "../../../components/cv-maker/Step1";
import Step2 from "../../../components/cv-maker/Step2";
import Step3 from "../../../components/cv-maker/Step3";
import Step4 from "../../../components/cv-maker/Step4";
import Step5 from "../../../components/cv-maker/Step5";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    cvMakerStep: 1,
    cvDetails: {
      email: "mateozuro@gmail.com",
      phone: "0921826111",
      street_address: "Misina 5",
      birthday: "1993-03-10",
      graduation_degree: "High school",
      education_city: "Split",
      education_institute: "GOGSS",
      education_start_date: "1993-03-01",
      education_end_date: "1993-03-10",
      education_description: "education_description",
      profile_description: "profile_description",
      job_title: "Dev",
      job_city: "Split",
      job_employer: "Juzni pol",
      job_start_date: "1993-03-10",
      job_end_date: "1993-03-20",
      experience_description: "Javascript",
      hobby: "Auto/Moto",
      referenc_company_name: "Juzni pol",
      referenc_contact_person: "Ivan",
      referenc_phone: "98765432",
      referenc_email: "ivan@ivan.co",
      competence: "Javascript",
      competence_level: "10",
      language: "English",
      language_level: "10",
      my_company_name: "Juzni pol",
      my_contact_person: "Ivan",
      my_referenc_phone: "12345678",
      my_referenc_email: "ivan@ivan.co",
      achievements_description: "achievements_description",
      publications_description: "publications_description",
      user_id: ""
    }
  }),
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  computed: mapGetters("user", ["user"]),
  methods: {
    goToStep() {
      this.cvMakerStep++;
      this.scrollToTop();
    },
    goBack() {
      this.cvMakerStep--;
      this.scrollToTop();
    },
    scrollToTop() {
      const layoutDiv = document.getElementsByClassName("layout-content");
      if (layoutDiv && layoutDiv[0]) layoutDiv[0].scrollTop = 0;
    },
    saveCV() {
      this.cvDetails.user_id = this.user.id;
      this.$store.dispatch("user/saveCv", this.cvDetails).then(res => {
        if (res.data.success) this.$router.push("/dashboard/profile");
      });
    }
  }
};
</script>

<style lang="scss">
.step-header-detail {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: $primary-blue-dark;

  .v-icon {
    font-size: 28px;
    color: $primary-blue-dark;
    margin-right: 10px;
  }
}

.step-header-description {
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: $dark-grey;

  .date {
    font-size: 12px;
    line-height: 16px;
    color: $medium-grey;
  }
}

.v-card__subtitle {
  border-bottom: 1px solid $light-grey;
  margin: 20px -32px 20px !important;
  padding: 32px 32px 20px;
}

.col > label {
  display: block;
  padding-bottom: 8px;
  margin-right: 8px;
}
</style>
