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
            to="/register"
            class="txt-link text-color-primary-blue-dark"
          >
            {{ $t("register") }}
          </router-link>
          <router-link :to="{ name: 'Login' }" class="button dark-blue fill">{{
            $t("login")
          }}</router-link>
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
              to="/register"
              class="txt-link text-color-primary-blue-dark"
            >
              {{ $t("register") }}
            </router-link>
            <router-link :to="{ name: 'Login' }" class="button dark-blue fill"
              >Log in</router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>
