<template>
  <div class="relative w-full h-screen flex justify-center">
    <!-- Background Image -->
    <img
      src="@/assets/img/my1.webp"
      class="lg:flex hidden absolute inset-0 w-[50%] right-0 top-0 left-auto object-cover z-0"
      alt="Background"
    />

    <!-- CARD -->
    <div
      class="relative z-0 lg:bg-white h-max mt-[1px] py-15 px-5 lg:py-35 lg:px-20 rounded-lg flex flex-col items-center md:flex-row md:justify-between w-full lg:w-200 bg-opacity-90"
    >
      <div class="hidden lg:flex text-center md:text-left mb-8 md:mb-0">
        <img src="@/assets/img/logo.png" class="w-70" alt="" />
      </div>

      <div class="w-full md:w-1/2">
        <div class="space-y-4">
          <!-- Username -->
          <div class="relative">
            <input
              v-model="username"
              type="text"
              placeholder="Username/Phone Number/Email"
              class="w-full h-10 p-3 text-sm border bg-white border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
            />
            <button
              v-if="username"
              type="button"
              @click="username = ''"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <!-- LOGIN PASSWORD -->
          <div class="relative mb-0">
            <input
              v-model="loginPassword"
              :type="showLoginPassword ? 'text' : 'password'"
              placeholder="Login password"
              class="w-full h-10 p-3 text-sm border bg-white border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-16"
            />
            <button
              v-if="loginPassword"
              type="button"
              @click="loginPassword = ''"
              class="absolute right-10 top-3 text-gray-500"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
            <button
              type="button"
              @click="showLoginPassword = !showLoginPassword"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconEye v-if="showLoginPassword" />
              <IconEyeClosed v-else />
            </button>
          </div>

          <!-- Forgot -->
          <div class="text-right">
            <button
              type="button"
              @click="openModal"
              class="text-sm text-gray-500 hover:text-green-500 underline-offset-2 hover:underline"
            >
              Forgot your password?
            </button>
          </div>

          <!-- Login -->
          <div class="mb-0">
            <button
              type="button"
              @click="login"
              class="bg-[#ff961b] cursor-pointer inline-block text-white text-sm py-4 px-12 rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)] w-full"
            >
              Login
            </button>
          </div>

          <div class="text-end">
            <span class="text-sm text-gray-500">
              No account?
              <router-link class="text-sm text-[#ff961b]" to="register">
                Register now
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert Modal -->
    <div
      v-if="alert.message"
      class="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
    >
      <div
        :class="[
          'p-4 rounded-lg flex flex-col justify-center items-center text-center w-[300px]',
          'bg-black/70 text-white',
        ]"
      >
        <div class="mb-3">
          <svg
            v-if="alert.type === 'success'"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"
            />
            <path d="M9 8l6 8" />
            <path d="M15 8l-6 8" />
          </svg>
        </div>
        <p>{{ alert.message }}</p>
      </div>
    </div>

    <!-- Customer Service Modal -->
    <div
      v-if="showModal"
      class="fixed z-90 inset-0 flex items-start justify-center pt-20"
      style="background: rgba(0, 0, 0, 0.8)"
      @click="closeModal"
    >
      <div class="bg-white p-6 w-80" @click.stop>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold">Customer Service Center</h2>
          <button @click="closeModal" class="text-orange-500 text-xl">
            <IconX class="cursor-pointer" />
          </button>
        </div>

        <!-- WhatsApp row -->
        <div class="flex justify-around">
          <div
            class="text-center"
            v-for="(service, index) in services"
            :key="'wa-' + index"
          >
            <img
              :src="service.image"
              alt="Service Icon"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm">{{ service.name }}</p>
          </div>
        </div>

        <!-- Telegram row (di bawahnya) -->
        <div class="flex justify-around mt-4">
          <div
            class="text-center"
            v-for="(service, index) in servicesTelegram"
            :key="'tg-' + index"
          >
            <img
              :src="service.image"
              alt="Service Icon"
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm">{{ service.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IconEye, IconEyeClosed, IconX } from "@tabler/icons-vue";

// gambar layanan
import whatsappImage from "@/assets/img/whatsapp.png";
const telegramImage = "https://cdn-icons-png.flaticon.com/512/2111/2111646.png";

export default {
  components: {
    IconEye,
    IconEyeClosed,
    IconX,
  },
  setup() {
    const username = ref("");
    const loginPassword = ref("");
    const showLoginPassword = ref(false);
    const router = useRouter();

    const alert = ref({
      message: "",
      type: "success",
    });

    const showAlert = (message, type = "error") => {
      alert.value = { message, type };
      setTimeout(() => {
        alert.value.message = "";
      }, 3000);
    };

    // Modal CS
    const showModal = ref(false);
    const openModal = () => (showModal.value = true);
    const closeModal = () => (showModal.value = false);

    // Data icon layanan
    const services = ref([
      { name: "WhatsApp", image: whatsappImage },
      { name: "WhatsApp", image: whatsappImage },
      { name: "WhatsApp", image: whatsappImage },
    ]);

    const servicesTelegram = ref([
      { name: "Telegram", image: telegramImage },
      { name: "Telegram", image: telegramImage },
      { name: "Telegram", image: telegramImage },
    ]);

    const getIpAddress = async () => {
      try {
        const res = await axios.get("https://api.myip.com");
        return res.data.ip;
      } catch (error) {
        try {
          const res = await axios.get("https://ipinfo.io/json");
          return res.data.ip;
        } catch (err) {
          console.error("Gagal ambil IP Address", err);
          return null;
        }
      }
    };

    const login = async () => {
      if (!username.value || !loginPassword.value) {
        showAlert("Username and password cannot be empty.", "error");
        return;
      }

      try {
        const ip_address = await getIpAddress();
        const response = await axios.post(
          "https://bladeware.masmut.dev/api/login",
          {
            phone_email: username.value,
            password: loginPassword.value,
            ip_address,
          }
        );

        const token = response.data.token;
        if (token) {
          localStorage.setItem("jwt_token", token);
          showAlert("Login successful!", "success");
          sessionStorage.setItem("just_logged_in", "1");
          setTimeout(() => {
            router.push("/profile");
          }, 1000);
        } else {
          showAlert("Token not received. Login failed.", "error");
        }
      } catch (error) {
        showAlert(
          error.response?.data?.message || "Login failed. Please try again.",
          "error"
        );
      }
    };

    return {
      username,
      loginPassword,
      showLoginPassword,
      login,
      alert,
      showAlert,

      // modal cs
      showModal,
      openModal,
      closeModal,
      services,
      servicesTelegram,
    };
  },
};
</script>
