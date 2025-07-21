<template>
  <div class="relative w-full h-screen flex justify-center">
    <!-- Background Image -->
    <img
      src="@/assets/img/my1.webp"
      class="lg:flex hidden absolute inset-0 w-[50%] right-0 top-0 left-auto object-cover z-0"
      alt="Background"
    />

    <!-- CARD -->
    <div
      class="relative z-10 lg:bg-white h-max mt-[1px] py-15 px-5 lg:py-35 lg:px-20 rounded-lg shadow-lg flex flex-col items-center md:flex-row md:justify-between w-full lg:w-200 bg-opacity-90"
    >
      <div class="hidden lg:flex text-center md:text-left mb-8 md:mb-0">
        <img src="@/assets/img/logo.png" class="w-70" alt="" />
      </div>
      <div class="w-full md:w-1/2 lg:pl-12">
        <div class="space-y-4">
          <!-- Username -->
          <div class="relative">
            <input
              v-model="username"
              type="text"
              placeholder="Username"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
            />
            <button
              v-if="username"
              type="button"
              @click="username = ''"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <!-- Phone number -->
          <div class="relative">
            <input
              v-model="phoneEmail"
              type="text"
              placeholder="Phone number"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
            />
            <button
              v-if="phoneEmail"
              type="button"
              @click="phoneEmail = ''"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <!-- Email -->
          <div class="relative">
            <input
              v-model="emailOnly"
              type="email"
              placeholder="Email"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
            />
            <button
              v-if="emailOnly"
              type="button"
              @click="emailOnly = ''"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <!-- LOGIN PASSWORD -->
          <div class="relative">
            <input
              v-model="loginPassword"
              :type="showLoginPassword ? 'text' : 'password'"
              placeholder="Login password"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-16"
            />
            <button
              v-if="loginPassword"
              type="button"
              @click="loginPassword = ''"
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

          <!-- CONFIRM LOGIN PASSWORD -->
          <div class="relative">
            <input
              v-model="confirmLoginPassword"
              :type="showConfirmLoginPassword ? 'text' : 'password'"
              placeholder="Confirm login password"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-16"
            />
            <button
              v-if="confirmLoginPassword"
              type="button"
              @click="confirmLoginPassword = ''"
              class="absolute right-10 top-3 text-gray-500"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
            <button
              type="button"
              @click="showConfirmLoginPassword = !showConfirmLoginPassword"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconEye v-if="showConfirmLoginPassword" />
              <IconEyeClosed v-else />
            </button>
          </div>

          <!-- WITHDRAWAL PASSWORD -->
          <div class="relative">
            <input
              v-model="withdrawalPassword"
              :type="showWithdrawalPassword ? 'text' : 'password'"
              placeholder="Withdrawal password"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-16"
            />
            <button
              v-if="withdrawalPassword"
              type="button"
              @click="withdrawalPassword = ''"
              class="absolute right-10 top-3 text-gray-500"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
            <button
              type="button"
              @click="showWithdrawalPassword = !showWithdrawalPassword"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconEye v-if="showWithdrawalPassword" />
              <IconEyeClosed v-else />
            </button>
          </div>

          <!-- CONFIRM WITHDRAWAL PASSWORD -->
          <div class="relative">
            <input
              v-model="confirmWithdrawalPassword"
              :type="showConfirmWithdrawalPassword ? 'text' : 'password'"
              placeholder="Confirm withdrawal password"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-16"
            />
            <button
              v-if="confirmWithdrawalPassword"
              type="button"
              @click="confirmWithdrawalPassword = ''"
              class="absolute right-10 top-3 text-gray-500"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
            <button
              type="button"
              @click="
                showConfirmWithdrawalPassword = !showConfirmWithdrawalPassword
              "
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconEye v-if="showConfirmWithdrawalPassword" />
              <IconEyeClosed v-else />
            </button>
          </div>

          <!-- REFERRAL CODE -->
          <div class="relative">
            <input
              v-model="referralCode"
              type="text"
              placeholder="Referral code"
              class="w-full h-10 p-3 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 pr-10"
            />
            <button
              v-if="referralCode"
              type="button"
              @click="referralCode = ''"
              class="absolute right-3 top-3 text-gray-400"
            >
              <IconX class="w-5 h-5 text-gray-300" />
            </button>
          </div>

          <div class="mb-0">
            <button
              @click="register"
              type="button"
              class="bg-[#ff961b] cursor-pointer inline-block text-white text-sm py-4 px-12 rounded-[10px] shadow-md shadow-[rgba(243,174,78,0.52)] w-full"
            >
              Register
            </button>
          </div>
          <div class="text-end">
            <span class="text-sm text-gray-500">
              Already have an account?
              <router-link class="text-sm text-[#ff961b]" to="login"
                >Log in now
              </router-link>
            </span>
          </div>
        </div>
        <div class="mt-5">
          <!-- Radio Button -->
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              v-model="isChecked"
              :value="true"
              @click="showModal = true"
              class="hidden"
            />
            <div
              class="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center"
              :class="isChecked ? 'bg-[#ff861b] border-[#ff861b]' : 'bg-white'"
            >
              <div
                v-if="isChecked"
                class="w-2.5 h-2.5 bg-white rounded-full"
              ></div>
            </div>
            <span class="text-[12px] text-gray-600">
              I have read and agreed to the user agreement and privacy policy
            </span>
          </label>
        </div>

        <!-- Modal -->
        <div
          v-if="showModal"
          @click="showModal = false"
          class="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div class="bg-white p-6 shadow-lg w-[50%] h-[70%] overflow-clip">
            <div class="relative">
              <!-- Tombol Close (X) di Kanan Atas -->
              <button
                @click="showModal = false"
                class="absolute top-0 right-3 bg-[#ff861b] p-2 text-white rounded-full hover:bg-[#e07b17]"
              >
                <IconX class="w-3 h-3" />
              </button>

              <!-- Konten Modal -->
              <h2 class="text-lg font-bold text-center mb-4">
                User Agreement and Privacy Policy
              </h2>
            </div>

            <div class="h-full overflow-auto pb-10">
              <p class="text-black text-[12px] mb-5">Welcome to Bladeware!</p>
              <p class="text-black text-[12px] mb-5">Kindly Take Note:</p>
              <p class="text-black text-[12px] mb-5">
                Please do not use the same cryptocurrency's information to
                register for the&nbsp;Bladeware&nbsp;group repeatedly; once
                found, the account ID will be frozen.
              </p>
              <p class="text-black text-[12px] mb-5">
                Each user is very welcome in our company. All users must join
                for at least three days before they can apply for termination of
                their account, this is to avoid any loss of profit for our
                company, and we have all the rights to pursue any loss of
                profit. We always believe that our users will give us enough
                cooperation and will perform well in this company.
              </p>
              <p class="text-black text-[12px] mb-5">
                To protect the security of this website and the Platform it
                creates ("Website Use and Services"), please read the following
                Website and Services License ("Website" or "Agreement"). You
                should fully understand these Terms of Use, particularly the
                terms of service and restrictions, the separate agreements for
                each term and whether to accept or reject liability.
              </p>
              <p class="text-black text-[12px] mb-5">
                If you are over 18 years old, becoming a user of this website
                means that you have read and agreed to this agreement and
                related terms. Otherwise, you have no right to register and
                enjoy this service.
              </p>
              <p class="text-black text-[12px] mb-5">
                (1) Protection of users’ personal information
              </p>
              <p class="text-black text-[12px]">
                1.1 Protecting users’ personal information and author
                information is a basic principle of this website. To protect
                users' security, Bladeware experts encrypt all information
                stored and transmitted. This site will take legal action.
              </p>
              <p class="text-black text-[12px]">
                1.2 When using the service, the user must provide the necessary
                information, such as entering a mobile phone number to use the
                account registration service, and agree to the relevant terms of
                use. If the content you provide is incomplete, your use may be
                limited.
              </p>
              <p class="text-black text-[12px]">
                1.3 In principle, users can change the information they submit
                at any time, but for security reasons (account recovery
                services, etc.), users are not allowed to change their personal
                information at will after registration.
              </p>
              <p class="text-black text-[12px]">
                1.4 Bladeware uses various security technologies and procedures
                and has a complete management system to protect your personal
                information. Any use or abuse will be subject to legal
                sanctions. The last mobile number registered with Bladeware will
                not be registered. Please feel free to change it.
              </p>
              <p class="text-black text-[12px]">
                1.5 Under no circumstances will your information be disclosed to
                any company or entity outside of Bladeware without your consent.
              </p>
              <p class="text-black text-[12px] mb-5">
                1.6 If you are under 18 years of age, you must obtain written
                information from a parent or law enforcement official before
                accessing the Site's services.
              </p>
              <p class="text-black text-[12px] mb-5">
                (2) User Responsibilities
              </p>
              <p class="text-black text-[12px]">
                2.1 Users must complete a series of data before requesting a
                withdrawal.
              </p>
              <p class="text-black text-[12px]">
                2.2 Users cannot withdraw money during the boosting process.
              </p>
              <p class="text-black text-[12px] mb-5">
                2.3 Users cannot cancel or skip data.
              </p>
              <p class="text-black text-[12px] mb-5">&nbsp;(3) Terms of use</p>
              <p class="text-black text-[12px]">
                3.1 The "User Agreement" and "Terms of Service" are bound by the
                terms and conditions contained in the account, and require users
                to provide relevant materials and documents to this website, and
                users become affiliates of these terms.
              </p>
              <p class="text-black text-[12px]">
                3.2 Terms of use for all users of this website's services If you
                have any questions or other important concerns, please seek
                feedback from the competent authorities.
              </p>
              <p class="text-black text-[12px] mb-5">
                3.3 The terms of use of this website are executed by the trade
                agreement. All terms of use are protected by law. If a user
                maliciously violates this agreement, this website reserves the
                right to pursue legal liability.
              </p>
              <p class="text-black text-[12px] mb-5">4. Recharge</p>
              <p class="text-black text-[12px]">
                4.1 Due to the large amount of information on the platform,
                users should contact customer service to confirm and carefully
                check the merchant address provided by customer service before
                each recharge.
              </p>
              <p class="text-black text-[12px] mb-5">
                4.2 After the recharge is successful, the user needs to provide
                a screenshot of the successful payment so that the online
                customer service can credit the user.
              </p>
              <p class="text-black text-[12px] mb-5">5. App Merchant Coop's</p>
              <p class="text-black text-[12px]">
                5.1 Applications data volume is adjusted based on market
                conditions.
              </p>
              <p class="text-black text-[12px]">
                5.2 Data is randomly distributed based on the total balance of
                the user's account.
              </p>
              <p class="text-black text-[12px]">
                5.3 The larger the total balance of the user account, the larger
                the amount of data, and the higher the income.
              </p>
              <p class="text-black text-[12px] mb-5">
                5.4 If you're worried that the combination data volume will be
                overwhelming, don't recharge too much data to start boosting.
              </p>
              <p class="text-black text-[12px] mb-5">6. Withdrawal</p>
              <p class="text-black text-[12px]">
                Withdrawal time is from 10:00 to 22:00 every day.
              </p>
              <p class="text-black text-[12px] mb-5">7. Bladeware Users</p>
              <p class="text-black text-[12px] mb-5">
                Users can receive additional rewards by referring new users to
                become Bladeware users. The remuneration is 20% of the
                recommender's total remuneration for the day.
              </p>
              <p class="text-black text-[12px] mb-5">8. Business hours</p>
              <p class="text-black text-[12px] mb-5">
                Users can start boosting data during daily business hours
                10:00-22:00.
              </p>
              <p class="text-black text-[12px] mb-5">
                If you encounter unresolved problems during the recharge
                process, please contact online customer service immediately.
              </p>
              <p class="text-black text-[12px] mb-5">
                If users have any questions, please contact online customer
                service for consultation!
              </p>
              <p class="text-black text-[12px]">
                Note: If you need further explanation, please click on the
                website to contact online customer service!
              </p>
            </div>
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
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { IconEye, IconEyeClosed, IconX } from "@tabler/icons-vue"; // Import IconX
import { useRouter } from "vue-router";

