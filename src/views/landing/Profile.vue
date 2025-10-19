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
      class="relative z-10 bg-white h-max mt-[30px] py-5 px-5 lg:py-5 lg:px-5 rounded-lg flex flex-col items-center md:flex-row md:justify-between w-[95%] lg:w-200 bg-opacity-90"
    >
      <div class="flex flex-col justify-center w-full">
        <div class="flex items-center mb-4" v-if="user">
          <img
            alt="User avatar"
            class="w-12 h-12 rounded-full"
            src="@/assets/img/tx1.png"
          />
          <div class="ml-4">
            <p class="text-gray-700 font-semibold">Hi, {{ user.name }}</p>
            <p class="text-gray-500 text-sm">
              Phone Number:
              <span class="text-orange-500">{{ user.phone_email || "-" }}</span>
            </p>
            <p class="text-gray-500 text-sm">
              Email:
              <span class="text-orange-500">{{ user.email_only || "-" }}</span>
            </p>
            <p class="text-gray-500 text-sm">
              Referral:
              <span class="text-orange-500 text-sm">{{
                user.referral || "-"
              }}</span>
            </p>
          </div>
        </div>

        <!-- Credibility Progress -->
        <div class="flex items-center w-full" v-if="user">
          <p class="text-gray-500 text-sm w-20">Credibility</p>
          <div
            class="relative flex-1 bg-gray-200 rounded-full h-4 overflow-hidden"
          >
            <div
              class="progress-bar h-4 rounded-full text-white text-xs font-bold flex items-center justify-center bg-orange-500"
              :style="{ width: progress + '%' }"
            >
              {{ progress }}%
            </div>
          </div>
        </div>

        <!-- Saldo & Komisi -->
        <div class="flex justify-around items-center mb-4 mt-4" v-if="infoUser">
          <div class="text-center flex flex-col justify-center items-center">
            <p class="text-orange-500">Total Balance</p>
            <p class="text-gray-700">{{ infoUser.saldo }} USDC</p>
          </div>
          <hr class="bg-gray-300 w-[1px] h-[30px]" />
          <div class="text-center flex flex-col justify-center items-center">
            <p class="text-orange-500">Total Profit</p>
            <p class="text-gray-700">
              {{ (Number(infoUser.komisi) + 15).toFixed(2) }} USDC
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <!-- Wallet Address (Trigger) -->
          <div
            class="flex justify-between items-center cursor-pointer rounded-lg"
            @click="toggle('wallet')"
          >
            <div class="flex items-center">
              <IconMapPin class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Wallet Address</p>
            </div>
            <p
              class="flex items-center"
              :class="isWalletBound ? 'text-green-500' : 'text-red-500'"
            >
              <span v-if="!isWalletBound">Not Bound</span>
              <span v-else>Bound</span>
              <IconChevronRight class="text-gray-500 w-5 h-5" />
            </p>
          </div>

          <!-- Modal Wallet Binding -->
          <transition name="fade">
            <div
              v-if="showWalletForm"
              class="fixed inset-0 h-screen flex items-center justify-center bg-black/50"
              @click="toggle('wallet')"
            >
              <div
                class="bg-white shadow-md rounded-lg p-6 w-96 relative"
                @click.stop
              >
                <h2 class="text-orange-500 text-lg font-semibold mb-4">
                  Wallet Binding
                </h2>

                <!-- Form Wallet -->
                <div class="mb-4">
                  <!-- Select Withdrawal Network -->
                  <div
                    class="border-b-[1px] border-b-gray-200 py-4 flex justify-between items-center text-gray-500 mb-2 cursor-pointer"
                    @click="toggleDropdown('network')"
                  >
                    <span>{{
                      selectedNetwork || "Select Your Withdrawal Network"
                    }}</span>
                    <IconChevronRight
                      v-if="!showNetworkDropdown"
                      class="text-gray-500 w-5 h-5"
                    />
                    <IconChevronDown
                      v-if="showNetworkDropdown"
                      class="text-gray-500 w-5 h-5"
                    />
                  </div>
                  <div
                    v-if="showNetworkDropdown"
                    class="bg-gray-100 flex flex-col justify-center items-center p-2 rounded-md"
                  >
                    <p
                      v-for="network in networks"
                      :key="network"
                      class="py-2 px-3 cursor-pointer hover:bg-gray-200 hover:w-full hover:text-center text-gray-500"
                      @click="selectNetwork(network)"
                    >
                      {{ network }}
                    </p>
                  </div>

                  <!-- Select Withdrawal Currency -->
                  <div
                    class="border-b-[1px] border-b-gray-200 py-4 flex justify-between items-center text-gray-500 mb-2 cursor-pointer"
                    @click="toggleDropdown('currency')"
                  >
                    <span>{{
                      selectedCurrency || "Select Your Withdrawal Currency"
                    }}</span>
                    <IconChevronRight
                      v-if="!showCurrencyDropdown"
                      class="text-gray-500 w-5 h-5"
                    />
                    <IconChevronDown
                      v-if="showCurrencyDropdown"
                      class="text-gray-500 w-5 h-5"
                    />
                  </div>
                  <div
                    v-if="showCurrencyDropdown"
                    class="bg-gray-100 flex flex-col justify-center items-center p-2 rounded-md"
                  >
                    <p
                      v-for="currency in currencies"
                      :key="currency"
                      class="py-2 px-3 cursor-pointer hover:bg-gray-200 hover:w-full hover:text-center text-gray-500"
                      @click="selectCurrency(currency)"
                    >
                      {{ currency }}
                    </p>
                  </div>

                  <!-- Wallet Address Input -->
                  <input
                    type="text"
                    v-model="walletAddress"
                    class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    placeholder="Enter Your Wallet Address"
                  />
                </div>

                <!-- Tombol Bind -->
                <button
                  class="bg-orange-500 text-white w-full py-2 rounded-md mb-4"
                  :class="{ 'opacity-50 cursor-not-allowed': walletAddress }"
                  :disabled="!!walletAddress"
                  @click="walletAddress ? null : bindWallet"
                >
                  Bind
                </button>

                <!-- Informasi -->
                <div class="text-gray-500 text-sm">
                  <p class="mb-1">Important Reminder</p>
                  <ul class="list-disc list-inside">
                    <li>Please enter your wallet address correctly</li>
                    <li>
                      Contact customer service to change after binding wallet
                      address
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <!-- Withdrawal -->
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggle('wd')"
          >
            <div class="flex items-center">
              <IconWallet class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Withdrawal</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </div>

          <!-- Modal Withdrawal Form -->
          <transition name="fade">
            <div
              v-if="showWdForm"
              class="fixed inset-0 h-screen flex items-center justify-center bg-black/50"
              @click="toggle('wd')"
            >
              <div
                class="bg-white shadow-md rounded-lg p-6 w-96 relative"
                @click.stop
              >
                <h2 class="text-orange-500 text-lg font-semibold mb-4">
                  Withdrawal
                </h2>

                <!-- Form Wallet -->
                <div class="mb-4">
                  <!-- Wallet Address Input -->
                  <input type="hidden" v-model="wdWallet" />
                  <!-- Amount Input -->
                  <input
                    type="number"
                    v-model="amount"
                    class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md mb-4"
                    placeholder="Amount"
                  />
                  <!-- LOGIN PASSWORD -->
                  <div class="relative mb-0">
                    <input
                      v-model="wdPassword"
                      :type="showLoginPassword ? 'text' : 'password'"
                      placeholder="Enter your password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="wdPassword"
                      type="button"
                      @click="wdPassword = ''"
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
                </div>

                <!-- Tombol Bind -->
                <button
                  class="bg-orange-500 text-white w-full py-2 rounded-md mb-4"
                  @click="requestWithdrawal"
                >
                  Withdrawal
                </button>

                <!-- Informasi -->
                <div class="text-gray-500 text-sm">
                  <p class="mb-1">Important Reminder</p>
                  <ul class="list-disc list-inside">
                    <li>You will receive the withdrawal within an hour</li>
                    <li>
                      Contact customer service if you forget your password
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <!-- Change Login Password -->
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggle('loginPassword')"
          >
            <div class="flex items-center">
              <IconLock class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Change Login Password</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </div>

          <!-- Modal Change Login Password -->
          <transition name="fade">
            <div
              v-if="showChangeLoginPassword"
              class="fixed inset-0 h-screen flex items-center justify-center bg-black/50"
              @click="toggle('loginPassword')"
            >
              <div
                class="bg-white shadow-md rounded-lg p-6 w-96 relative"
                @click.stop
              >
                <h2 class="text-orange-500 text-lg font-semibold mb-4">
                  Change Login Password
                </h2>

                <!-- Form Wallet -->
                <div class="mb-4">
                  <!-- OLD Password -->
                  <div class="relative mb-4">
                    <input
                      v-model="oldLoginPassword"
                      :type="showOldLoginPassword ? 'text' : 'password'"
                      placeholder="Enter your old password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="oldLoginPassword"
                      type="button"
                      @click="oldLoginPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="showOldLoginPassword = !showOldLoginPassword"
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showOldLoginPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                  <!-- NEW Password -->
                  <div class="relative mb-4">
                    <input
                      v-model="newLoginPassword"
                      :type="showNewLoginPassword ? 'text' : 'password'"
                      placeholder="Enter your new password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="newLoginPassword"
                      type="button"
                      @click="newLoginPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="showNewLoginPassword = !showNewLoginPassword"
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showNewLoginPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                  <!-- Retype Password -->
                  <div class="relative mb-0">
                    <input
                      v-model="retypeLoginPassword"
                      :type="showRetypeLoginPassword ? 'text' : 'password'"
                      placeholder="Re-Enter your new password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="retypeLoginPassword"
                      type="button"
                      @click="retypeLoginPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="
                        showRetypeLoginPassword = !showRetypeLoginPassword
                      "
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showRetypeLoginPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                </div>

                <!-- Tombol Modify -->
                <button
                  class="bg-orange-500 text-white w-full py-2 rounded-md mb-4"
                  @click="updateLoginPassword"
                >
                  Modify
                </button>

                <!-- Informasi -->
                <div class="text-gray-500 text-sm">
                  <p class="mb-1">Important Reminder</p>
                  <ul class="list-disc list-inside">
                    <li>Please remember your password</li>
                    <li>
                      Contact customer service if you forget your old password
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <!-- Change Withdrawal Password -->
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggle('withdrawPassword')"
          >
            <div class="flex items-center">
              <IconLock class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Change Withdrawal Password</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </div>

          <!-- Modal Change Withdrawal Password -->
          <transition name="fade">
            <div
              v-if="showChangeWithdrawalPassword"
              class="fixed inset-0 h-screen flex items-center justify-center bg-black/50"
              @click="toggle('withdrawPassword')"
            >
              <div
                class="bg-white shadow-md rounded-lg p-6 w-96 relative"
                @click.stop
              >
                <h2 class="text-orange-500 text-lg font-semibold mb-4">
                  Change Withdrawal Password
                </h2>

                <!-- Form Wallet -->
                <div class="mb-4">
                  <!-- OLD Password -->
                  <div class="relative mb-4">
                    <input
                      v-model="oldWdPassword"
                      :type="showOldWdPassword ? 'text' : 'password'"
                      placeholder="Enter your old password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="oldWdPassword"
                      type="button"
                      @click="oldWdPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="showOldWdPassword = !showOldWdPassword"
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showOldWdPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                  <!-- NEW Password -->
                  <div class="relative mb-4">
                    <input
                      v-model="newWdPassword"
                      :type="showNewWdPassword ? 'text' : 'password'"
                      placeholder="Enter your new password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="newWdPassword"
                      type="button"
                      @click="newWdPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="showNewWdPassword = !showNewWdPassword"
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showNewWdPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                  <!-- Retype Password -->
                  <div class="relative mb-0">
                    <input
                      v-model="retypeWdPassword"
                      :type="showRetypeWdPassword ? 'text' : 'password'"
                      placeholder="Re-Enter your new password"
                      class="border-b-[1px] border-b-gray-200 p-2 w-full rounded-md"
                    />
                    <button
                      v-if="retypeWdPassword"
                      type="button"
                      @click="retypeWdPassword = ''"
                      class="absolute right-10 top-3 text-gray-500"
                    >
                      <IconX class="w-5 h-5 text-gray-300" />
                    </button>
                    <button
                      type="button"
                      @click="showRetypeWdPassword = !showRetypeWdPassword"
                      class="absolute right-3 top-3 text-gray-400"
                    >
                      <IconEye v-if="showRetypeWdPassword" />
                      <IconEyeClosed v-else />
                    </button>
                  </div>
                </div>

                <!-- Tombol Modify -->
                <button
                  class="bg-orange-500 text-white w-full py-2 rounded-md mb-4"
                  @click="updateWithdrawalPassword"
                >
                  Modify
                </button>

                <!-- Informasi -->
                <div class="text-gray-500 text-sm">
                  <p class="mb-1">Important Reminder</p>
                  <ul class="list-disc list-inside">
                    <li>Please remember your password</li>
                    <li>
                      Contact customer service if you forget your old password
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>

          <!-- Apps Records -->
          <router-link
            class="flex justify-between items-center cursor-pointer"
            to="/apps-records"
          >
            <div class="flex items-center">
              <IconDashboard class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Apps Records</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </router-link>

          <!-- Financial Details -->
          <router-link
            class="flex justify-between items-center cursor-pointer"
            to="/financial-details"
          >
            <div class="flex items-center">
              <IconChartPie2 class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Financial Details</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </router-link>

          <!-- Membership Level -->
          <router-link
            class="flex justify-between items-center cursor-pointer"
            to="/membership"
          >
            <div class="flex items-center">
              <IconDiamond class="text-gray-500 w-5 h-5" />
              <p class="ml-2 text-gray-700">Membership Level</p>
            </div>
            <IconChevronRight class="text-gray-500 w-5 h-5" />
          </router-link>
        </div>
        <router-link
          class="mt-4 w-full text-center bg-orange-500 text-white py-2 rounded-lg cursor-pointer"
          to="/boost"
        >
          {{ $t("text-4") }}
        </router-link>
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

      <!-- Pesan Alert -->
      <p>{{ alert.message }}</p>
    </div>
  </div>
