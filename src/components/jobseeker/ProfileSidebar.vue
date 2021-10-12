<template>
  <v-card flat class="profile-sidebar">
    <div class="top-info pb-0" style="border-bottom: 1px solid #E9E9E9">
      <!-- Avatar -->
      <div class="profile-image">
        <v-avatar color="primary" size="80">
          <v-img
            v-if="user.profile_img"
            :src="user.profile_img"
            class="profile-image-user"
          ></v-img>
          <span v-else class="white--text text-h4">
            {{ user | initials }}
          </span>
        </v-avatar>

        <div class="profile-image-badge-icons" v-if="userPlan.length">
          <v-img
            v-for="(plan, index) in userPlan"
            :key="index"
            class="profile-image-badge-icon"
            :style="[userPlan.length > 1 ? { margin: '0 -5px' } : null]"
            :src="require(`@/assets/plan-icons/${plan.plan_slug}.svg`)"
          ></v-img>
        </div>
      </div>

      <!-- Full name -->
      <span class="dash-name">{{ user | fullname }}</span>

      <!-- Profile settings -->
      <router-link :to="{ name: 'JobseekerProfile' }" class="settings-link">
        {{ $t("profileSettings") }}
      </router-link>

      <!-- User plan -->
      <template v-if="userPlan.length">
        <DashboardActivePlan
          v-for="(plan, index) in userPlan"
          :key="index"
          :user-plan="plan"
        />
      </template>
    </div>

    <UpgradeAccountBox
      class="mt-7"
      v-if="messagesLoaded && conversations.length && !userPlan.length"
      small
    />

    <!-- Fields -->
    <div class="top-info mt-7">
      <span class="about-info">{{ $t("position") }}</span>
      <p class="about-text">
        {{ idToString("JOB_POSITION", user.current_position) }}
      </p>

      <span class="about-info">{{ $t("currentIndustry") }}</span>
      <div class="about-text">
        <v-chip
          class="py-1 mr-1 mb-1"
          v-for="(item, i) in idsToArray('JOB_BRANCHE', user.branche)"
          :key="i"
        >
          {{ item }}
        </v-chip>
      </div>

      <span class="about-info">{{ $t("whatPosition") }}</span>
      <div class="about-text">
        <v-chip
          class="py-1 mr-1 mb-1"
          v-for="(item, i) in idsToArray(
            'JOB_POSITION',
            user.looking_for_position
          )"
          :key="i"
        >
          {{ item }}
        </v-chip>
      </div>

      <span class="about-info">{{ $t("searchStatus") }}</span>
      <p class="about-text">
        {{ user.job_search_status | jobSearchStatus }}
      </p>

      <span class="about-info">{{ $t("lookingForType") }}</span>
      <div class="about-text">
        <v-chip
          class="py-1 mr-1 mb-1"
          v-for="(item, i) in idsToArray(
            'EMPLOYEMENT_TYPE',
            user.looking_for_employment_type
          )"
          :key="i"
        >
          {{ item }}
        </v-chip>
      </div>

      <!-- <span class="about-info">{{ $t("cityAndAddress") }} </span>
              <p class="about-text">{{ user.city }}</p> -->

      <span class="about-info">{{ $t("experienceInYears") }}</span>
      <p class="about-text">{{ user.working_experience }} {{ $t("years") }}</p>

      <span class="about-info">
        {{ $t("experiences") }}
      </span>
      <CardActionableList type="Experience" view-only class="mb-5" />

      <span class="about-info">
        {{ $t("education") }}
      </span>
      <CardActionableList type="Education" view-only />
    </div>

    <!-- Documents -->
    <div class="top-info">
      <span class="about-info">
        {{ $t("documents") }}
      </span>

      <i v-if="documentsEmpty">{{ $t("noDataAvailable") }}</i>

      <template v-for="item in documents">
        <div v-if="item.link" :key="item.text" class="row mt-1">
          <div class="col-auto">
            <a :href="item.link" target="_blank">
              <img class="document-icon" :src="getDocumentIcon(item.link)" />
            </a>
          </div>
          <div class="col my-auto font-weight-bold">
            {{ item.text }}
          </div>
        </div>
      </template>
    </div>
  </v-card>
</template>

<script>
import CardActionableList from "@/components/user/JobseekerCardActionableList";
import DashboardActivePlan from "@/components/dashboard/DashboardActivePlan";
import UpgradeAccountBox from "@/components/user/UpgradeAccountBox";

export default {
  components: { CardActionableList, DashboardActivePlan, UpgradeAccountBox },

  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    userPlan() {
      return this.$store.getters["user/userPlan"];
    },
    messagesLoaded() {
      return this.$store.getters["chat/messagesLoaded"];
    },
    conversations() {
      return this.$store.getters["chat/conversations"];
    },
    documents() {
      return [
        {
          text: "CV",
          link: this.user.cv
        },
        {
          text: this.$t("qualifications"),
          link: this.user.qualifications
        },
        {
          text: this.$t("curriculumVitae"),
          link: this.user.resume
        }
      ];
    },
    documentsEmpty() {
      return !this.user.cv && !this.user.qualifications && !this.user.resume;
    }
  }
};
</script>

<style lang="scss">
.profile-sidebar {
  .top-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    word-break: break-all;

    &:last-of-type {
      padding-bottom: 0px;
    }
  }

  .profile-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    position: relative;
    top: -60px;
    margin: 0 auto -40px auto;

    .v-image {
      border-radius: 50px;
      max-width: 5rem;
      max-height: 5rem;
    }

    .profile-image-user {
      height: 80px;
      width: 80px;
    }

    .profile-image-badge-icons {
      position: absolute;
      bottom: 0;
      display: flex;
      right: -5px;

      .profile-image-badge-icon {
        max-width: 28px;
      }
    }
  }

  .dash-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    text-align: center;
  }

  .settings-link {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    text-underline-offset: 3px;
  }

  .about-info {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 14px;
    color: $primary-blue-dark;
    margin-bottom: 8px;
  }
  .about-text {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 25px !important;
    color: $dark-grey;
  }
}
</style>
