<template>
  <div class="w-full">
    <div class="poster">
      <div class="poster__left-container">
        <h2 class="poster__dates manrope">DEL 14 AL 18 DE JULIO</h2>
        <div class="poster__hotel">
          <h1 class="poster__hotel__title playfair">HOTELS FENIX FAMILY</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <div class="poster__info">
          <p class="font-semibold text-xl">RESERVAS: 615217674</p>
          <div class="poster__social">
            <img
              class="poster__social__icon"
              src="@/assets/images/whatsapp.png"
              alt="whatsapp logo"
            />
            <img
              class="poster__social__icon"
              src="@/assets/images/facebook.png"
              alt="facebook logo"
            />
            <img
              class="poster__social__icon"
              src="@/assets/images/instagram.png"
              alt="instagram logo"
            />
            <img
              class="poster__social__icon"
              src="@/assets/images/messenger.png"
              alt="messenger logo"
            />
          </div>
          <img src="@/assets/images/logo.png" alt="logo agencia" />
          <p class="poster__warning">
            Tarifas sujetas a disponibilidad en el momento de la reserva
          </p>
        </div>
      </div>

      <div class="poster__right-container">
        <div class="relative h-60">
          <img
            class="absolute h-full w-full object-cover"
            :src="require(`@/assets/${image}`)"
            alt="Standard"
          />
        </div>
        <div class="poster__extra-info">
          <div
            class="
              poster__bubble
              top-2
              left-10
              bg-gradient-to-b
              from-purple-200
              to-blue-400
            "
          >
            <span class="font-bold text-5xl italic">425e</span>
            <span class="font-semibold italic">2 ADULTOS</span>
          </div>
          <div class="poster__bubble top-12 right-10 bg-yellow-300">
            <span class="font-bold text-2xl italic text-center"
              >TODO INCLUIDO</span
            >
          </div>
        </div>
        <div class="relative h-60">
          <img
            class="absolute h-full w-full object-cover"
            :src="require(`@/assets/${image}`)"
            alt="Standard"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },

  computed: {
    toMayus(text) {
      if (!text) return;
      return text.toUpperCase();
    },
  },
};
</script>

<style lang="postcss" scoped>
.poster {
  @apply w-desktop h-desktop flex flex-row bg-blue-200;
}

.poster__left-container {
  @apply w-5/12 bg-white my-7 ml-7 mr-3.5 p-10;
}

.poster__right-container {
  @apply w-7/12 my-7 mr-7 ml-3.5  flex flex-col justify-between;
}

.poster__dates {
  @apply font-bold text-3xl italic tracking-widest text-center mb-8;
}

.poster__hotel {
  @apply flex flex-col items-center py-12 border-b-4 border-t-4 border-green-400 text-center;
}

.poster__hotel__title {
  @apply font-bold text-5xl  text-center italic leading-tight mb-4;
}

.poster__info {
  @apply my-5;
}

.poster__social {
  @apply flex flex-row justify-between my-3;
}

.poster__social__icon {
  @apply w-8;
}

.poster__extra-info {
  @apply relative h-56;
}

.poster__bubble {
  @apply absolute flex flex-col justify-center items-center h-44 w-44 p-2 rounded-full;
}

.poster__warning {
  @apply tracking-normal leading-4 mt-2 p-2 bg-yellow-200 rounded-lg text-sm text-left;
}
</style>
