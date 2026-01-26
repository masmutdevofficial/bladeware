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
      <div class="w-full p-4">
        <!-- Tabs -->
        <div class="flex justify-around border-b-2 border-gray-200 mb-4">
          <div
            v-for="tab in tabs"
            :key="tab"
            @click="selectedTab = tab"
            :class="[
              'font-semibold pb-2 cursor-pointer',
              selectedTab === tab
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500',
            ]"
          >
            {{ tab }}
          </div>
        </div>

        <!-- Transaction List -->
        <div v-if="filteredRecords.length">
          <div
            v-for="(record, index) in filteredRecords"
            :key="index"
            class="mb-4"
          >
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ record.created_at }}</span>
              <div class="flex flex-col items-end justify-end">
                <div
                  class="font-semibold text-lg"
                  :class="{
                    'text-yellow-500': record.status == 0,
                    'text-green-600': record.status == 1,
                    'text-red-500': record.status == 2,
                  }"
                >
                  {{
                    record.status == 0
                      ? 'In Process'
                      : record.status == 1
                      ? 'Approved'
                      : record.status == 2
                      ? 'Rejected'
                      : '-'
                  }}
                </div>
              </div>
            </div>

            <!-- CONTENT ROW -->
            <!-- Deposit -->
            <div
              v-if="selectedTab === 'Deposit'"
              class="flex items-center justify-between"
            >
              <span class="text-green-600 text-lg font-semibold">
                {{ record.category_deposit || 'Deposit' }}
              </span>

              <div class="flex flex-col items-center mt-2">
                <div class="mt-2 text-sm text-right text-gray-500">Amount</div>
                <div class="font-semibold text-right">
                  {{ formatAmount(record.amount) }}
                </div>
              </div>
            </div>

            <!-- Withdrawal: kiri (Network & Wallet) | kanan (Currency & Amount) -->
            <div v-else class="grid grid-cols-2 gap-4 items-start">
              <!-- Kiri -->
              <div class="flex flex-col">
              </div>

              <!-- Kanan -->
              <div class="flex flex-col items-end">
                <div class="mt-2 text-sm text-right text-gray-500">Amount</div>
                <div class="font-semibold text-right">
                  {{ formatAmount(record.amount) }}
                </div>
              </div>
            </div>

            <hr class="text-gray-300 my-4" />
          </div>
        </div>

        <!-- No Data -->
        <div
          v-else
          class="flex flex-col justify-center items-center text-center text-gray-400 py-10"
        >
          <img src="@/assets/img/default.png" style="width: 150px" />
          <p>No Data Available</p>
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
      <div class="mb-3">
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
          <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"/>
          <path d="M9 8l6 8" />
          <path d="M15 8l-6 8" />
        </svg>
      </div>
      <p>{{ alert.message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Tabs
const tabs = ['Deposit', 'Withdrawal']
const selectedTab = ref('Deposit')

// Alert
const alert = ref({ message: '', type: 'success' })
const showAlert = (message, type = 'error') => {
  alert.value = { message, type }
  setTimeout(() => (alert.value.message = ''), 3000)
}

// Data
const deposits = ref([])
const withdrawals = ref([])

const formatAmount = (value) => {
  const num = Number(value)
  if (Number.isNaN(num)) return value ?? '-'
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const fetchFinance = async () => {
  try {
    const jwtToken = localStorage.getItem('jwt_token')
    if (!jwtToken) throw new Error('No token found')

    const { data } = await axios.get(
      'https://backend.bladewaretech.com/api/get-finance',
      { headers: { Authorization: `Bearer ${jwtToken}` } }
    )

    if (data.status === 'success') {
      deposits.value = data.data.deposits || []
      withdrawals.value = data.data.withdrawals || []

      // Welcome Bonus harus MUNCUL DI BAWAH Deposit.
      const wb = data?.data?.welcome_bonus
      const amount = Number(wb?.amount ?? 0)
      const alreadyHasWB = deposits.value.some(d => d?.category_deposit === 'Welcome Bonus')

      if (amount > 0 && !alreadyHasWB) {
        // push -> item ada di paling bawah daftar Deposit
        deposits.value.push({
          id: null,
          created_at: wb?.last_awarded_at || new Date().toISOString(),
          status: 1,
          network_address: '-',
          currency: 'USDC',
          wallet_address: '-',
          amount: amount,
          category_deposit: 'Welcome Bonus',
        })
      }
    } else if (data.message === 'Transaction not found') {
      deposits.value = []
      withdrawals.value = []
    } else {
      showAlert(data.message || 'Failed to load data', 'error')
    }
  } catch (error) {
    const message = error?.response?.data?.message || error.message
    if (message !== 'Transaction not found') {
      showAlert(message, 'error')
    }
  }
}

// Computed untuk tab terpilih
const filteredRecords = computed(() => {
  return selectedTab.value === 'Deposit' ? deposits.value : withdrawals.value
})

onMounted(() => {
  fetchFinance()
})
</script>
