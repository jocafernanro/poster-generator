<template>
  <div class="container mx-auto">
    <component
      ref="poster"
      :is="getPosterComponent()"
      :posterId="activePoster.id"
      :image="activePoster.image"
    ></component>
    <button class="generate-button" @click="generateThemePoster">
      Generar poster
    </button>
    <button class="clean-form-button" @click="cleanPosterForm">
      Limpiar formulario
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandardPoster from "@/components/posters/StandardPoster";
import domtoimage from "dom-to-image";
import download from "downloadjs";

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
      window.scrollTo(0, 0);
      domtoimage
        .toBlob(document.getElementById("poster"))
        .then(function (blob) {
          download(blob, "poster.png");
        });
    },
    cleanPosterForm() {
      this.$refs.poster.cleanForm();
    },
  },

  mounted() {
    this.setActivePoster(this.$route.params.id);
  },
};
</script>

<style lang="postcss" scoped>
.generate-button {
  @apply p-4 rounded-lg font-bold text-lg bg-green-500 text-white ml-4;
}
.clean-form-button {
  @apply p-4 rounded-lg font-bold text-lg bg-red-500 text-white ml-4;
}
</style>
