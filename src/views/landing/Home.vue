<template>
  <div
    class="flex flex-col justify-center items-center p-[5px] lg:p-15 pt-0 lg:py-5 antialiased"
  >
    <div class="relative text-center lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-1") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight">
        {{ $t("text-2") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[16px] px-[10px] lg:px-[30%] mt-2 tracking-tighter leading-[18px] mb-4"
      >
        {{ $t("text-3") }}
      </p>
      <div class="flex justify-center items-center mt-10">
        <button
          @click="handleButtonClick"
          class="bg-[#ff961b] absolute cursor-pointer hover:scale-110 transition-transform duration-500 inline-block text-white text-sm py-4 px-12 rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)] w-70 lg:w-45"
        >
          {{ $t("text-4") }}
        </button>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mt-2">
    <img
      src="@/assets/img/index1.png"
      class="w-100"
      style="width: 1000px; height: 100%"
      alt=""
    />
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 px-[15%]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="flex justify-center items-center"
    >
      <img :src="image" alt="Gallery Image" class="w-[80px]" />
    </div>
  </div>
  <div class="hidden lg:flex justify-center items-center my-10">
    <div class="w-[1000px] h-[2px] bg-gray-300"></div>
  </div>
  <div
    class="flex flex-col justify-center items-center p-2 lg:p-15 py-5 lg:py-0 pt-0 antialiased"
  >
    <div class="relative text-center px-2 lg:px-[10%]">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] mt-10 lg:mt-4 leading-tight mb-2"
      >
        {{ $t("text-5") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight">
        {{ $t("text-6") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[16px] px-[0%] mt-2 tracking-tighter leading-[18px] mb-4"
      >
        {{ $t("text-7") }}
      </p>
    </div>
    <div class="p-4 lg:px-25 grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Application Growth Review -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing growth review"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-1.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-8") }}
        </h2>
        <p class="mt-2 w-full text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-9") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-10") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-11") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-12") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-13") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-14") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-15") }}
          </li>
        </ul>
      </div>
      <!-- App store Boost -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing app store boost"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-2.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-12") }}
        </h2>
        <p class="mt-2 text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-16") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-17") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-18") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-19") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-20") }}
          </li>
        </ul>
      </div>
      <!-- Ratings and comments Boost -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing ratings and comments boost"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-3.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-21") }}
        </h2>
        <p class="mt-2 text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-22") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-23") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-24") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-purple-500 mr-2" />

            {{ $t("text-25") }}
          </li>
        </ul>
      </div>
      <!-- Application channel Boost -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing application channel boost"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-4.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-26") }}
        </h2>
        <p class="mt-2 text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-27") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-red-500 mr-2" />

            {{ $t("text-28") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-red-500 mr-2" />

            {{ $t("text-29") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-red-500 mr-2" />

            {{ $t("text-30") }}
          </li>
        </ul>
      </div>
      <!-- Performance Marketing -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing Performance Marketing"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-5.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-31") }}
        </h2>
        <p class="mt-2 text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-32") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-yellow-500 mr-2" />

            {{ $t("text-33") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-yellow-500 mr-2" />

            {{ $t("text-34") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-yellow-500 mr-2" />

            {{ $t("text-35") }}
          </li>
        </ul>
      </div>
      <!-- Application Growth Consulting -->
      <div
        class="border border-gray-300 bg-transparent rounded-[30px] p-6 relative"
      >
        <img
          alt="Icon representing Application Growth Consulting"
          class="absolute top-4 left-4 w-12 h-12 lg:w-20 lg:h-20"
          src="@/assets/img/icon-landing-6.svg"
        />
        <h2 class="text-lg lg:text-[35px] font-bold mt-15">
          {{ $t("text-36") }}
        </h2>
        <p class="mt-2 text-gray-500 text-[12px] lg:text-[16px]">
          {{ $t("text-37") }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-38") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-39") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-40") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-41") }}
          </li>
          <li
            class="flex items-center text-gray-500 text-[12px] lg:text-[16px]"
          >
            <IconRosetteDiscountCheck class="text-blue-500 mr-2" />

            {{ $t("text-42") }}
          </li>
        </ul>
      </div>
    </div>
    <div class="relative text-center px-2 mt-10">
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-43") }}
      </h2>
      <h1 class="text-lg lg:text-[35px] font-bold leading-tight">
        {{ $t("text-44") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-sm px-[0%] mt-2 tracking-tighter leading-[18px] mb-4"
      >
        {{ $t("text-45") }}
      </p>
    </div>
    <div
      class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[40px] px-2 lg:px-[8%]"
    >
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-46") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-47") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-48") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-49") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-50") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-51") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-52") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-53") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-54") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-55") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-56") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-57") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-58") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-59") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-60") }}
        </p>
      </div>
      <div
        class="bg-white border flex justify-center items-center border-gray-300 p-4 rounded-lg shadow"
      >
        <p class="text-center text-gray-500 text-[12px] lg:text-[12px]">
          {{ $t("text-61") }}
        </p>
      </div>
    </div>
  </div>
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
          <!-- <div
            class="flex justify-center lg:justify-start items-center lg:items-start"
          >
            <button
              @click="handleButtonClick"
              class="bg-white text-[#333] py-2 px-4 rounded-lg mt-4 w-[160px]"
            >
              {{ $t("text-4") }}
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center p-2 lg:p-15 py-5 lg:py-0 pt-0 antialiased"
  >
    <div class="flex flex-col md:flex-row lg:px-[10%] mb-0 lg:mb-5">
      <div class="p-2 lg:w-1/2 lg:p-4">
        <h2
          class="text-[#ff861b] text-sm lg:text-lg text-center lg:text-start font-normal font-[Helvetica Neue] leading-tight mb-2"
        >
          {{ $t("text-75") }}
        </h2>
        <h1
          class="text-lg lg:text-[35px] text-center lg:text-start font-bold mt-2"
        >
          {{ $t("text-76") }}
        </h1>
        <p class="text-gray-700 text-[12px] lg:text-[16px] mt-4">
          {{ $t("text-77") }}
        </p>
        <div class="flex justify-center items-center mt-4">
          <img
            src="@/assets/img/reviewed.png"
            alt="Business of Apps logo"
            class="mr-2"
            width="300"
            height="50"
          />
        </div>
        <div class="hidden lg:flex justify-start items-start mt-2 lg:mb-8">
          <button
            @click="handleButtonClick"
            class="bg-[#ff961b] absolute cursor-pointer hover:scale-110 transition-transform duration-500 inline-block text-white text-sm py-4 px-12 rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)]"
          >
            {{ $t("text-4") }}
          </button>
        </div>
      </div>
      <div class="lg:w-3/4 p-2 lg:p-4">
        <ul class="space-y-4">
          <li class="border-b border-gray-300 py-2"></li>
          <li class="border-b border-gray-300 py-2 pt-0 font-semibold">
            {{ $t("text-78") }}
          </li>
          <li class="border-b border-gray-300 py-2 pt-0 font-semibold">
            {{ $t("text-79") }}
          </li>
          <li class="border-b border-gray-300 py-2 pt-0 font-semibold">
            {{ $t("text-80") }}
          </li>
          <li class="border-b border-gray-300 py-2 pt-0 font-semibold">
            {{ $t("text-81") }}
          </li>
          <li class="border-b border-gray-300 py-2 pt-0 font-semibold">
            {{ $t("text-82") }}
          </li>
          <li class="py-2 pt-0 font-semibold">
            {{ $t("text-83") }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex lg:hidden w-[95%] h-[1px] bg-gray-300 my-4"></div>
    <div class="hidden lg:flex w-[77%] h-[1px] bg-gray-300 my-4"></div>
  </div>
  <div class="flex flex-col justify-center p-2 lg:p-15 py-5 pt-0 antialiased">
    <div
      class="flex lg:flex-row flex-col justify-center items-center lg:justify-between px-2 lg:px-[10%]"
    >
      <div class="text-start mb-6">
        <p
          class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2 lg:text-start text-center"
        >
          {{ $t("text-84") }}
        </p>
        <h1 class="text-2xl font-bold lg:text-start text-center">
          {{ $t("text-85") }}
        </h1>
      </div>
      <div class="flex justify-end mb-6 w-full lg:w-max">
        <router-link
          class="border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-max"
          to="/example"
        >
          {{ $t("text-86") }}
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 lg:px-[10%]">
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Pippin app screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx1.png"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Pippin
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-88") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-89") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+167%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-90") }}
          </p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Homa Games screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx2.png"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Homa Games
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-92") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-93") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+40%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-94") }}
          </p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Answear.com SA screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx3.png"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Answear.com SA
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-130") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-131") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+101%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-132") }}
          </p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Aliens screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx4.jpg"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Aliens
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-133") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-134") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+186%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-135") }}
          </p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Dine4Fit app screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx5.png"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Dine4Fit (Kalorickie Tabulky)
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-136") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-137") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+258%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-132") }}
          </p>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg">
        <img
          alt="Aion Bank screenshot"
          class="rounded-t-lg mb-4"
          height="300"
          src="@/assets/img/yx6.png"
          width="600"
        />
        <p
          class="text-[#ff861b] text-sm font-normal font-[Helvetica Neue] leading-tight my-3 mx-5"
        >
          Aion Bank
        </p>
        <h2 class="text-sm lg:text-lg font-bold mb-2 my-3 mx-5">
          {{ $t("text-138") }}
        </h2>
        <p class="text-gray-700 mb-4 my-3 mx-5 text-[12px] lg:text-[16px]">
          {{ $t("text-139") }}
        </p>
        <div class="flex justify-center items-center">
          <div class="w-[90%] h-[1px] bg-gray-300"></div>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-[#ff961b] text-lg font-bold my-3 mx-5">+251%</p>
          <p class="text-gray-700 text-[12px] lg:text-[16px]">
            {{ $t("text-140") }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center p-4 lg:p-15 py-5 lg:py-0 pt-0 antialiased"
  >
    <div class="mt-5 lg:mt-0">
      <p class="text-sm text-center lg:text start px-2 lg:px-0">
        {{ $t("text-95") }}
      </p>
    </div>
    <div class="flex justify-center items-center w-full">
      <div
        class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 mx-0 lg:w-[85%]"
      >
        <img alt="Adapty logo" class="w-22 h-8" src="@/assets/img/hb1.png" />
        <img
          alt="Amplitude logo"
          class="w-22 h-8"
          src="@/assets/img/hb2.05c863c9.svg"
        />
        <img alt="Adjust logo" class="w-22 h-8" src="@/assets/img/adjust.png" />
        <img
          alt="RevenueCat logo"
          class="w-22 h-8"
          src="@/assets/img/hb4.png"
        />
        <img alt="Mixpanel logo" class="w-22 h-8" src="@/assets/img/hb5.png" />
        <img alt="AppsFlyer logo" class="w-22 h-8" src="@/assets/img/hb6.png" />
      </div>
    </div>

    <hr class="w-full my-8 border-gray-300" />
    <footer class="text-sm text-gray-600">
      <div class="flex flex-wrap justify-center items-center space-x-4 mb-2">
        <a class="hover:underline font-bold" href="#"> {{ $t("text-96") }} </a>
        <a class="hover:underline font-bold" href="#"> {{ $t("text-97") }} </a>
        <a class="hover:underline font-bold" href="#"> {{ $t("text-98") }} </a>
        <a class="hover:underline font-bold" href="#"> {{ $t("text-99") }} </a>
      </div>
      <div class="mb-2 flex-wrap justify-center items-center">
        <p class="text-center text-[12px]">{{ $t("text-100") }}</p>
      </div>
      <div class="mb-2 flex justify-center items-center">
        <p class="text-center text-[12px]">
          Bladeware UK, Ltd.
          <br />
          1 Canada Square 37th Floor, Canary Wharf,
          <br />
          London, E14 5AA, United Kingdom
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { IconRosetteDiscountCheck } from "@tabler/icons-vue";
import image1 from "@/assets/img/alon-bank.png";
import image2 from "@/assets/img/totalizator.png";
import image3 from "@/assets/img/yiche.jpg";
import image4 from "@/assets/img/noon.png";
import image5 from "@/assets/img/aliens.png";
import image6 from "@/assets/img/answear.png";
import image7 from "@/assets/img/homa.png";
import image8 from "@/assets/img/dunkin.png";
import { useRouter } from "vue-router";

const router = useRouter();
const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const handleButtonClick = () => {
  const token = localStorage.getItem("jwt_token");
  if (!token) {
    router.push("/login");
  } else {
    router.push("/boost");
  }
};
</script>

<style></style>
