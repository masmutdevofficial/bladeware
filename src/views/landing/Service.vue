<template>
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
</template>

<script>
import { IconRosetteDiscountCheck } from "@tabler/icons-vue";

export default {
  components: {
    IconRosetteDiscountCheck,
  },
};
</script>
