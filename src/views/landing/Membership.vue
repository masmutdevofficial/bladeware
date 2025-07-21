<template>
  <div class="relative w-full flex justify-center">
    <!-- Background Image -->
    <img
      src="@/assets/img/my1.webp"
      class="absolute inset-0 w-[100%] lg:w-[50%] right-0 top-0 left-auto object-cover z-0"
      alt="Background"
    />

    <!-- CARD -->
    <div
      class="relative z-0 bg-transparent mt-[30px] py-5 px-5 lg:py-5 lg:px-5 rounded-lg flex flex-col items-center w-[95%] lg:w-100 bg-opacity-90"
    >
      <div
        class="flex flex-col justify-center w-full bg-white shadow-md rounded-lg p-4 mb-4"
      >
        <div class="flex flex-row justify-between">
          <div class="flex items-center mb-4">
            <img
              alt="Membership badge icon"
              class="w-10 h-10 mr-3"
              src="@/assets/img/v1.webp"
            />
            <div>
              <h2 class="text-xl font-bold">Normal Member</h2>
            </div>
          </div>
          <span class="text-gray-500 mt-2"> Current Level </span>
        </div>

        <ul class="list-disc list-inside text-black">
          <li class="mb-2">Maximum 40 application data for a set</li>
          <li class="mb-2">Profit per application 0.5%</li>
          <li class="mb-2">Minimum requirement of 100 USDC to be activated</li>
          <li>Current membership maximum withdrawal 5000 USDC</li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center w-full bg-white shadow-md rounded-lg p-4 mb-4"
      >
        <div class="flex flex-row justify-between">
          <div class="flex items-center mb-4">
            <img
              alt="Membership badge icon"
              class="w-10 h-10 mr-3"
              src="@/assets/img/v2.webp"
            />
            <div>
              <h2 class="text-xl font-bold">Gold Member</h2>
            </div>
          </div>
        </div>

        <ul class="list-disc list-inside text-black">
          <li class="mb-2">Maximum 50 application data for a set</li>
          <li class="mb-2">Profit per application 0.6%</li>
          <li class="mb-2">
            1500 USDC for purchasing and upgrading permanent Gold Membership
          </li>
          <li>Current membership maximum withdrawal 50000 USDC</li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center w-full bg-white shadow-md rounded-lg p-4 mb-4"
      >
        <div class="flex flex-row justify-between">
          <div class="flex items-center mb-4">
            <img
              alt="Membership badge icon"
              class="w-10 h-10 mr-3"
              src="@/assets/img/v3.webp"
            />
            <div>
              <h2 class="text-xl font-bold">Platinum Member</h2>
            </div>
          </div>
        </div>

        <ul class="list-disc list-inside text-black">
          <li class="mb-2">Maximum 55 application data for a set</li>
          <li class="mb-2">Profit per application 0.8%</li>
          <li class="mb-2">
            5000 USDC for purchasing and upgrading permanent Gold Membership
          </li>
          <li>Current membership maximum withdrawal 200000 USDC</li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center w-full bg-white shadow-md rounded-lg p-4 mb-4"
      >
        <div class="flex flex-row justify-between">
          <div class="flex items-center mb-4">
            <img
              alt="Membership badge icon"
              class="w-10 h-10 mr-3"
              src="@/assets/img/v4.webp"
            />
            <div>
              <h2 class="text-xl font-bold">Crown Member</h2>
            </div>
          </div>
        </div>

        <ul class="list-disc list-inside text-black">
          <li class="mb-2">Maximum 55 application data for a set</li>
          <li class="mb-2">Profit per application 1%</li>
          <li class="mb-2">
            10000 USDC for purchasing and upgrading permanent Gold Membership
          </li>
          <li>Current membership maximum withdrawal 1000000 USDC</li>
        </ul>
      </div>
    </div>
  </div>
</template>
