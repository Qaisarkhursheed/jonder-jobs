<template>
  <div class="search-saved">
    <v-card class="rounded-lg pt-6 pl-6 pr-6 pb-7" flat>
      <v-row class="no-gutters">
        <v-col cols="10">
          <v-row class="no-gutters">
            <v-col cols="12">
              <div class="title">
                Product Designer
              </div>
              <div class="subtitle">
                02/07/2021
              </div>
            </v-col>
          </v-row>
          <v-row class="no-gutters">
            <v-col cols="12">
              <div class="infobar mt-3">
                <div class="section">
                  <span class="label">
                    Type of employeement:
                  </span>
                  <span class="value">
                    Fulltime
                  </span>
                </div>
                <div class="section">
                  <span class="label">
                    Industry:
                  </span>
                  <span class="value">
                    Fulltime
                  </span>
                </div>
                <div class="section">
                  <span class="label">
                    Salary range:
                  </span>
                  <span class="value">
                    10 000 - 20 000
                  </span>
                </div>
                <div class="section">
                  <span class="label">City:</span>
                  <span class="value">Munich</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row class="no-gutters">
            <v-col cols="4"></v-col>
            <v-col cols="5" class="result">
              <div class="value">142</div>
              <div class="label">Results</div>
            </v-col>
            <v-col cols="3">
              <v-menu
                bottom
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    class="menu-button"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, i) in 3"
                    :key="i"
                  > 
                   {{ item }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SearchSaved'
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 18px;
  color: rgba(34, 34, 34, 1);
}
.subtitle {
  color: rgba(34, 34, 34, 0.6);
  font-weight: normal;
  font-size: 14px;
}
.infobar {
  display: flex;
  font-size: 13px;
  .section {
    margin-right: 2%;
  }
  .label {
    color: rgba(34, 34, 34, 0.6);
    padding-right: 5px;
  }
  .value {
    color: rgba(34, 34, 34, 1);
    font-weight: 500;
  }
}
.result {
  color: #0253B3;
  .value {
    font-weight: bold;
    font-size: 32px;
  }
  .label {
    font-weight: normal;
    //font-size: 18px;
    font-size: 15px;
    text-transform: uppercase;
  }
}
</style>