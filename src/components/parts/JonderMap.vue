<template>
  <div class="map-holder mt-6">
    <l-map
        class="map"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: {
    center: {
      type: Array,
      default: () => [47.41322, -1.219482]
    },
    zoom: {
      type: Number,
      default: 3
    },
    url: {
      type: String,
      default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }
  },
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      bounds: null
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style>
.map-holder {
  height: 350px;
  overflow: hidden;
}
.map {
  height: 100%;
  width: 100%;
}
</style>
