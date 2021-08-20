<template>
  <div class="document-upload-section">
    <template v-if="!inputData">
      <v-file-input
        v-model="inputData"
        :placeholder="$t(`user.onboarding.upload${type}`)"
        multiple
        outlined
        color="#0253B3"
        :prepend-icon="null"
        prepend-inner-icon="mdi-cloud-upload"
        class="file-input-jonder text-center"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>
    </template>
    <template v-else>
      <div class="d-flex justify-space-between pt-4 pb-4">
        <div class="pr-3">
          <img :src="require('@/assets/svg/pdf.svg')" />
        </div>
        <div>
          <div class="pdf-name">{{ inputData[0].name }}</div>
          <div class="pdf-size">{{ inputData[0].size }} Bytes</div>
        </div>
        <div>
          <v-menu top right>
            <template v-slot:activator="{ on, attrs }" >
              <v-btn icon v-bind="attrs" v-on="on" class="menu-button">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in ['Delete']"
                :key="i"
                @click="handleAction(item)"
              >
                <v-list-item-title class="list-item">
                  {{ item }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'DocumentUploadSection',

  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    handleAction() {
      this.inputData = null;
    }
  },
  watch: {
    inputData(val) {
      console.log('llll', val);
      this.$emit('change', val);
    }
  },
};

</script>

<style lang="scss" scoped>
.pdf-name {
  font-weight: 600;
  color: #000;
}
.pdf-size {
  font-weight: 400;    
  color: #7A7A7A;
}
</style>