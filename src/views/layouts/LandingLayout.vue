<template>
  <header
    class="relative z-[1] lg:flex lg:justify-between lg:items-center px-[34px] h-[85px] py-4 bg-white"
  >
    <div class="font-bold flex flex-row justify-between">
      <router-link to="/" class="inline-block">
        <img
          alt="Bladeware logo"
          src="@/assets/img/logo.png"
          style="height: 26px; width: 125px"
          class="cursor-pointer hover:scale-110 transition-transform duration-500 inline-block"
        />
      </router-link>
      <!-- NAVBAR UTAMA -->
      <nav class="space-x-12 ml-12 mt-[2px] hidden md:flex">
        <span
          v-if="isLoggedIn"
          @click="showPengumuman = true"
          class="text-red-500 text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
        >
          {{ $t("limited_event") }}
        </span>
        <router-link
          class="text-black text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
          to="/about"
        >
          {{ $t("about") }}
        </router-link>
        <router-link
          class="text-black text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
          to="/solution"
        >
          {{ $t("solution") }}
        </router-link>
        <router-link
          class="text-black text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
          to="/service"
        >
          {{ $t("service") }}
        </router-link>
        <router-link
          class="text-black text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
          to="/example"
        >
          {{ $t("example-study") }}
        </router-link>
        <router-link
          v-if="isLoggedIn"
          class="text-black text-sm cursor-pointer font-normal hover:text-[#ff961b] hover:scale-110 transition-transform duration-500 inline-block"
          to="/profile"
        >
          {{ $t("profile") }}
        </router-link>
      </nav>

      <!-- ICON MENU (Muncul saat layar < 700px) -->
      <div class="md:hidden ml-12 mt-[2px]">
        <IconMenuDeep
          class="w-6 h-6 text-black cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
          @click="isOpen = true"
        />
      </div>

      <!-- BACKDROP -->
      <div
        v-if="isOpen || isLanguageMenuOpen || showCalendar"
        class="fixed inset-0 bg-black z-40"
        @click="closeMenu"
        style="background: rgba(0, 0, 0, 0.8)"
      ></div>

      <!-- OFFCANVAS MENU -->
      <div
        class="fixed top-0 right-0 h-full w-75 bg-white shadow-lg transform transition-transform duration-500 z-50"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-row justify-between items-center">
          <img
            alt="Bladeware logo"
            src="@/assets/img/logo.png"
            style="height: 26px; width: 125px"
            class="cursor-pointer hover:scale-110 transition-transform duration-500 ml-6 inline-block"
          />
          <div class="flex justify-end p-4">
            <IconX
              class="w-6 h-6 text-black cursor-pointer"
              @click="closeMenu"
            />
          </div>
        </div>
        <nav class="flex flex-col space-y-4 p-6">
          <span
            v-if="isLoggedIn"
            class="text-red-500 font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            @click="showPengumuman = true"
          >
            {{ $t("limited_event") }}
          </span>
          <router-link
            v-if="isLoggedIn"
            class="text-black font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            to="/profile"
            @click="closeMenu"
          >
            {{ $t("profile") }}
          </router-link>
          <router-link
            class="text-black font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            to="/about"
            @click="closeMenu"
          >
            {{ $t("about") }}
          </router-link>
          <router-link
            class="text-black font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            to="/solution"
            @click="closeMenu"
          >
            {{ $t("solution") }}
          </router-link>
          <router-link
            class="text-black font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            to="/service"
            @click="closeMenu"
          >
            {{ $t("service") }}
          </router-link>
          <router-link
            class="text-black font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            to="/example"
            @click="closeMenu"
          >
            {{ $t("example-study") }}
          </router-link>

          <div class="w-full">
            <!-- Jika sudah login -->
            <button
              v-if="isLoggedIn"
              @click="logout"
              class="text-black mt-3 font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
            >
              {{ $t("logout") }}
            </button>

            <!-- Jika belum login -->
            <router-link
              v-else
              @click="closeMenu"
              class="text-black mt-3 font-semibold text-lg cursor-pointer hover:text-[#ff961b] transition-transform duration-500"
              to="/login"
            >
              {{ $t("login-register") }}
            </router-link>
          </div>
        </nav>
      </div>
    </div>
    <!-- Offcanvas -->
    <div
      class="fixed bottom-0 z-50 left-0 right-0 bg-white shadow-lg p-4 rounded-t-2xl transition-transform duration-500"
      :class="isLanguageMenuOpen ? 'translate-y-0' : 'translate-y-full'"
    >
      <h2 class="text-center text-lg font-semibold">Select Language</h2>
      <ul class="mt-4 space-y-2 text-center">
        <li
          v-for="(lang, code) in languages"
          :key="code"
          @click.prevent="changeLanguage(code)"
          class="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
        >
          {{ lang }}
        </li>
      </ul>
    </div>
    <div class="justify-end items-center space-x-4 hidden md:flex">
      <!-- Jika sudah login -->
      <button
        v-if="isLoggedIn"
        @click="logout"
        class="bg-[#ff961b] mr-12 cursor-pointer hover:scale-110 transition-transform duration-500 inline-block text-white text-sm px-6 py-[10px] rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)] w-full"
      >
        {{ $t("logout") }}
      </button>

      <!-- Jika belum login -->
      <router-link
        v-else
        @click="closeMenu"
        class="bg-[#ff961b] mr-12 cursor-pointer hover:scale-110 transition-transform duration-500 inline-block text-white text-sm px-6 py-[10px] rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)] w-full"
        to="/login"
      >
        {{ $t("login-register") }}
      </router-link>

    </div>
  </header>
  <main>
    <DaunJatuh />
    <router-view />
  </main>
  <!-- Floating Button -->
  <div class="fixed bottom-5 right-5">
    <button
      @click="showLoading"
      class="w-17 h-17 rounded-full shadow-lg bg-[#ff961b] border border-gray-300 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
    >
      <img
        src="@/assets/img/support.png"
        alt="Floating Icon"
        class="w-8 h-7 rounded-full"
      />
      <div class="loader mt-2"></div>
    </button>
  </div>
  <!-- Modal -->
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
  <div
    v-if="isLoading"
    class="fixed inset-0 flex justify-center items-center z-50"
  >
    <div
      class="w-20 h-20 flex flex-col justify-center items-center rounded-lg"
      style="background: rgba(0, 0, 0, 0.3)"
    >
      <div class="preloader"></div>
      <p class="text-white text-sm">Loading...</p>
    </div>
  </div>
  <div>
    <!-- Kalender -->
    <transition name="slide-up">
      <div v-if="showCalendar" class="calendar-container">
        <!-- Header Kalender -->
        <div class="calendar-header p-4">
          <button @click="prevYear">«</button>
          <button @click="prevMonth">◀</button>
          <span>{{ formattedMonthYear }}</span>
          <button @click="nextMonth">▶</button>
          <button @click="nextYear">»</button>
        </div>
        <div
          class="flex flex-row justify-around px-4 border-b-[0.5px] border-b-gray-300"
        >
          <div v-for="day in daysOfWeek" :key="day" class="day-name">
            {{ day }}
          </div>
        </div>

        <!-- Grid Kalender -->
        <div class="calendar-grid bg-gray-100 p-4">
          <div
            v-for="n in firstDayOfMonth"
            :key="'empty-' + n"
            class="empty"
          ></div>
          <div
            v-for="date in daysInMonth"
            :key="date"
            :class="['day', { selected: date === selectedDay }]"
            @click="selectDate(date)"
          >
            {{ date }}
          </div>
        </div>
        <div class="px-4">
          <button @click="toggleCalendar" class="close-btn">OK</button>
        </div>
      </div>
    </transition>
  </div>
  <!-- Modal Banner Pengumuman -->
  <div
    v-if="showPengumuman"
    class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
  >
    <div class="relative w-[80%] lg:w-[20%]">
      <img
        :src="bannerSrc"
        alt="Banner"
        class="rounded-lg shadow-lg"
        :style="bannerSrc === bannerNew ? { width: '100%' } : null"
      />
      <button
        @click="showPengumuman = false"
        class="absolute top-2 right-2 bg-white bg-opacity-80 text-black rounded-full p-1 hover:bg-opacity-100 transition"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  </div>

