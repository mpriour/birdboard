<template>
  <vl-map class="h-full w-full">
    <vl-view
      :zoom="12"
      :center="centerPt"
      :rotation="0"
      projection="EPSG:4326"
    ></vl-view>
    <vl-layer-tile>
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
    <vl-feature>
      <vl-geom-point :coordinates="centerPt"></vl-geom-point>
      <vl-style-box>
        <vl-style-circle :radius="5">
          <vl-style-fill color="red"></vl-style-fill>
          <vl-style-stroke color="blue"></vl-style-stroke>
        </vl-style-circle>
      </vl-style-box>
    </vl-feature>
  </vl-map>
</template>

<script>
export default {
  props: {
    coords: Array
  },
  methods: {
    logCenter(c) {
      console.log(c);
    }
  },
  computed: {
    centerPt() {
      return this.coords.slice(0);
    }
  }
};
</script>
