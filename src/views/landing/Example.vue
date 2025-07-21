<template>
  <div class="flex flex-col justify-center p-2 lg:p-15 py-5 pt-0 antialiased">
    <div
      class="flex flex-col justify-center items-center lg:justify-between px-2 lg:px-[10%]"
    >
      <h2
        class="text-[#ff861b] text-sm lg:text-lg font-normal font-[Helvetica Neue] leading-tight mb-2"
      >
        {{ $t("text-62") }}
      </h2>
      <h1 class="text-[20px] lg:text-[35px] font-bold leading-tight">
        {{ $t("text-63") }}
      </h1>
      <p
        class="text-gray-500 text-[12px] lg:text-[16px] px-[10px] lg:px-[30%] mt-2 tracking-tighter leading-[18px] mb-4"
      >
        {{ $t("text-129") }}
      </p>
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
</template>