</template>
<script setup>
import {
  IconMapPin,
  IconWallet,
  IconLock,
  IconDashboard,
  IconChartPie2,
  IconDiamond,
  IconChevronRight,
  IconChevronDown,
  IconX,
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// State
const showLoginPassword = ref(false);
const showNewLoginPassword = ref(false);
const showOldLoginPassword = ref(false);
const showRetypeLoginPassword = ref(false);
const showNewWdPassword = ref(false);
const showOldWdPassword = ref(false);
const showRetypeWdPassword = ref(false);

const user = ref(null);
const infoUser = ref(null);
const progress = ref(0);

const alert = ref({
  message: "",
  type: "success",
});

const showWalletForm = ref(false);
const showWdForm = ref(false);
const showChangeLoginPassword = ref(false);
const showChangeWithdrawalPassword = ref(false);

const walletAddress = ref("");
const wdWallet = ref("");
const amount = ref("");
const wdPassword = ref("");

const oldLoginPassword = ref("");
const newLoginPassword = ref("");
const retypeLoginPassword = ref("");

const oldWdPassword = ref("");
const newWdPassword = ref("");
const retypeWdPassword = ref("");

const showNetworkDropdown = ref(false);
const showCurrencyDropdown = ref(false);

const selectedNetwork = ref(null);
const selectedCurrency = ref(null);

const networks = ["ERC-20", "SOL", "Polygon", "BTC"];
const currencies = ["Paypal USD", "USDC", "ETH", "BTC"];

const isWalletBound = ref(false);

// Helpers
const showAlert = (message, type = "error") => {
  alert.value = { message, type };
  setTimeout(() => (alert.value.message = ""), 3000);
};

// Fetch Data
const getProfileData = async () => {
  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("No token found");

    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/get-profile-data",
      {
        headers: { Authorization: jwtToken },
      }
    );

    if (data.status === "success") {
      user.value = data.data.user;
      infoUser.value = data.data.info_user;
      progress.value = data.data.user.credibility || 0;
    } else {
      console.error("Failed to fetch profile data:", data.message);
    }
  } catch (error) {
    console.error("Error:", error?.response?.data?.message || error.message);
  }
};

