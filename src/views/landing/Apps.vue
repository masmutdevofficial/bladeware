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
      class="relative z-10 h-max mt-[30px] flex flex-col items-center md:flex-row md:justify-between w-[95%] lg:w-200 bg-opacity-90"
    >
      <div class="w-full p-4">
        <!-- Tabs -->
        <div
          class="flex justify-around border-b-2 border-gray-200 bg-white py-5 px-5 lg:py-5 lg:px-5 rounded-lg mb-4"
        >
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
        <div v-if="groupedRecords.length">
          <div
            v-for="(group, index) in groupedRecords"
            :key="group.id || index"
            :class="[
              'bg-white mb-4 border-b border-black py-5 px-5 lg:py-5 lg:px-5 rounded-lg',
              group.type === 'combination'
                ? 'mb-4 mt-4 pb-0'
                : index === groupedRecords.length - 1
                ? 'mb-4'
                : '',
              group.type === 'combination' ? 'pb-0' : '',
            ]"
          >
            <!-- Combination Card -->
            <template v-if="group.type === 'combination'">
              <!-- Header status + timestamp sejajar seperti normal -->
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ group.groupDate }}</span>
                <div class="flex flex-col justify-end items-end">
                  <div
                    class="font-semibold"
                    :class="{
                      'text-green-600': group.groupStatus === 0,
                      'text-red-500': group.groupStatus !== 0,
                    }"
                  >
                    {{ group.groupStatus === 0 ? 'Succeeded' : 'Pending' }}
                  </div>
                                    <!-- Ratio -->
                  <div class="text-xs text-gray-500 mt-1">
                    Upload Profit Ratio: {{ group.records.length ? group.records[0].boosted_ratio : '-' }}
                  </div>
                </div>
              </div>

              <div class="divide-y divide-gray-100">
                <div
                  v-for="(record, cidx) in group.records"
                  :key="record.id + '-' + cidx"
                  class="py-3"
                >
                  <!-- Baris gambar + nama -->
                  <div class="flex items-center">
                    <img
                      :alt="record.name + ' logo'"
                      class="w-10 h-10 rounded-full"
                      height="40"
                      :src="
                        record.logo
                          ? 'https://bladeware.masmut.dev/uploads/products/' + record.logo
                          : 'https://storage.googleapis.com/a1aa/image/LWI_Pco9HSAUPXM-ksLR8TY20UASo0LEXcBuNZy9Ja4.jpg'
                      "
                      width="40"
                    />
                    <span class="ml-2 text-lg font-semibold">
                      {{ record.name }}
                    </span>
                  </div>

                  <!-- Unit Price & Profit diletakkan di bawah gambar & nama (seperti normal) -->
                  <div class="flex justify-between mt-2 text-sm">
                    <div>
                      <div class="text-gray-500">Unit Price</div>
                      <div class="font-semibold">{{ record.total }} USDC</div>
                    </div>
                    <div>
                      <div class="text-gray-500">Profit</div>
                      <div class="font-semibold">{{ record.profit }} USDC</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Normal Card -->
            <template v-else>
              <div class="flex items-start justify-between text-sm text-gray-500">
                <span>{{ group.date }}</span>
                <div class="flex flex-col justify-end items-end">
                  <!-- Status dengan warna: hijau untuk Succeeded, merah untuk Pending -->
                  <div
                    class="font-semibold"
                    :class="{
                      'text-green-600': group.status == 0,
                      'text-red-500': group.status != 0 && !(hasPendingData && index === 0),
                    }"
                  >
                    {{
                      group.status == 0
                        ? 'Succeeded'
                        : hasPendingData && index === 0
                        ? ''
                        : 'Pending'
                    }}
                  </div>

                  <!-- Submit button hanya utk index pertama yang pending -->
                  <div
                    v-if="hasPendingData && index === 0"
                    class="flex justify-center mt-4 mb-4"
                  >
                    <button
                      @click="submitProdukPending"
                      class="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600"
                    >
                      Submit
                    </button>
                  </div>

                  <div class="text-xs text-gray-500">
                    Upload Profit Ratio: {{ group.boosted_ratio }}
                  </div>
                </div>
              </div>

              <div class="flex items-center mt-2">
                <img
                  :alt="group.name + ' logo'"
                  class="w-10 h-10 rounded-full"
                  height="40"
                  :src="
                    group.logo
                      ? 'https://bladeware.masmut.dev/uploads/products/' + group.logo
                      : 'https://storage.googleapis.com/a1aa/image/LWI_Pco9HSAUPXM-ksLR8TY20UASo0LEXcBuNZy9Ja4.jpg'
                  "
                  width="40"
                />
                <span class="ml-2 text-lg font-semibold">
                  {{ group.name }}
                </span>
              </div>

              <div class="flex justify-between mt-2 text-sm">
                <div>
                  <div class="text-gray-500">Unit Price</div>
                  <div class="font-semibold">{{ group.total }} USDC</div>
                </div>
                <div>
                  <div class="text-gray-500">Profit</div>
                  <div class="font-semibold">{{ group.profit }} USDC</div>
                </div>
              </div>
            </template>
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
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Tabs
const tabs = ["All", "Success", "Pending"];
const selectedTab = ref("All");

