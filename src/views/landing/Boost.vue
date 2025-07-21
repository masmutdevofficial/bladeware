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
            src="@/assets/img/tx1.png"
            class="rounded-full mb-4"
            width="100"
            height="100"
          />

          <!-- Username -->
          <h2 class="text-xl font-semibold mb-2">{{ phone_email }}</h2>

          <!-- Social Icons -->
          <div class="relative w-full max-w-xs h-[220px] overflow-hidden">
            <!-- Gambar 1 -->
            <img
              src="@/assets/img/icon-all.png"
              class="absolute w-full h-auto object-contain animate-iconFirst"
            />

            <!-- Gambar 2 -->
            <img
              src="@/assets/img/icon-all.png"
              class="absolute w-full h-auto object-contain animate-iconSecond mask-gradient"
            />
          </div>

          <!-- Balance Info -->
          <div
            class="flex items-center justify-between w-full mb-8 border border-gray-200 rounded-lg px-4 py-3"
          >
            <div class="w-1/2 text-center">
              <p class="text-sm text-orange-500 font-semibold">Total Balance</p>
              <p
                class="font-semibold text-gray-800"
                :class="windowWidth <= 380 ? 'text-[16px]' : 'text-lg'"
              >
                {{ Number(balance).toFixed(2) }} USDC
              </p>
            </div>
            <div class="border-l h-full mx-2"></div>
            <div class="w-1/2 text-center">
              <p class="text-sm text-orange-500 font-semibold">
                Today's Profit
              </p>
              <p
                class="font-semibold text-gray-800"
                :class="windowWidth <= 380 ? 'text-[16px]' : 'text-lg'"
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
                {{ Number(minusSekarang).toFixed(2) }} USDC
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
                    ? 'https://bladeware.masmutdev.id/uploads/products/' +
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
              class="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg w-full max-w-md mx-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import axios from "axios";

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

const fetchFinanceBoost = async () => {
  try {
    const token = localStorage.getItem("jwt_token");
    const res = await axios.get(
      "https://bladeware.masmutdev.id/api/finance-boost",
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
  try {
    const token = localStorage.getItem("jwt_token");
    const { id, price, profit } = produkData.value;

    const res = await axios.post(
      "https://bladeware.masmutdev.id/api/submit-produk",
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
        }, 1000); // Kasih delay sedikit biar alert muncul dulu
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
  }
};

const toggleProduk = async () => {
  if (!showProduk.value) {
    try {
      const token = localStorage.getItem("jwt_token");
      const res = await axios.get(
        "https://bladeware.masmutdev.id/api/get-produk",
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
      "https://bladeware.masmutdev.id/api/get-data-boost",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (data.status === "success") {
      const user = data.data.user;
      const infoUser = data.data.info_user;

      phone_email.value = user.name;
      totaBalanceProfil.value = parseFloat(infoUser.saldo);
      todaysProfit.value = parseFloat(infoUser.komisi);
    } else {
      console.warn("Failed to load profile data:", data.message);
    }
  } catch (err) {
    console.error(
      "Error fetching profile data:",
      err?.response?.data?.message || err.message
    );
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
@keyframes iconSecond {
  0%,
  49.9% {
    transform: translateY(0%);
    filter: brightness(0);
    mask-position: 100% 0;
  }
  50% {
    transform: translateY(0%);
  }
  60% {
    transform: translateY(0%);
    filter: brightness(0);
    mask-position: 100% 0;
  }
  80% {
    filter: brightness(1);
    mask-position: 0 0;
  }
  100% {
    transform: translateY(0%);
    filter: brightness(1);
    mask-position: 0 0;
  }
}

.animate-iconFirst {
  animation: iconFirst 8s linear infinite;
}

.animate-iconSecond {
  animation: iconSecond 5s linear infinite;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-size: 200% 100%;
  mask-position: 100% 0;
  mask-repeat: no-repeat;
}

/* Webkit mask fallback */
@supports (-webkit-mask-image: linear-gradient(to right, black, transparent)) {
  .mask-gradient {
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-size: 200% 100%;
    -webkit-mask-position: 100% 0;
    -webkit-mask-repeat: no-repeat;
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
