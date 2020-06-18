<template>
  <div class="flex flex-col">
    <bird-fetch v-slot="{obs}" :notable="true" :max="100" :location="location">
      <div class="flex justify-between items-start h-screen/2">
        <notable-summary :by-location="true" :obs="obs" @select="handleSelect"></notable-summary>
        <notable-summary :obs="obs" @select="handleSelect"></notable-summary>
        <notable-details
          :obs="obs"
          :id="selectedId"
          :byLocation="selectedLocation"
          @select="selectPoint"
        ></notable-details>
      </div>
    </bird-fetch>
    <div class="flex justify-between items-start mt-6">
      <bird-fetch v-slot="{obs, loading}" :max="50" :location="location">
        <div class="w-full h-screen/3 rounded bg-white shadow-lg mr-6"><recent-summary
        v-if="!loading"
        :count="48"
        :obs="obs"
        class="w-full h-full"
        @select="selectPoint"
        ></recent-summary>
        <div v-else class="flex flex-col justify-center items-center">
          <h3 class="text-lg">...Loading most recently seen birds...</h3>
          <img class="object-scale-down" src="flying_birds.gif" alt="Birds flap wings on screen to indicate resource is loading">
        </div>
        </div>
      </bird-fetch>
      <div id="map" class="w-screen/2 h-screen/3 rounded shadow-2xl bg-white">
        <v-map v-if="selectedObs" :coords="centerPoint"></v-map>
        <div v-else class="h-full flex items-center">
          <p class="text-xl text-gray-600 italic">Click on a bird or observation detail to see map</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BirdFetch from "./BirdFetch.vue";
import NotableSummary from "./NotableSummary.vue";
import RecentSummary from "./RecentSummary.vue";
import NotableDetails from "./NotableDetails.vue";
import VMap from "./Map.vue";

export default {
  name: "Dashboard",
  props: {
    location: { type: String, default: "TX" }
  },
  components: { BirdFetch, NotableSummary, RecentSummary, NotableDetails, VMap },
  data() {
    return {
      selectedId: null,
      selectedLocation: false,
      selectedObs: null
    };
  },
  methods: {
    handleSelect(code, byLocation) {
      this.selectedId = code;
      this.selectedLocation = byLocation;
    },
    selectPoint(obs) {
      this.selectedObs = obs;
    }
  },
  computed: {
    centerPoint(){
      return [this.selectedObs.lng, this.selectedObs.lat]
    }
  }
};
</script>