// Alert
const alert = ref({ message: "", type: "success" });
const showAlert = (message, type = "error") => {
  alert.value = { message, type };
  setTimeout(() => (alert.value.message = ""), 3000);
};

// Data
const records = ref([]);
const hasPendingData = ref(false);

const fetchDataBoost = async () => {
  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("No token found");

    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/get-data-boost-apps",
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );

    if (data.status === "success") {
      const info = data.data.info_user;
      if (parseFloat(info.saldo) === 0 && parseFloat(info.saldo_beku) > 0) {
        hasPendingData.value = true;
      } else {
        hasPendingData.value = false;
      }
    }
  } catch (error) {
    console.error("Gagal fetch data boost:", error);
  }
};

const submitProdukPending = async () => {
  try {
    const token = localStorage.getItem("jwt_token");

    const pendingRecord = records.value.find((r) => r.status === 1);
    if (!pendingRecord) {
      showAlert("No pending product found", "error");
      return;
    }

    const { id_products, total: price, profit } = pendingRecord;

    const res = await axios.post(
      "https://bladeware.masmut.dev/api/submit-produk",
      {
        id_products: id_products,
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
      hasPendingData.value = false;
      await fetchDataBoost();
      await fetchRecords();
    } else {
      showAlert(res.data.message, "error");

      if (res.data.message === "Insufficient Balance") {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  } catch (error) {
    const message = error?.response?.data?.message || "Gagal submit produk";
    showAlert(message, "error");

    if (message === "Insufficient Balance") {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    console.error(error);
  }
};

const fetchRecords = async () => {
  try {
    const jwtToken = localStorage.getItem("jwt_token");
    if (!jwtToken) throw new Error("No token found");

    const { data } = await axios.get(
      "https://bladeware.masmut.dev/api/get-apps-records",
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );

    if (data.status === "success") {
      records.value = data.data.map((item) => ({
        id: item.id,
        id_products: item.id_products,
        date: item.created_at,
        status: item.status,
        name: item.product_name,
        boosted_ratio: item.boosted_ratio,
        logo: item.product_image,
        total: item.price,
        profit: item.profit,
        type: item.type,
      }));
    } else if (data.message === "Transaction not found") {
      records.value = [];
    } else {
      console.error("Failed to fetch records:", data.message);
      showAlert(data.message || "Failed to load data", "error");
    }
  } catch (error) {
    console.error("Error:", error?.response?.data?.message || error.message);
    const message = error?.response?.data?.message || "Failed to fetch records";
    if (message !== "Transaction not found") {
      showAlert(message, "error");
    }
  }
};

// Filtering
const filteredRecords = computed(() => {
  if (selectedTab.value === "All") return records.value;
  if (selectedTab.value === "Success")
    return records.value.filter((r) => r.status == 0);
  if (selectedTab.value === "Pending")
    return records.value.filter((r) => r.status != 0);
  return [];
});

// Gabungkan combination ke dalam satu card + siapkan status & timestamp
const groupedRecords = computed(() => {
  const result = [];
  let combinationGroup = [];

  const pushCombinationGroup = () => {
    if (!combinationGroup.length) return;
    // Status grup: jika ada salah satu pending (status != 0) maka group dianggap Pending
    const groupStatus = combinationGroup.some((r) => r.status != 0) ? 1 : 0;
    const groupDate = combinationGroup[0]?.date || "";
    result.push({
      type: "combination",
      records: combinationGroup,
      id: "combination-" + combinationGroup[0].id,
      groupStatus,
      groupDate,
    });
    combinationGroup = [];
  };

  for (const record of filteredRecords.value) {
    if (record.type === "combination") {
      combinationGroup.push(record);
    } else {
      pushCombinationGroup();
      result.push(record);
    }
  }
  pushCombinationGroup();
  return result;
});

// On load
onMounted(() => {
  fetchRecords();
  fetchDataBoost();
});
</script>
