<template>
  <div class="home container mx-auto">
    <div v-for="poster in posters" :key="poster.id">
      <img
        class="w-96 cursor-pointer"
        :src="require(`@/assets/${poster.image}`)"
        :alt="poster.id"
        @click="goToPoster(poster.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState({
      posters: (state) => state.posters.posters,
    }),
  },

  methods: {
    goToPoster(posterId) {
      this.$router.push(`/poster/${posterId}`);
    },
  },
};
</script>
