<template>
  <div class="pa-5">
    <spinner v-if="isLoading" />

    <figure id="widget"></figure>

    <div v-if="isError" class="text-center text-body-1">
      {{ $t("noDataAvailable") }}
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/loaders/Spinner";

export default {
  components: { Spinner },

  props: {
    layout: {
      type: String,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    minHeight: {
      type: Number,
      required: false
    },
    maxHeight: {
      type: Number,
      required: false
    },
    ratio: {
      type: Number,
      required: false
    }
  },

  data() {
    return {
      isLoading: true,
      isError: false
    };
  },

  mounted() {
    // eslint-disable-next-line no-undef
    new NorthData.Widget(document.getElementById("widget"), {
      apiKey: process.env.VUE_APP_NORTHDATA_API_KEY,
      layout: this.layout,
      name: this.user.company,
      address: this.user.address,
      minHeight: this.minHeight,
      maxHeight: this.maxHeight,
      ratio: this.ratio,
      success: () => {
        this.isLoading = false;
        this.$emit("success");
        this.fixOverflow();
      },
      error: () => {
        this.isError = true;
        this.isLoading = false;
        this.$emit("error");
      }
    });
  },

  methods: {
    fixOverflow() {
      document.querySelectorAll("#widget svg").forEach(el => {
        const viewBox = el.getAttribute("viewBox")?.split(" ");

        if (viewBox) {
          viewBox[0] = -25;
          el.setAttribute("viewBox", viewBox.join(" "));
        }
      });
    }
  }
};
</script>

<style></style>
