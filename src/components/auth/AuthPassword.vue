<template>
<v-container class="auth-login-wrap align-center" fluid no-gutters>
    <jonder-title>
         Password vergessen?
    </jonder-title>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies felis eu libero.
    </p>

    <p class="text-caption text-left">
        Ihre E-Mail eingeben
    </p>

    <form class="auth-form" action="#">
        <v-text-field
            dense
            label="Email"
            :rules="rules"
            type="email"
            outlined
            background-color="white"
            v-model="formData.email"
        ></v-text-field>

        <v-btn type="submit" 
                color="primary" 
                class="full-w">
            Email Senden
        </v-btn>
    </form>
   
</v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";

export default {
  name: "AuthResetPassword",
  components: {
    JonderTitle
  },
  data() {
    return {
      formData: {
        email: "",
      },
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
    };
  },
  methods: {
    ...mapActions({
      
    }),

    
  }
};
</script>

<style lang="scss" scoped>
    .auth-login-wrap {
     width: 60%;
    }

    .v-btn:not(.v-btn--round).v-size--default {
        height: 55px;
        margin-top: 60px;
    }
</style>