<template>
  <div class="personality-test-cta-box full-w full-h">
    <div class="upgrade-box full-h">
      <div
        class="title-description-wrapper d-flex"
        
        style="font-size: 13px; justify-content: space-between;"
      >
        <div class="upgrade-title">
          {{ $t("personalityTestCTATitle") }}
        </div>
        <div class="link-upgrade-wrapper">
          <span
            class="link-upgrade"
            style="cursor: pointer;"
            @click="$router.push({
              name: 'PersonalityTestJobseeker',
            })"
          >
          {{ $t("personalityTestCTASubtitle") }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PersonalityTestCTABox',
};

</script>

<style lang="scss" scoped>
.personality-test-cta-box {
  .upgrade-box {
    display: flex;
    justify-content: space-between;
    // max-width: 400px;
    max-width: 600px;
  }
  .title-description-wrapper {
    display: flex;
    flex-direction: column;
    width: 275px;
  }
  .link-upgrade-wrapper {
    display: flex;
    align-items: flex-end;
  }
  .badge {
    top: -16px;
  }
}
.upgrade-box {
  background-color: #00ace6;
  color: white;
  padding: 25px;
  border-radius: 10px;
  position: relative;
  cursor: default;
}

.upgrade-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 7px;
  width: calc(100% - 24px);
}

.link-upgrade {
  border-bottom: 2px solid;
  font-size: 13px;
  font-weight: 500;
}
</style>