</template>

<script setup>
import { ref, computed, watch } from "vue";
import axios from "axios";
import { IconChevronDown } from "@tabler/icons-vue";
import { IconX } from "@tabler/icons-vue";
import whatsappImage from "@/assets/img/whatsapp.png"; // Import gambar
import bannerNew from "@/assets/img/bladeware-register-bonus.png";
import bannerLimited from "@/assets/img/bladeware-limited-event.png";
import { IconMenuDeep } from "@tabler/icons-vue"; // Import ikon dari Tabler
import DaunJatuh from "@/components/DaunJatuh.vue";
import { useAppSettingsStore } from "@/stores/appSettings";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const telegramImage = "https://cdn-icons-png.flaticon.com/512/2111/2111646.png";

// State untuk menampilkan dropdown
const isDropdownOpen = ref(false);
const isLoading = ref(false);
const showModal = ref(false);
const isOpen = ref(false);
const isLanguageMenuOpen = ref(false);
const { locale } = useI18n();
const appSettings = useAppSettingsStore();
const showPengumuman = ref(false);
const bannerSrc = ref(bannerLimited); // default
const bannerValue = ref(null);
const hasShownThisLogin = ref(false);
// Deteksi login dari token lokal
const isLoggedIn = ref(false);

const fetchBanner = async () => {
  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("No token");

    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/banner",
      { headers: { Authorization: `Bearer ${jwtToken}` } }
    );

    const val = Number(
      data?.data?.registered_banner ?? data?.registered_banner ?? data ?? 1
    );

    bannerValue.value = val;
    bannerSrc.value = val === 0 ? bannerNew : bannerLimited;

    if (val === 0) {
      // FIRST-TIME: tampilkan banner registrasi, lalu set ke 1
      showPengumuman.value = true;

      try {
        await axios.patch(
          "https://bladeware.masmut.dev/api/banner/register",
          {},
          { headers: { Authorization: `Bearer ${jwtToken}` } }
        );
        bannerValue.value = 1; // konsistensi lokal
      } catch (err) {
        console.error("register banner failed:", err?.response?.data || err);
      }

      // hindari banner limited ikut muncul di login ini
      sessionStorage.removeItem("just_logged_in");
    }

    // NOTE: jika val === 1 (limited), JANGAN show di sini.
  } catch (e) {
    console.error("fetchBanner error:", e);
    // fallback: perlakukan sebagai limited tanpa auto-show
    bannerValue.value = 1;
    bannerSrc.value = bannerLimited;
  }
};

