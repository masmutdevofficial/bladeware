<template>
  <div
    class="flex flex-col justify-center items-center p-2 lg:p-15 py-5 pt-0 antialiased"
  >
    <div class="relative text-center px-2 lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-62") }}
      </h2>
      <h1 class="text-[20px] lg:text-[35px] font-bold leading-tight">
        {{ $t("text-63") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[16px] lg:px-[35%] mt-2 tracking-tighter leading-[18px] mb-4"
      >
        {{ $t("text-64") }}
      </p>
    </div>
    <div class="flex flex-col md:flex-wrap md:flex-row gap-6 lg:px-[10%] mt-3">
      <!-- Bagian atas: 2 kolom dengan "App Growth Sprint" lebih besar -->
      <div class="flex-2 lg:w-[70%]">
        <div
          class="relative bg-gray-100 p-6 pt-0 lg:pt-6 pb-0 rounded-lg shadow-md flex flex-col md:flex-row"
        >
          <div class="flex-1 order-2 lg:order-1 mb-5 lg:mb-0">
            <div
              class="flex justify-center lg:justify-start items-center lg:items-start"
            >
              <img
                src="@/assets/img/rocket.png"
                style="width: 30px"
                class="mb-6"
                alt=""
              />
            </div>

            <h2
              class="text-sm lg:text-xl text-center lg:text-start font-bold mb-2"
            >
              {{ $t("text-65") }}
            </h2>
            <p
              class="text-gray-600 text-[12px] lg:text-[14px] text-start tracking-tight leading-tight"
            >
              {{ $t("text-66") }}
            </p>
          </div>
          <img
            alt="Smartphone displaying app charts"
            class="relative bottom-[0] right-[0] order-1 lg:order-2 mb-4 lg:mb-0"
            height="250"
            src="@/assets/img/app-growth-sprint.png"
            width="300"
          />
        </div>
      </div>

      <div class="flex-1 lg:w-[30%]">
        <div
          class="bg-gray-100 p-6 pb-4 lg:pb-10 rounded-lg shadow-md text-center"
        >
          <div
            class="flex justify-center lg:justify-start items-center lg:items-start"
          >
            <img
              src="@/assets/img/rocket.png"
              style="width: 30px"
              class="mb-6"
              alt=""
            />
          </div>

          <h2
            class="text-sm lg:text-xl text-center lg:text-start font-bold mb-2"
          >
            {{ $t("text-67") }}
          </h2>
          <p class="text-gray-700 text-[12px] lg:text-[14px] text-start">
            {{ $t("text-68") }}
          </p>
        </div>
      </div>

      <!-- Bagian bawah: Flexbox untuk 3 item sejajar -->
      <div class="flex flex-col md:flex-row gap-6 w-full">
        <div class="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <div
            class="flex justify-center lg:justify-start items-center lg:items-start"
          >
            <img
              src="@/assets/img/check-file.png"
              style="width: 30px"
              class="mb-6"
              alt=""
            />
          </div>
          <h2
            class="text-sm lg:text-xl text-center lg:text-start font-bold mb-2"
          >
            {{ $t("text-69") }}
          </h2>
          <p class="text-gray-700 text-[12px] lg:text-[14px] text-start">
            {{ $t("text-70") }}
          </p>
        </div>

        <div class="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <div
            class="flex justify-center lg:justify-start items-center lg:items-start"
          >
            <img
              src="@/assets/img/icon_search.png"
              style="width: 30px"
              class="mb-6"
              alt=""
            />
          </div>
          <h2
            class="text-sm lg:text-xl text-center lg:text-start font-bold mb-2"
          >
            {{ $t("text-71") }}
          </h2>
          <p class="text-gray-700 text-[12px] lg:text-[14px]">
            {{ $t("text-72") }}
          </p>
        </div>

        <div
          class="flex-1 bg-[#ff961b] p-6 rounded-lg shadow-md text-white flex flex-col justify-between"
        >
          <div>
            <div
              class="flex justify-center lg:justify-start items-center lg:items-start"
            >
              <img
                src="@/assets/img/arrow-dot-right.png"
                style="width: 30px"
                class="mb-3"
                alt=""
              />
            </div>
            <h2
              class="text-sm lg:text-xl text-center lg:text-start font-bold mb-2"
            >
              {{ $t("text-73") }}
            </h2>
            <p class="text-[12px] lg:text-[14px]">
              {{ $t("text-74") }}
            </p>
          </div>
          <div
            class="flex justify-center lg:justify-start items-center lg:items-start"
          >
            <button
              @click="handleButtonClick"
              class="bg-white relative z-10 cursor-pointer text-[#333] py-2 px-4 rounded-lg mt-4 w-[160px]"
            >
              {{ $t("text-4") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleButtonClick = () => {
  const token = localStorage.getItem("jwt_token");
  if (!token) {
    router.push("/login");
  } else {
    router.push("/boost");
  }
};
</script>
