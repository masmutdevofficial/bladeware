<template>
  <div class="z-0 relative w-full h-screen flex justify-center">
    <!-- Background Image -->
    <img
      src="@/assets/img/my1.webp"
      class="absolute inset-0 w-[100%] lg:w-[50%] right-0 top-0 left-auto object-cover z-0"
      alt="Background"
    />

    <!-- CARD -->
    <div
      class="relative z-10 bg-white bg-opacity-90 mt-8 p-5 rounded-lg w-[95%] max-w-3xl shadow-md flex flex-col items-center"
    >
      <!-- Profile Section -->
      <div class="w-full p-4">
        <div class="flex flex-col items-center">
          <!-- Avatar -->
          <img
            alt="User avatar"
            :src="avatarUrl"
            class="rounded-full mb-4"
            style="width: 100px!important; height: 100px!important"
          />

          <!-- Username -->
          <h2 class="text-xl font-semibold mb-2">{{ phone_email }}</h2>

          <!-- Social Icons -->
          <div class="relative w-full max-w-xs h-[250px] overflow-hidden mb-3">
            <div
              :class="isAnimated ? 'transition-transform duration-700' : ''"
              :style="{ transform: `translateY(-${translateY}px)` }"
            >
              <div
                v-for="(img, idx) in images.concat([images[0]])"
                :key="img + '-' + idx + '-' + Math.random()"
                class="relative w-full h-[250px] block"
              >
                <!-- Gambar grayscale selalu tampil penuh -->
                <img
                  :src="img"
                  class="w-full h-full object-contain block"
                  style="filter: grayscale(1)"
                  draggable="false"
                />
                <!-- Gambar berwarna hanya muncul jika maskProgress > 0 -->
                <img
                  v-if="maskProgress > 0"
                  :src="img"
                  class="w-full h-full object-contain block absolute top-0 left-0"
                  :style="{
                    WebkitMaskImage: `linear-gradient(to right, black ${maskProgress}%, transparent ${maskProgress}%)`,
                    maskImage: `linear-gradient(to right, black ${maskProgress}%, transparent ${maskProgress}%)`,
                  }"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          <!-- Balance Info -->
          <div class="grid grid-cols-2 gap-2 w-full mb-8 px-2 py-2">
            <div class="flex flex-col items-center min-w-0">
              <p class="text-sm text-orange-500">Total Balance</p>
              <p
                class="text-gray-800 truncate text-[16px] sm:text-lg"
                :class="windowWidth <= 380 ? 'text-[15px]' : ''"
                style="word-break: break-all"
              >
                {{ Number(balance).toFixed(2) }} USDC
              </p>
            </div>
            <div class="flex flex-col items-center min-w-0">
              <p class="text-sm text-orange-500">Today's Profit</p>
              <p
                class="text-gray-800 truncate text-[16px] sm:text-lg"
                :class="windowWidth <= 380 ? 'text-[15px]' : ''"
                style="word-break: break-all"
              >
                {{ Number(todaysProfit).toFixed(2) }} USDC
              </p>
            </div>
          </div>

          <!-- Action Buttons (inside card) -->
          <div class="relative w-full h-[50px] rounded-lg mb-6">
            <!-- Gradient Background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-300 to-white rounded-lg"
            ></div>

            <!-- Applications Button Text -->
            <div class="absolute inset-y-0 left-0 flex items-center pl-4">
              <p class="text-white font-semibold">
                Applications({{ taskDone }}/{{ taskLimit }})
              </p>
            </div>

            <div
              class="absolute right-28 flex items-center whitespace-nowrap text-red-600 font-semibold text-sm h-full sm:right-28 sm:top-auto sm:inset-y-0 max-[500px]:top-[-40px] max-[500px]:left-[45%] max-[500px]:transform max-[500px]:-translate-x-1/2"
              v-if="priceAkhir > 0"
            >
              <p class="text-red-600 font-semibold text-sm">
                Pending {{ Number(minusSekarang).toFixed(2) }} USDC
              </p>
            </div>

            <!-- Start Boost Button -->
            <div
              class="absolute inset-y-0 right-2 flex items-center"
              @click="toggleProduk"
            >
              <button
                class="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-md shadow cursor-pointer"
              >
                Start Boost
              </button>
            </div>
          </div>
        </div>

        <!-- Reminder Section -->
        <div class="lg:mt-12 text-sm text-gray-500 w-full text-left">
          <p class="font-medium mb-1">Important Reminder</p>
          <p>● Office Hours: 10:00 - 22:00</p>
          <p>● For more information, please contact customer service</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
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
      <!-- SVG Ikon -->
      <div class="mb-3">
        <!-- Success Icon -->
        <svg
          v-if="alert.type === 'success'"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
          />
        </svg>
        <!-- Error Icon -->
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
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"
          />
          <path d="M9 8l6 8" />
          <path d="M15 8l-6 8" />
        </svg>
      </div>
      <!-- Pesan Alert -->
      <p>{{ alert.message }}</p>
    </div>
  </div>

  <div>
    <!-- Modal Produk -->
    <transition name="slide-up">
      <div v-if="showProduk">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/30 z-10" @click="toggleProduk"></div>

        <!-- Popup -->
        <div class="produk-container z-20">
          <div class="p-8 rounded-lg shadow-md text-center w-full">
            <div class="flex flex-col items-center">
              <img
                :src="
                  produkData.product_image
                    ? 'https://bladeware.masmut.dev/uploads/products/' +
                      produkData.product_image
                    : 'https://storage.googleapis.com/a1aa/image/LWI_Pco9HSAUPXM-ksLR8TY20UASo0LEXcBuNZy9Ja4.jpg'
                "
                alt="Product image"
                class="rounded-full w-18 h-18 mb-4"
                height="100"
                width="100"
              />
              <h1 class="text-xl font-semibold mb-3">
                {{ produkData.product_name }}
              </h1>
            </div>
            <div class="flex justify-around mb-2">
              <div>
                <p class="text-orange-500 font-semibold">Total Price</p>
                <p class="text-lg">
                  {{ Number(produkData.price).toFixed(2) }} USDC
                </p>
              </div>
              <div>
                <p class="text-orange-500 font-semibold">Profit</p>
                <p class="text-lg">{{ produkData.profit }} USDC</p>
              </div>
            </div>
            <button
              @click="submitProduk"
              :disabled="isLoading"
              class="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg w-full max-w-md mx-auto flex items-center justify-center"
            >
              <svg
                v-if="isLoading"
                class="animate-spin mr-2 h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span>
                {{ isLoading ? "Boosting in progress..." : "Submit" }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import imgSrc from "@/assets/img/icon-all-bladeware.png";
import defaultAvatar from "@/assets/img/tx1.png";

const imgHeight = 250;
const isAnimated = ref(true);
const translateY = ref(0);
const maskProgress = ref(-1); // default -1 supaya gambar berwarna tidak muncul sama sekali di awal
let sliderTimeoutId = null;
let maskIntervalId = null;
const avatarUrl = ref(defaultAvatar);
const images = [imgSrc, imgSrc];

function startMaskAnimation(cb) {
  maskProgress.value = 0;
  let step = 1.2; // lebih kecil dari 4, jadi lebih lambat
  let progress = 0;
  if (maskIntervalId) clearInterval(maskIntervalId);

  maskIntervalId = setInterval(() => {
    progress += step;
    if (progress >= 100) {
      maskProgress.value = 100;
      clearInterval(maskIntervalId);
      if (cb) cb();
    } else {
      maskProgress.value = progress;
    }
  }, 20); // lebih lama antar frame (20ms, bisa ubah ke 25-30ms lebih lambat lagi)
}

function startSlider() {
  isAnimated.value = true;
  translateY.value += imgHeight;

  sliderTimeoutId = setTimeout(() => {
    if (translateY.value >= imgHeight * images.length) {
      isAnimated.value = false;
      translateY.value = 0;
      setTimeout(() => {
        isAnimated.value = true;
        nextStep();
      }, 20);
    } else {
      nextStep();
    }
  }, 1200);
}

function nextStep() {
  sliderTimeoutId = setTimeout(async () => {
    // Atur agar gambar slide berikutnya langsung grayscale
    maskProgress.value = -1;
    await nextTick();
    maskProgress.value = 0;
    startMaskAnimation(() => {
      startSlider();
    });
  }, 300);
}

onMounted(async () => {
  await nextTick();
  maskProgress.value = 0;
  startMaskAnimation(() => {
    startSlider();
  });
});

onUnmounted(() => {
  if (sliderTimeoutId) clearTimeout(sliderTimeoutId);
  if (maskIntervalId) clearInterval(maskIntervalId);
});

// Alert
const alert = ref({ message: "", type: "success" });
const showAlert = (message, type = "error") => {
  alert.value = { message, type };
  setTimeout(() => (alert.value.message = ""), 3000);
};

const showProduk = ref(false);
const phone_email = ref("");
const produkData = ref({
  product_name: "",
  product_image: "",
  price: 0,
  profit: 0,
});

const totaBalanceProfil = ref(0);
const balance = ref(0);
const todaysProfit = ref(0);
const taskDone = ref(0);
const taskLimit = ref(0);
const tempBalance = ref(0);
const priceAkhir = ref(0);
const profitAkhir = ref(0);
const totalFrozen = ref(0);
const minusSekarang = ref(0);
const isLoading = ref(false);

const fetchFinanceBoost = async () => {
  try {
    const token = localStorage.getItem("jwt_token");
    const res = await axios.get(
      "https://bladeware.masmut.dev/api/finance-boost",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.status === "success") {
      const data = res.data.data;

      balance.value = parseFloat(data.total_balance);
      todaysProfit.value = data.profit_today;
      taskDone.value = data.task_done;
      taskLimit.value = data.task_limit;

      tempBalance.value = parseFloat(data.temp_balance) || 0;
      priceAkhir.value = parseFloat(data.price_akhir) || 0;
      profitAkhir.value = parseFloat(data.profit_akhir) || 0;
      totalFrozen.value = parseFloat(data.total_frozen) || 0;

      if (tempBalance.value <= 0) {
        minusSekarang.value = balance.value - priceAkhir.value; // 1000 - 0
      } else {
        minusSekarang.value = tempBalance.value - priceAkhir.value; // 1500 - 200
      }

      if (totalFrozen.value > 0) {
        balance.value = parseFloat(data.total_frozen);
      } else {
        balance.value = parseFloat(data.total_balance);
      }
    }
  } catch (error) {
    console.error("Gagal fetch finance boost:", error);
  }
};

const submitProduk = async () => {
  isLoading.value = true;

  // Animasi loading selama 3 detik
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const token = localStorage.getItem("jwt_token");
    const { id, price, profit } = produkData.value;

    const res = await axios.post(
      "https://bladeware.masmut.dev/api/submit-produk",
      {
        id_products: id,
        price,
        profit,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.status === "success") {
      showAlert(res.data.message, "success");
      showProduk.value = false;
      await fetchFinanceBoost();
    } else {
      showAlert(res.data.message, "error");

      if (res.data.message === "Insufficient Balance") {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  } catch (error) {
    const message = error.response?.data?.message || "Gagal submit produk";
    showAlert(message, "error");

    if (message === "Insufficient Balance") {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const toggleProduk = async () => {
  if (!showProduk.value) {
    try {
      const token = localStorage.getItem("jwt_token");
      const res = await axios.get(
        "https://bladeware.masmut.dev/api/get-produk",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === "success") {
        produkData.value = res.data.data;
        showProduk.value = true;
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Gagal Mengambil data produk";
      showAlert(message, "error");
      console.error(error);
    }
  } else {
    showProduk.value = false;
  }
};

// Fetch Data
const fetchProfileData = async () => {
  try {
    const token = localStorage.getItem("jwt_token");
    if (!token) throw new Error("Token not found");

    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/get-data-boost",
      { headers: { Authorization: `${token}` } }
    );

    if (data.status === "success") {
      const user = data.data.user;
      const infoUser = data.data.info_user;

      // set teks
      phone_email.value = user.name;
      totaBalanceProfil.value = parseFloat(infoUser.saldo);
      todaysProfit.value = parseFloat(infoUser.komisi);

      // set avatar (utama pakai profile_url, fallback profile->/storage, lalu default)
      const fromApiUrl = user.profile_url || "";
      const fromProfilePath = user.profile || "";
      if (fromApiUrl) {
        avatarUrl.value = fromApiUrl;
      } else if (fromProfilePath) {
        // pastikan mengarah ke /storage/...
        const clean = String(fromProfilePath).replace(/^\/+/, "");
        avatarUrl.value = `https://bladeware.masmut.dev/storage/${clean.replace(/^storage\//, "")}`;
      } else {
        avatarUrl.value = defaultAvatar;
      }
    } else {
      console.warn("Failed to load profile data:", data.message);
    }
  } catch (err) {
    console.error("Error fetching profile data:", err?.response?.data?.message || err.message);
  }
};

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

onMounted(() => {
  fetchProfileData();
  fetchFinanceBoost();
  window.addEventListener("resize", updateWindowWidth);
});
</script>
<style scoped>
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
.produk-container {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: bottom 0.3s ease-in-out;
  height: 50%;
}

@media (min-width: 1024px) {
  .produk-container {
    height: 34%;
  }
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