watch(
  () => route.path,
  async () => {
    const token = localStorage.getItem("jwt_token");
    const loggedIn = !!token;
    isLoggedIn.value = loggedIn;

    if (loggedIn) {
      await fetchBanner(); // set bannerValue & bannerSrc

      const just = sessionStorage.getItem("just_logged_in");
      if (bannerValue.value === 1 && just === "1") {
        // LIMITED: show sekali per login
        showPengumuman.value = true;
        sessionStorage.removeItem("just_logged_in"); // supaya refresh tidak muncul lagi
      }
    } else {
      // logout: bersihkan flag & modal
      sessionStorage.removeItem("just_logged_in");
      showPengumuman.value = false;
    }
  },
  { immediate: true }
);


// Saat modal ditutup otomatis, simpan state ke localStorage

// Daftar bahasa yang tersedia
const languages = {
  en: "English",
  id: "Bahasa Indonesia",
};

const changeLanguage = (langCode) => {
  appSettings.setLanguage(langCode, (newLocale) => {
    locale.value = newLocale; // Perbarui locale i18n
  });
};

const showCalendar = ref(false);
const selectedDate = ref(new Date());

// Nama hari dalam seminggu
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Format bulan dan tahun
const formattedMonthYear = computed(() => {
  return selectedDate.value.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
});

