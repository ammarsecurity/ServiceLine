<template>
  <div class="w-screen h-screen">
    <div
      class="h-full w-full bg-pm py-[12rem] flex justify-center items-center relative z-10 bg-opacity-80"
    >
      <div class="w-full flex justify-end pl-20">
        <h1 class="text-white text-[4rem]">
          مرحبا بك,
          <br />
          في لوحة التحكم
        </h1>
      </div>
      <div class="w-full flex justify-center">
        <div
          class="bg-white w-[55%] rounded-2xl px-8 py-32 max-w-[372px] min-w-[372px] opacity-95 backdrop-blur backdrop-blur-xl"
        >
          <p class="font-bold text-2xl text-black">سجل الدخول</p>
          <Form
            :validation-schema="loginSchema"
            class="mt-20 gap-5 flex flex-col"
            @submit="submit"
          >
            <div>
              <Field
                class="w-full focus:outline-0 border-0 focus:ring-pm focus:border-pm py-4 px-5 bg-[#f8f9fb]"
                name="usernameOrEmail"
                placeholder="اسم استمارة خط الخدمة او  البريد الالكتروني"
                type="text"
              />
              <ErrorMessage
                class="text-red-600 text-lg"
                component="div"
                name="usernameOrEmail"
              />
            </div>
            <div>
              <Field
                class="w-full focus:outline-0 border-0 focus:ring-pm focus:border-pm py-4 px-5 bg-[#f8f9fb]"
                name="password"
                placeholder="الرمز السري"
                type="password"
              />
              <ErrorMessage
                class="text-red-600 text-lg"
                component="div"
                name="password"
              />
            </div>
            <button class="bg-pm text-white text-right" type="submit">
              <div class="grid grid-cols-7 h-full">
                <p class="text-white px-5 py-5 col-span-6">سجل الدخول</p>
                <div
                  class="bg-pm-600 h-full col-span-1 flex justify-center items-center"
                >
                  <ArrowLeft />
                </div>
              </div>
            </button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
import emitter from "tiny-emitter/instance";
import { useUserStore } from "@/stores/user";
import { useToastStore } from "@/stores/toast";
import router from "@/router/index";

const loginSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .required("اسم استمارة خط الخدمة او البريد الالكتروني مطلوب"),
  password: yup.string().required("الرمز السري مطلوب"),
});

async function submit(values) {
  const user = useUserStore();
  const toast = useToastStore();
  const isLogedIn = await user.login(values.usernameOrEmail, values.password);
  if (isLogedIn) {
    toast.showToast("تم تسجيل الدخول بنجاح", toast.toastTypes.SUCCESS);
    await router.push({ name: "home" });
  }
}
</script>

<style scoped></style>
