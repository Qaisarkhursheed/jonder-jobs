<template>
  <div class="landing-page">
    <div class="hero-img">
      <v-img :src="require('@/assets/landing/hero.png')" />
    </div>

    <v-container fluid class="landing-header-container">
      <v-row class="landing-header">
        <v-col cols="6">
          <router-link to="/" class="logo">
            <v-img
              :src="require('@/assets/jonder_blue.png')"
              max-width="100px"
            />
          </router-link>
        </v-col>
        <v-col cols="6" class="links">
          <router-link
            to="/register"
            class="txt-link text-color-primary-blue-dark"
          >
            {{ $t("general.register") }}
          </router-link>
          <router-link to="/login" class="button dark-blue fill"
            >Log in</router-link
          >
        </v-col>
      </v-row>
    </v-container>

    <v-row class="landing-hero">
      <v-col cols="7" class="box">
        <div class="inner">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dui
            venenatis, neque, massa odio vitae diam. Odio risus in aliquet morbi
            nibh. Mi nam suscipit pulvinar amet. Suspendisse sed morbi
          </p>
        </div>
      </v-col>
    </v-row>

    <v-container fluid>
      <v-col cols="12" class="box">
        <div class="inner">
          <h1 class="faq-title">
            FAQ
          </h1>
          <div class="faq-list">
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
            <p class="faq-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui
            </p>
          </div>
        </div>
      </v-col>
    </v-container>

    <footer>
      <v-container fluid class="landing-header-container">
        <v-row class="landing-header">
          <v-col cols="6">
            <router-link to="/" class="logo">
              <v-img
                :src="require('@/assets/jonder_blue.png')"
                max-width="100px"
              />
            </router-link>
          </v-col>
          <v-col cols="6" class="links">
            <router-link
              to="/register"
              class="txt-link text-color-primary-blue-dark"
            >
              {{ $t("general.register") }}
            </router-link>
            <router-link to="/login" class="button dark-blue fill"
              >Log in</router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<style lang="scss">
.landing-page {
  position: relative;
  height: 100%;
  overflow: auto;
  background: #eff2f4;

  .button {
    text-decoration: none;
  }

  .hero-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 820px;
    height: 740px;
  }

  .landing-header-container,
  .landing-hero {
    position: relative;
    z-index: 10;
  }

  .landing-header {
    padding: 20px 60px;

    .links {
      text-align: right;

      .txt-link {
        margin-right: 20px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .landing-hero {
    min-height: 740px;
    .box {
      background: rgba(2, 83, 179, 0.8);
      padding: 42px 42px 42px 82px;
      height: 540px;
      color: white;

      h1 {
        color: white !important;
        font-size: 40px;
        line-height: 54px;
        margin-bottom: 20px;
      }

      .inner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 540px;
      }
    }
  }

  .faq-title {
    text-align: center;
    color: $primary-blue-dark !important;
  }

  .faq-list {
    background: white;
  }

  .faq-item {
    padding: 26px 0 26px 50px;
    font-size: 20px;
    color: $primary-blue-dark;
    font-weight: 600;
    border-bottom: 1px solid $medium-grey;
    cursor: pointer;
  }

  footer {
    background: white;
  }
}
</style>
