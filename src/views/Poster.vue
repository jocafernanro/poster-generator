<template>
  <div class="container mx-auto">
    <component
      :is="getPosterComponent()"
      :image="activePoster.image"
    ></component>
    <button class="generate-button" @click="generateThemePoster">
      Generar poster
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandardPoster from "@/components/posters/StandardPoster";
import { saveAsPng } from "save-html-as-image";

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
      const node = document.getElementById("poster");
      saveAsPng(node, { filename: "poster" });
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
</style>
