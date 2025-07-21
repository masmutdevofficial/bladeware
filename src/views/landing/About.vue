<template>
  <div
    class="flex flex-col justify-center items-center p-[5px] lg:p-15 pt-0 lg:py-5 antialiased"
  >
    <div class="relative text-center lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-101") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight">
        {{ $t("text-102") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[14px] text-start lg:text-center leading-tight px-[10px] lg:px-[30%] mt-2 tracking-tighter mb-4"
      >
        {{ $t("text-103") }}
      </p>
    </div>
  </div>
  <div
    class="flex flex-col lg:flex-row justify-between items-center gap-8 bg-gray-100 lg:px-[12%]"
  >
    <!-- Keterangan (Sebelah Kiri) -->
    <div class="text-center lg:text-left lg:w-3/4 py-10 lg:py-20 lg:pr-40">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg text-start lg:text-center font-normal leading-tight mb-2 px-4 lg:px-0"
      >
        {{ $t("text-104") }}
      </h2>
      <h1
        class="text-lg lg:text-3xl font-bold leading-tight text-start lg:text-center px-4 lg:px-0"
      >
        {{ $t("text-105") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight px-4 lg:px-0 mt-2 tracking-tighter mb-4"
      >
        {{ $t("text-106") }}
      </p>
    </div>

    <!-- Gambar (Sebelah Kanan) -->
    <div class="relative w-60 lg:w-1/2 flex justify-center">
      <!-- Background Image -->
      <img
        src="@/assets/img/line.454ff610.svg"
        alt="Background Line"
        class="absolute z-1 inset-0 w-full h-full"
      />
      <!-- Gambar Utama -->
      <img
        src="@/assets/img/about1.jpg"
        alt="About Us"
        class="relative z-2 w-full lg:w-70 lg:h-80 rounded-[25px] mb-5 lg:mb-0 shadow-lg"
      />
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center p-[5px] lg:p-15 pt-10 lg:pt-0 lg:py-5 antialiased"
  >
    <div class="relative text-center px-10 lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-107") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight mb-3">
        {{ $t("text-108") }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-109") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-110") }}
          </p>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-128") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-111") }}
          </p>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-112") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-113") }}
          </p>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-114") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-115") }}
          </p>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-116") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-117") }}
          </p>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2 class="text-xl text-start text-gray-800 font-bold mb-2">
            {{ $t("text-118") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-119") }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center p-[5px] lg:p-15 pt-10 lg:pt-0 lg:py-5 antialiased"
  >
    <div class="relative text-center px-10 lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-120") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight mb-3">
        {{ $t("text-121") }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2
            class="text-sm lg:text-lg text-start text-gray-800 font-bold mb-2"
          >
            {{ $t("text-122") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-123") }}
          </p>
          <img src="@/assets/img/mamstartup.png" class="w-24 h-4 mt-3" alt="" />
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2
            class="text-sm lg:text-lg text-start text-gray-800 font-bold mb-2"
          >
            {{ $t("text-124") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-125") }}
          </p>
          <img src="@/assets/img/przy.png" class="w-16 h-13 mt-3 ml-3" alt="" />
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h2
            class="text-sm lg:text-lg text-start text-gray-800 font-bold mb-2"
          >
            {{ $t("text-126") }}
          </h2>
          <p
            class="text-gray-500 text-[12px] lg:text-[14px] text-start leading-tight"
          >
            {{ $t("text-127") }}
          </p>
          <img src="@/assets/img/przy.png" class="w-16 h-13 mt-3 ml-3" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
