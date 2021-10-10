<template>
  <div class="document-upload-section">
    <template v-if="!inputData">
      <v-file-input
        v-model="inputData"
        :placeholder="$t(`upload${type}`)"
        multiple
        outlined
        color="#0253B3"
        :prepend-icon="null"
        prepend-inner-icon="mdi-cloud-upload"
        class="file-input-jonder "
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary"> {{ text }} </v-chip>
        </template>
      </v-file-input>
    </template>
    <template v-else>
      <div class="d-flex justify-space-between pt-4 pb-4">
        <div class="d-flex">
          <img class="document-icon" :src="getDocumentIcon(value.name)" />
          <div class="pl-3">
            <div class="pdf-name">{{ type }}</div>
            <!-- <div class="pdf-size" v-if="inputData[0].size">
              {{ inputData[0].size }} Bytes
            </div> -->
          </div>
        </div>
        <div>
          <v-menu top right attach>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="menu-button">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in ['Delete', 'View']"
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
  name: "DocumentUploadSection",

  props: {
    type: {
      type: String
    },
    value: {
      type: [Object, Boolean, Array, String],
      default: false
    }
  },
  data() {
    return {
      inputData: null
    };
  },
  created() {
    if (this.value) {
      this.inputData = [
        {
          name: this.value,
          size: false
        }
      ];
    }
  },

  methods: {
    handleAction(item) {
      if (item === "View") {
        const link = this.value.name;
        window.open(link, "_blank").focus();
      } else {
        this.inputData = null;
      }
    }
  },

  watch: {
    inputData(val) {
      this.$emit("change", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.pdf-name {
  font-weight: 600;
  color: #000;
  word-break: break-word;
}
.pdf-size {
  font-weight: 400;
  color: #7a7a7a;
}
</style>