export default {
  components: {
    IconEye,
    IconEyeClosed,
    IconX, // Pastikan IconX diimpor
  },
  setup() {
    const router = useRouter();
    const username = ref("");
    const phoneEmail = ref("");
    const emailOnly = ref("");
    const loginPassword = ref("");
    const confirmLoginPassword = ref("");
    const withdrawalPassword = ref("");
    const confirmWithdrawalPassword = ref("");
    const referralCode = ref("");
    const showModal = ref(false);
    const isChecked = ref(false);
    const alert = ref({
      message: "",
      type: "success",
    });

    const showAlert = (message, type = "error") => {
      alert.value = {
        message,
        type,
      };
      setTimeout(() => {
        alert.value.message = "";
      }, 3000);
    };

    const showLoginPassword = ref(false);
    const showConfirmLoginPassword = ref(false);
    const showWithdrawalPassword = ref(false);
    const showConfirmWithdrawalPassword = ref(false);

    const closeModal = () => {
      showModal.value = false;
      isChecked.value = true; // Tetap checked setelah modal ditutup
    };

    const register = async () => {
      // Validasi input frontend
      if (
        !username.value ||
        !phoneEmail.value ||
        !emailOnly.value ||
        !loginPassword.value ||
        !confirmLoginPassword.value ||
        !withdrawalPassword.value ||
        !confirmWithdrawalPassword.value ||
        !referralCode.value
      ) {
        showAlert("Please fill in all required fields.", "error");
        return;
      }

      if (loginPassword.value !== confirmLoginPassword.value) {
        showAlert("Login passwords do not match.", "error");
        return;
      }

      if (withdrawalPassword.value !== confirmWithdrawalPassword.value) {
        showAlert("Withdrawal passwords do not match.", "error");
        return;
      }

      try {
        const response = await axios.post(
          "https://bladeware.masmutdev.id/api/register",
          {
            username: username.value,
            phone_email: phoneEmail.value,
            email_only: emailOnly.value,
            password: loginPassword.value,
            withdrawal_password: withdrawalPassword.value,
            referral: referralCode.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status === "success") {
          showAlert("Registration successful!", "success");

          setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else {
          showAlert(response.data.message || "Registration failed.", "error");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Registration failed.";
        showAlert(errorMessage, "error");
      }
    };

    return {
      username,
      phoneEmail,
      emailOnly,
      loginPassword,
      confirmLoginPassword,
      withdrawalPassword,
      confirmWithdrawalPassword,
      referralCode,
      showLoginPassword,
      showConfirmLoginPassword,
      showWithdrawalPassword,
      showConfirmWithdrawalPassword,
      showModal,
      isChecked,
      closeModal,
      alert,
      showAlert,
      register,
    };
  },
};
</script>