const getBindWalletData = async () => {
  try {
    const jwtToken = localStorage.getItem("jwt_token");
    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/get-bind-wallet",
      {
        headers: { Authorization: `${jwtToken}` },
      }
    );

    if (data.status === "success" && data.data) {
      const walletData = data.data.user;
      walletAddress.value = walletData.wallet_address || "";
      selectedNetwork.value = walletData.network_address || "";
      selectedCurrency.value = walletData.currency || "";
      wdWallet.value = walletData.wallet_address || "";
      if (
        walletAddress.value &&
        selectedNetwork.value &&
        selectedCurrency.value &&
        wdWallet.value
      ) {
        isWalletBound.value = true;
      }
    }
  } catch (error) {
    console.error("Fetch wallet data error:", error);
  }
};

const bindWallet = async () => {
  if (
    !walletAddress.value ||
    !selectedNetwork.value ||
    !selectedCurrency.value
  ) {
    showAlert("Please fill in all required fields!");
    return;
  }

  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("JWT Token not found!");

    const formData = {
      wallet_address: walletAddress.value,
      network: selectedNetwork.value,
      currency: selectedCurrency.value,
    };

    const { data } = await axios.post(
      "https://bladeware.masmut.dev/api/bind-wallet",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (data.status === "success") {
      showAlert("Wallet successfully bound!", "success");
      showWalletForm.value = false;
    } else {
      showAlert(data.message || "Failed to bind wallet.");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error || // Tambahan ini
      error.message ||
      "Unknown error";
    console.error("Bind Wallet error:", errorMessage);
    showAlert(`Error Bind Wallet: ${errorMessage}`, "error");
  }
};

const requestWithdrawal = async () => {
  if (!wdWallet.value || !wdPassword.value || !amount.value) {
    showAlert("Please fill in all required fields!");
    return;
  }

  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("JWT Token not found!");

    const formData = {
      wallet_address: walletAddress.value,
      network: selectedNetwork.value,
      currency: selectedCurrency.value,
      withdrawal_password: wdPassword.value,
      amount: amount.value,
    };

    const { data } = await axios.post(
      "https://bladeware.masmut.dev/api/request-withdrawal",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (data.status === "success") {
      showAlert("Withdrawal Request Successfully!", "success");
      showWdForm.value = false;
    } else {
      showAlert(data.message || "Failed to Withdrawal Request.");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error || // Tambahan ini
      error.message ||
      "Unknown error";
    console.error("Withdrawal Request error:", errorMessage);
    showAlert(`Error Withdrawal: ${errorMessage}`, "error");
  }
};

const updateLoginPassword = async () => {
  if (
    !oldLoginPassword.value ||
    !newLoginPassword.value ||
    !retypeLoginPassword.value
  ) {
    showAlert("Please fill in all required fields!");
    return;
  }

  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("JWT Token not found!");

    const formData = {
      old_password: oldLoginPassword.value,
      new_password: newLoginPassword.value,
      retype_password: retypeLoginPassword.value,
    };

    const { data } = await axios.post(
      "https://bladeware.masmut.dev/api/change-login-password",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (data.status === "success") {
      showAlert("Login Password successfully change!", "success");
      showWalletForm.value = false;
    } else {
      showAlert(data.message || "Failed to change login password.");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error || // Tambahan ini
      error.message ||
      "Unknown error";
    console.error("Change login password error:", errorMessage);
    showAlert(`Error Change login password: ${errorMessage}`, "error");
  }
};

const updateWithdrawalPassword = async () => {
  if (!oldWdPassword.value || !newWdPassword.value || !retypeWdPassword.value) {
    showAlert("Please fill in all required fields!");
    return;
  }

  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("JWT Token not found!");

    const formData = {
      old_password: oldWdPassword.value,
      new_password: newWdPassword.value,
      retype_password: retypeWdPassword.value,
    };

    const { data } = await axios.post(
      "https://bladeware.masmut.dev/api/change-withdrawal-password",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (data.status === "success") {
      showAlert("Withdrawal Password successfully change!", "success");
      showWalletForm.value = false;
    } else {
      showAlert(data.message || "Failed to change withdrawal password.");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error || // Tambahan ini
      error.message ||
      "Unknown error";
    console.error("Change withdrawal password error:", errorMessage);
    showAlert(`Error Change withdrawal password: ${errorMessage}`, "error");
  }
};

// UI Toggle
const toggleDropdown = (type) => {
  if (type === "network") {
    showNetworkDropdown.value = !showNetworkDropdown.value;
    showCurrencyDropdown.value = false;
  } else if (type === "currency") {
    showCurrencyDropdown.value = !showCurrencyDropdown.value;
    showNetworkDropdown.value = false;
  }
};

const selectNetwork = (network) => {
  selectedNetwork.value = network;
  showNetworkDropdown.value = false;
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  showCurrencyDropdown.value = false;
};

const toggle = (target) => {
  switch (target) {
    case "wallet":
      showWalletForm.value = !showWalletForm.value;
      break;
    case "wd":
      showWdForm.value = !showWdForm.value;
      break;
    case "loginPassword":
      showChangeLoginPassword.value = !showChangeLoginPassword.value;
      break;
    case "withdrawPassword":
      showChangeWithdrawalPassword.value = !showChangeWithdrawalPassword.value;
      break;
  }
};

onMounted(() => {
  getProfileData();
  getBindWalletData();
});
</script>
<style scoped>
/* Striped moving background */
.progress-bar {
  background: repeating-linear-gradient(
    45deg,
    #ff9c1a,
    #ff9c1a 10px,
    #ffb74d 10px,
    #ffb74d 20px
  );
  background-size: 80px 50px; /* Ukuran pola lebih besar untuk efek seamless */
  animation: move-stripes 5s linear infinite;
}

/* Animasi pergerakan yang lebih mulus */
@keyframes move-stripes {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 50px 0; /* Bergerak lebih jauh untuk efek terus menerus */
  }
  100% {
    background-position: 100px 0; /* Bergerak lebih jauh untuk efek terus menerus */
  }
}
/* Animasi Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