// Hitung jumlah hari dalam bulan ini
const daysInMonth = computed(() => {
  return new Date(
    selectedDate.value.getFullYear(),
    selectedDate.value.getMonth() + 1,
    0
  ).getDate();
});

// Hitung hari pertama bulan ini (0 = Minggu, 6 = Sabtu)
const firstDayOfMonth = computed(() => {
  return new Date(
    selectedDate.value.getFullYear(),
    selectedDate.value.getMonth(),
    1
  ).getDay();
});

const selectedDay = ref(selectedDate.value.getDate());

// Navigasi bulan
const prevMonth = () => {
  selectedDate.value.setMonth(selectedDate.value.getMonth() - 1);
  selectedDate.value = new Date(selectedDate.value);
};

const nextMonth = () => {
  selectedDate.value.setMonth(selectedDate.value.getMonth() + 1);
  selectedDate.value = new Date(selectedDate.value);
};

const logout = () => {
  localStorage.removeItem("jwt_token");
  sessionStorage.removeItem("just_logged_in");
  hasShownThisLogin.value = false;
  showPengumuman.value = false;
  router.push("/login");
};


// Navigasi tahun
const prevYear = () => {
  selectedDate.value.setFullYear(selectedDate.value.getFullYear() - 1);
  selectedDate.value = new Date(selectedDate.value);
};

const nextYear = () => {
  selectedDate.value.setFullYear(selectedDate.value.getFullYear() + 1);
  selectedDate.value = new Date(selectedDate.value);
};

// Pilih tanggal
const selectDate = (date) => {
  selectedDay.value = date;
};

// Tampilkan kalender
const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
};

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

// Fungsi untuk menutup menu saat backdrop diklik
const closeMenu = () => {
  isOpen.value = false;
  isLanguageMenuOpen.value = false;
};

const showLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    showModal.value = true;
  }, 1500);
};

const toggleLanguageMobile = () => {
  isOpen.value = false;
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const closeModal = () => {
  showModal.value = false;
};

</script>

<style scoped>
/* Animasi munculnya dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {
  width: 30px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, #ffffff 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  33% {
    background-size: calc(100% / 3) 0%, calc(100% / 3) 100%, calc(100% / 3) 100%;
  }
  50% {
    background-size: calc(100% / 3) 100%, calc(100% / 3) 0%, calc(100% / 3) 100%;
  }
  66% {
    background-size: calc(100% / 3) 100%, calc(100% / 3) 100%, calc(100% / 3) 0%;
  }
}

.preloader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: linear-gradient(
        0deg,
        rgb(0 0 0/50%) 30%,
        #0000 0 70%,
        rgb(0 0 0/100%) 0
      )
      50%/8% 100%,
    linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0)
      50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.preloader::before,
.preloader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.preloader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes l23 {
  100% {
    transform: rotate(1turn);
  }
}

/* Animasi Slide dari Bawah */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Styling Kalender */
.calendar-container {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: bottom 0.3s ease-in-out;
  height: 80%;
}

/* Header Kalender */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.calendar-header button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

/* Grid Kalender */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

/* Hari dalam Minggu */
.day-name {
  font-weight: bold;
  text-align: center;
}

/* Tanggal */
.day {
  padding: 10px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}

/* Tanggal yang Dipilih */
.selected {
  background: transparent !important;
  color: black;
}

/* Tanggal Kosong */
.empty {
  visibility: hidden;
}

/* Tombol OK */
.close-btn {
  background-color: #ff961b;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
}
</style>
