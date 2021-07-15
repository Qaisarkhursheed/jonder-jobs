<template>
  <div class="user-overview-general">
    <v-row class="no-gutters">
      <v-col cols="8" class="left pl-10 pr-10 pt-7 pb-10">
        <div class="section about-me">
          <div class="title">About me</div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div class="section experience mt-7">
          <div class="title">Experience</div>
          <div class="content">
            <div class="item pb-5 pt-5">
              <div class="title">Company 1</div>
              <div class="subtitle">Position 1</div>
              <div class="subtitle">February 2020 - Present</div>
            </div>
            <div class="item pb-5 pt-5">
              <div class="title">Company 2</div>
              <div class="subtitle">Position 2</div>
              <div class="subtitle">February 2020 - Present</div>
            </div>
            <div class="item pb-5 pt-5">
              <div class="title">Company 3</div>
              <div class="subtitle">Position 3</div>
              <div class="subtitle">February 2020 - Present</div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="right pl-10 pr-10 pt-8">
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
              Manager
            </div>
          </div>
        </div>
        <div class="section mb-7">
          <div class="title">current industry</div>
          <div class="content">IT</div>
        </div>
        <div class="section mb-7">
          <div class="title">city and address</div>
          <div class="content">
            New York, Central Park
          </div>
        </div>
        <div class="section mb-7">
          <div class="title">
            DOCUMENTS & CERTIFICATS
          </div>
          <div class="content">
            <div class="file d-flex pb-4 pt-4">
              <v-icon
                size="40"
              >
                mdi-file-pdf-outline
              </v-icon>
              <div class="details ml-3 ">
                <div>CV.pdf</div>
                <div>236 KB</div>
              </div>
            </div>
            <div class="file d-flex pb-4 pt-4">
              <v-icon
                size="40"
              >
                mdi-file-pdf-outline
              </v-icon>
              <div class="details ml-3">
                <div>CV.pdf</div>
                <div>236 KB</div>
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

  name: 'UserOverviewGeneral',

  components: {
  }
};
</script>
<style lang="scss" scoped>
.section {
  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px !important;
    color: #0253B3;
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    color: #222222;
  }
}
.experience {
  .item {
    border-bottom: 0.5px solid #CACACA;
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
  border-left: 1px solid #E9E9E9;
}
.file {
  border-bottom: 0.5px solid #CACACA;

  &:last-child {
    border: none;
  }
}
</style>