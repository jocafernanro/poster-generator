<template>
  <div class="container mx-auto">
    <component
      :is="getPosterComponent()"
      :image="activePoster.image"
    ></component>
    <button @click="generateThemePoster">Generar</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandardPoster from "@/components/posters/StandardPoster";
// import domtoimage from "dom-to-image";
// import download from "downloadjs";

export default {
  components: {
    StandardPoster,
  },
  computed: {
    ...mapState({
      activePoster: (state) => state.posters.activePoster,
    }),
  },

  methods: {
    ...mapActions("posters", ["setActivePoster"]),
    getPosterComponent() {
      const themeHandler = {
        standard: "StandardPoster",
      };
      return themeHandler[this.activePoster.id];
    },
    generateThemePoster() {
      //   domtoimage.toBlob(document.getElementById("theme")).then(function (blob) {
      //     download(blob, "my-node.png");
      //   });
    },
  },

  mounted() {
    this.setActivePoster(this.$route.params.id);
  },
};
</script>

<style></style>
