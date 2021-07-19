<template>
  <div class="w-full">
    <!-- POSTER -->
    <div id="poster" class="poster" :class="[colorActive.color]">
      <div class="poster__left-container">
        <p class="poster__dates manrope">{{ toUpper(dates) }}</p>
        <div class="poster__hotel">
          <h1 class="poster__hotel__title playfair">{{ toUpper(hotel) }}</h1>
          <div class="flex flex-row justify-between">
            <svg
              v-for="star in parseInt(stars)"
              :key="star"
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
          <img
            v-if="andaluciaSegura"
            src="@/assets/images/andalucia-segura.jpg"
            class="absolute rounded-full w-14 top-2 left-0"
          />
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
            v-if="!image1.image"
            class="absolute h-full w-full object-cover"
            :src="require(`@/assets/${image}`)"
            alt="Standard"
          />
          <img
            v-else
            class="absolute h-full w-full object-cover"
            :src="image1.image"
            alt="Standard"
          />
        </div>
        <div class="poster__extra-info">
          <div
            class="
              poster__bubble
              bg-gradient-to-b
              from-purple-200
              to-blue-400
              z-10
            "
            :class="[bubble1Position]"
          >
            <span class="font-bold text-4xl italic">{{
              toUpper(bubble1.text1)
            }}</span>
            <span class="font-semibold italic">{{
              toUpper(bubble1.text2)
            }}</span>
          </div>
          <div class="poster__bubble bg-yellow-300" :class="[bubble2Position]">
            <span class="font-bold text-2xl italic text-center">{{
              toUpper(bubble2.text)
            }}</span>
          </div>
          <div
            v-if="bubble3.active"
            class="
              poster__bubble
              top-24
              right-64
              bg-gradient-to-b
              from-green-200
              to-blue-400
              z-10
            "
          >
            <span class="font-bold text-4xl italic">{{
              toUpper(bubble3.text1)
            }}</span>
            <span class="font-semibold italic">{{
              toUpper(bubble3.text2)
            }}</span>
          </div>
        </div>
        <div class="relative h-60">
          <img
            v-if="!image2.image"
            class="absolute h-full w-full object-cover"
            :src="require(`@/assets/${image}`)"
            alt="Standard"
          />
          <img
            v-else
            class="absolute h-full w-full object-cover"
            :src="image2.image"
            alt="Standard"
          />
        </div>
      </div>
    </div>

    <!-- DATA -->
    <div class="form">
      <div class="form__fields-group">
        <div class="form__field">
          <span class="form__label">Colores</span>
          <div class="flex flex-row">
            <div
              v-for="color in colors"
              :key="color.id"
              class="form__color-picker"
              :class="[
                color.color,
                { 'border-2 border-yellow-400': color.active },
              ]"
              @click="setColorActive(color.id)"
            ></div>
          </div>
        </div>
      </div>

      <div class="form__fields-group">
        <div class="form__field">
          <span class="form__label">Fechas</span>
          <textarea
            class="form__input"
            v-model="dates"
            type="text"
            placeholder="Aquí van las fechas"
          />
        </div>
        <div class="form__field">
          <span class="form__label">Nombre del hotel</span>
          <input
            class="form__input"
            v-model="hotel"
            type="text"
            placeholder="El nombre del hotel"
          />
        </div>
        <div class="form__field">
          <span class="form__label">Número de estrellas</span>
          <input class="form__input" v-model="stars" type="number" />
        </div>
      </div>

      <div class="form__fields-group">
        <div class="form__field">
          <span class="form__label">Texto 1 - Burbuja 1</span>
          <input
            class="form__input"
            v-model="bubble1.text1"
            type="text"
            placeholder="425e"
          />
        </div>
        <div class="form__field">
          <span class="form__label">Texo 2 - Burbuja 1</span>
          <input
            class="form__input"
            v-model="bubble1.text2"
            type="text"
            placeholder="2 adultos"
          />
        </div>
        <div class="form__field">
          <span class="form__label">Texo - Burbuja 2</span>
          <input class="form__input" v-model="bubble2.text" type="text" />
        </div>
      </div>

      <div class="form__fields-group">
        <div class="form__field">
          <span class="form__label">Texto 1 - Burbuja 3</span>
          <input
            class="form__input"
            v-model="bubble3.text1"
            type="text"
            placeholder="425e"
          />
        </div>
        <div class="form__field">
          <span class="form__label">Texo 2 - Burbuja 3</span>
          <input
            class="form__input"
            v-model="bubble3.text2"
            type="text"
            placeholder="2 adultos y 1 niño"
          />
        </div>
      </div>

      <div class="form__fields-group">
        <div class="form__field">
          <span class="form__label">Andalucía Segura</span>
          <input v-model="andaluciaSegura" type="checkbox" />
        </div>
        <div class="form__field">
          <span class="form__label">Imagen superior</span>
          <input type="file" @change="uploadImage(image1, $event)" />
        </div>
        <div class="form__field">
          <span class="form__label">Imagen inferior</span>
          <input type="file" @change="uploadImage(image2, $event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posterId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      colors: [
        { id: "blue", color: "bg-blue-200", active: false },

        { id: "green", color: "bg-green-200", active: false },
        { id: "purple", color: "bg-purple-200", active: false },
        { id: "yellow", color: "bg-yellow-200", active: false },
        { id: "red", color: "bg-red-200", active: false },
        { id: "pink", color: "bg-pink-200", active: false },
      ],
      dates:
        localStorage.getItem(`postergenerator.${this.posterId}.dates`) || "",
      hotel:
        localStorage.getItem(`postergenerator.${this.posterId}.hotel`) || "",
      stars:
        localStorage.getItem(`postergenerator.${this.posterId}.stars`) || 5,
      bubble1: {
        text1:
          localStorage.getItem(
            `postergenerator.${this.posterId}.bubble1.text1`
          ) || "",
        text2:
          localStorage.getItem(
            `postergenerator.${this.posterId}.bubble1.text2`
          ) || "",
      },
      bubble2: {
        text:
          localStorage.getItem(
            `postergenerator.${this.posterId}.bubble2.text`
          ) || "",
      },
      bubble3: {
        active: false,
        text1:
          localStorage.getItem(
            `postergenerator.${this.posterId}.bubble3.text1`
          ) || "",
        text2:
          localStorage.getItem(
            `postergenerator.${this.posterId}.bubble3.text2`
          ) || "",
      },
      image1: { image: false },
      image2: { image: false },
      andaluciaSegura:
        localStorage.getItem(
          `postergenerator.${this.posterId}.andaluciaSegura`
        ) || false,
    };
  },

  computed: {
    bubble1Position() {
      return this.bubble3.active ? "-top-4 left-24" : "top-4 left-10";
    },
    bubble2Position() {
      return this.bubble3.active ? "top-12 right-0" : "top-12 right-10";
    },
    colorActive() {
      return this.colors.find((color) => color.active) || this.colors[0];
    },
  },

  watch: {
    dates(newVal) {
      localStorage.setItem(`postergenerator.${this.posterId}.dates`, newVal);
    },
    hotel(newVal) {
      localStorage.setItem(`postergenerator.${this.posterId}.hotel`, newVal);
    },
    stars(newVal) {
      localStorage.setItem(`postergenerator.${this.posterId}.stars`, newVal);
    },
    "bubble1.text1"(newVal) {
      localStorage.setItem(
        `postergenerator.${this.posterId}.bubble1.text1`,
        newVal
      );
    },
    "bubble1.text2"(newVal) {
      localStorage.setItem(
        `postergenerator.${this.posterId}.bubble1.text2`,
        newVal
      );
    },
    "bubble2.text"(newVal) {
      localStorage.setItem(
        `postergenerator.${this.posterId}.bubble2.text`,
        newVal
      );
    },
    "bubble3.text1": function (newVal) {
      this.bubble3.active = !!newVal;
      localStorage.setItem(
        `postergenerator.${this.posterId}.bubble3.text1`,
        newVal
      );
    },
    "bubble3.text2": function (newVal) {
      this.bubble3.active = !!newVal;
      localStorage.setItem(
        `postergenerator.${this.posterId}.bubble3.text2`,
        newVal
      );
    },
    andaluciaSegura(newVal) {
      localStorage.setItem(
        `postergenerator.${this.posterId}.andaluciaSegura`,
        newVal
      );
    },
  },

  methods: {
    cleanForm() {
      this.dates = "";
      this.hotel = "";
      this.stars = 5;
      this.andaluciaSegura = false;
      this.bubble1.text1 = "";
      this.bubble1.text2 = "";
      this.bubble2.text = "";
      this.bubble3.text1 = "";
      this.bubble3.text2 = "";
    },
    isColorActive(colorId) {
      const color = this.colors.find((color) => color.id === colorId);
      return color?.active;
    },
    setColorActive(colorId) {
      this.colors.forEach(
        (color) => (color.active = color.id === colorId && !color.active)
      );
    },
    toUpper(text) {
      if (!text) return;
      return text.toUpperCase();
    },
    uploadImage(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      //   var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (item) {
      item.image = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.poster {
  @apply w-desktop h-desktop flex flex-row;
}

.poster__left-container {
  @apply w-5/12 bg-white my-7 ml-7 mr-3.5 p-10;
}

.poster__right-container {
  @apply w-7/12 my-7 mr-7 ml-3.5  flex flex-col justify-between;
}

.poster__dates {
  @apply font-bold text-2xl italic tracking-widest text-center mb-8;
}

.poster__hotel {
  @apply relative flex flex-col items-center py-12 border-b-4 border-t-4 border-green-400 text-center;
}

.poster__hotel__title {
  @apply font-bold text-4xl text-center italic leading-tight mb-4;
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
  @apply relative h-64;
}

.poster__bubble {
  @apply absolute flex flex-col justify-center items-center h-44 w-44 p-4 text-center rounded-full;
}

.poster__warning {
  @apply tracking-normal leading-4 mt-2 p-2 bg-yellow-200 rounded-lg text-sm text-left;
}

.form {
  @apply flex flex-col mt-4;
}

.form__fields-group {
  @apply flex flex-row justify-between;
}

.form__field {
  @apply flex flex-col flex-1 m-4;
}

.form__label {
  @apply font-bold text-xl;
}

.form__input {
  @apply border border-gray-200 p-3 rounded-md;
}

.form__color-picker {
  @apply w-14 h-14 rounded-md mr-2 cursor-pointer;
}
</style>
