<template>
  <div class="landing-page">
    <div class="hero-img">
      <v-img :src="require('@/assets/landing/hero.png')" />
    </div>

    <v-container fluid class="landing-header-container">
      <v-row class="landing-header">
        <v-col cols="3">
          <router-link to="/" class="logo">
            <v-img
              :src="require('@/assets/jonder_blue.png')"
              max-width="100px"
            />
          </router-link>
        </v-col>
        <v-col cols="9" class="links d-flex align-center justify-end">
          <router-link
            to="/faq"
            class="txt-link text-color-primary-blue-dark"
            >{{ $t("faq") }}</router-link
          >
          <router-link
            :to="{ name: 'Register' }"
            class="txt-link text-color-primary-blue-dark"
          >
            {{ $t("register") }}
          </router-link>
          <router-link :to="{ name: 'Login' }" class="button dark-blue fill">
            {{ $t("login") }}
          </router-link>
          <div style="width: 150px; display: inline-block; margin-left: 15px">
            <LanguageDropdown />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-row class="landing-hero">
      <v-col cols="12" md="7" class="box">
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
      <v-row class="landing-section-with-image">
        <v-col cols="12" md="6" class="image-holder">
          <div class="image">
            <v-img :src="require('@/assets/landing/laptop.png')" />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="box">
          <div class="inner">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p class="promo-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui venenatis, neque, massa odio vitae diam. Odio risus in aliquet
              morbi nibh. Mi nam suscipit pulvinar amet. Suspendisse sed morbi
            </p>
            <div class="promo-actions">
              <router-link
                :to="{ name: 'Register' }"
                class="button dark-blue fill"
              >
                {{ $t("register") }}
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="landing-promo-blocks">
        <v-col cols="12" md="6" class="promo-block-container">
          <div class="promo-block">
            <v-img
              class="promo-block-bg"
              :src="require('@/assets/landing/company.png')"
            />
            <div class="promo-block-content-holder">
              <div class="promo-header">Unternehmen</div>
              <div class="promo-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit et,
                felis nisl vitae amet netus quis netus. Ornare phasellus eget
                aenean sed sit. Nulla posuere arcu ullamcorper turpis pretium
                placerat enim. In dui est lobortis ornare integer mattis mi
                feugiat. Amet, ac vulputate sed elit felis. Nulla iaculis enim
                nulla non
                <div class="promo-actions">
                  <router-link
                    :to="{ name: 'Register', query: { type: 'employer' } }"
                    class="button dark-blue fill"
                    >Registrieren</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="promo-block-container">
          <div class="promo-block">
            <v-img
              class="promo-block-bg"
              :src="require('@/assets/landing/employee.png')"
            />
            <div class="promo-block-content-holder">
              <div class="promo-header">Mitarbeiter</div>
              <div class="promo-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit et,
                felis nisl vitae amet netus quis netus. Ornare phasellus eget
                aenean sed sit. Nulla posuere arcu ullamcorper turpis pretium
                placerat enim. In dui est lobortis ornare integer mattis mi
                feugiat. Amet, ac vulputate sed elit felis. Nulla iaculis enim
                nulla non
                <div class="promo-actions">
                  <router-link
                    :to="{ name: 'Register', query: { type: 'jobseeker' } }"
                    class="button dark-blue fill"
                  >
                    Registrieren
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="landing-section-with-image">
        <v-col cols="12" md="6" class="box">
          <div class="inner">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p class="promo-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dui venenatis, neque, massa odio vitae diam. Odio risus in aliquet
              morbi nibh. Mi nam suscipit pulvinar amet. Suspendisse sed morbi
            </p>
            <div class="promo-actions">
              <router-link
                :to="{ name: 'Register' }"
                class="button dark-blue fill"
              >
                Registrieren
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="image-holder">
          <div class="image">
            <v-img :src="require('@/assets/landing/phones.png')" />
          </div>
        </v-col>
      </v-row>

      <div class="landing-partners">
        <div class="header">Partners</div>
        <div class="body">
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
          <div class="landing-partner">
            <v-img :src="require('@/assets/jonder_blue.png')" />
          </div>
        </div>
      </div>
    </v-container>

    <footer>
      <v-container fluid class="landing-header-container">
        <v-row class="landing-header">
          <v-col cols="3">
            <router-link to="/" class="logo">
              <v-img
                :src="require('@/assets/jonder_blue.png')"
                max-width="100px"
              />
            </router-link>
          </v-col>
          <v-col cols="9" class="links d-flex align-center justify-end">
            <router-link to="/faq" class="txt-link text-color-primary-blue-dark"
              >FAQ</router-link
            >
            <router-link
              to="/register"
              class="txt-link text-color-primary-blue-dark"
            >
              {{ $t("register") }}
            </router-link>
            <router-link :to="{ name: 'Login' }" class="button dark-blue fill">
              {{ $t("login") }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>
<script>
import LanguageDropdown from "../components/LanguageDropdown";
export default {
  data() {
    return {
      drawer: false
    };
  },
  components: { LanguageDropdown }
};
</script>
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
  .landing-header-container {
    z-index: 10;
  }
  .landing-header-container,
  .landing-hero {
    position: relative;
  }

  .landing-header {
    padding: 20px;

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
      padding: 42px;
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

  .landing-section-with-image {
    padding: 40px 20px;
    align-items: center;

    .image-holder {
      position: relative;
    }

    .image {
      width: 920px;
      max-width: 100%;

      .v-image__image {
        background-size: contain;
      }
    }

    h1 {
      color: rgba(2, 83, 179, 1) !important;
    }
  }

  .landing-promo-blocks {
    padding: 40px 20px;

    .promo-block {
      background: red;
      position: relative;

      .promo-block-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
      }

      .promo-block-content-holder {
        position: relative;
        z-index: 10;
        background: rgba(0, 0, 0, 0.6);
        color: white;
      }

      .promo-header {
        background: rgba(2, 83, 179, 0.8);
        font-size: 32px;
        font-weight: 700;
        padding: 38px 42px;
        color: white;
      }

      .promo-content {
        padding: 80px 42px;
      }

      .promo-actions {
        margin-top: 40px;

        .button {
          display: inline-block;
        }
      }
    }
  }

  .promo-text {
    margin-bottom: 60px;
  }

  .landing-partners {
    padding: 40px 0;

    .header {
      font-size: 32px;
      line-height: 44px;
      font-weight: bold;
      color: $primary-blue-dark;
      text-align: center;
      margin-bottom: 20px;
    }

    .body {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .landing-partner {
      flex: 0 0 25%;
      text-align: center;
      padding: 30px 0;
      filter: grayscale(100%);

      .v-image {
        display: block;
        width: 100%;
        max-width: 160px;
        margin: 0 auto;
      }

      &:hover {
        filter: grayscale(0%);
      }
    }
  }

  footer {
    background: white;
  }
}
@media (min-width: 768px) {
  .landing-hero {
    .box {
      padding-left: 82px !important;
    }
  }
  .landing-promo-blocks .promo-block {
    .promo-header {
      padding-left: 57px;
      padding-right: 57px;
    }
  }
  .landing-header {
    padding: 20px 60px;
  }
}
@media (max-width: 450px) {
  .links {
    > a {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
