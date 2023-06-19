<template>
  <!-- Extra Large Modal -->
  <div
    v-if="isShow"
    v-motion-pop
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] p-4 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
    tabindex="-1"
  >
    <div class="relative w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-[1.125rem] shadow">
        <div>
          <button
            class="absolute top-[-7px] right-[-5px]"
            type="button"
            @click="hide"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              height="1em"
              viewBox="0 0 20 21"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.07618 3.57629C1.71262 4.93985 0.78402 6.67713 0.407814 8.56845C0.0316075 10.4598 0.22469 12.4202 0.962644 14.2017C1.7006 15.9833 2.95028 17.5061 4.55366 18.5774C6.15704 19.6488 8.0421 20.2206 9.97047 20.2206C11.8988 20.2206 13.7839 19.6488 15.3873 18.5774C16.9907 17.5061 18.2403 15.9833 18.9783 14.2017C19.7162 12.4202 19.9093 10.4598 19.5331 8.56845C19.1569 6.67713 18.2283 4.93985 16.8648 3.57629C15.0351 1.7501 12.5556 0.724455 9.97047 0.724455C7.38537 0.724455 4.90587 1.7501 3.07618 3.57629ZM15.8041 16.3042C14.6503 17.458 13.1803 18.2437 11.58 18.5621C9.97962 18.8804 8.32082 18.717 6.81333 18.0926C5.30584 17.4682 4.01737 16.4107 3.11085 15.054C2.20432 13.6973 1.72047 12.1023 1.72047 10.4706C1.72047 8.83888 2.20432 7.24383 3.11085 5.88712C4.01737 4.53042 5.30584 3.47299 6.81333 2.84857C8.32082 2.22415 9.97962 2.06077 11.58 2.3791C13.1803 2.69743 14.6503 3.48316 15.8041 4.63695C17.349 6.18534 18.2166 8.2833 18.2166 10.4706C18.2166 12.6579 17.349 14.7558 15.8041 16.3042ZM13.1524 7.2886C13.2931 7.42925 13.3721 7.62002 13.3721 7.81893C13.3721 8.01784 13.2931 8.20861 13.1524 8.34926L11.0311 10.4706L13.1524 12.5919C13.2931 12.7326 13.3721 12.9233 13.3721 13.1222C13.3721 13.3211 13.2931 13.5119 13.1524 13.6526C13.0118 13.7932 12.821 13.8722 12.6221 13.8722C12.4232 13.8722 12.2324 13.7932 12.0918 13.6526L9.97047 11.5312L7.84915 13.6526C7.7085 13.7932 7.51773 13.8722 7.31882 13.8722C7.11991 13.8722 6.92914 13.7932 6.78849 13.6526C6.64784 13.5119 6.56882 13.3211 6.56882 13.1222C6.56882 12.9233 6.64784 12.7326 6.78849 12.5919L8.90981 10.4706L6.78849 8.34926C6.64784 8.20861 6.56882 8.01784 6.56882 7.81893C6.56882 7.62002 6.64784 7.42925 6.78849 7.2886C6.92914 7.14795 7.11991 7.06893 7.31882 7.06893C7.51773 7.06893 7.7085 7.14795 7.84915 7.2886L9.97047 9.40992L12.0918 7.2886C12.2324 7.14795 12.4232 7.06893 12.6221 7.06893C12.821 7.06893 13.0118 7.14795 13.1524 7.2886Z"
                fill="#FF4550"
              />
            </svg>
          </button>
        </div>
        <!-- Modal header -->
        <div class="flex justify-between items-center p-10 pb-5 rounded-t">
          <h3 class="text-2xl font-bold text-pm">
            {{ title }}
          </h3>
        </div>
        <!-- Modal body -->
        <div>
          <Form :validation-schema="simpleSchema" @submit="submit">
            <div
              class="grid grid-cols-1 gap-3 max-h-[calc(100vh-15rem)] overflow-auto px-10 pt-5"
            >
              <div class="mb-6 space-y-3">
                <label class="block text-lg font-medium text-pm" for="name">
                  اسم المستخدم
                </label>
                <Field
                  v-model="data.name"
                  class="bg-gray-50 border border-pm border-opacity-25 text-gray-900 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3"
                  name="name"
                  placeholder="اسم المستخدم"
                  type="text"
                />
                <ErrorMessage
                  class="text-red-600 text-lg"
                  component="div"
                  name="name"
                />
              </div>
              <div class="mb-6 space-y-3">
                <label class="block text-lg font-medium text-pm" for="email">
                  البريد الالكتروني
                </label>
                <Field
                  v-model="data.email"
                  class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                  name="email"
                  placeholder="البريد الالكتروني"
                  type="email"
                />
                <ErrorMessage
                  class="text-red-600 text-lg"
                  component="div"
                  name="email"
                />
              </div>
              <div class="mb-6 space-y-3">
                <label class="block text-lg font-medium text-pm" for="password">
                  كلمة المرور
                </label>
                <Field
                  v-model="data.password"
                  class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                  name="password"
                  placeholder="كلمة المرور"
                  type="password"
                />
                <ErrorMessage
                  class="text-red-600 text-lg"
                  component="div"
                  name="password"
                />
              </div>
              <div class="mb-6 space-y-3">
                <label class="block text-lg font-medium text-pm" for="role">
                  الصلاحية
                </label>
                <Field
                  v-model="data.role"
                  class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                  name="role"
                  as="select"
                >
                  <option
                    v-for="[name, value] of Object.entries(Roles).filter(
                      ([key, value]) => isNaN(Number(key))
                    )"
                    :value="value"
                  >
                    {{ name }}
                  </option>
                </Field>
                <ErrorMessage
                  class="text-red-600 text-lg"
                  component="div"
                  name="role"
                />
              </div>
            </div>
            <div class="p-10">
              <button
                class="text-white bg-pm hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-pm focus:ring-opacity-25 font-medium rounded-3xl text-md px-5 py-3 text-center w-full"
                type="submit"
              >
                {{ isEdit ? "تعديل" : "اضافة" }} مستخدم
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isShow"
    class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[55]"
  ></div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field, Form } from "vee-validate";
import emitter from "@/emitter";
import * as _ from "lodash";
import axiosIns from "@/lib/http/http";
import { computed, onMounted, ref, Ref } from "vue";
import { useUserStore } from "@/stores/user";
import { Roles, UserDto, RegisterUserForm } from "@/services/types";
import * as yup from "yup";
import { postAdminRegisterUser } from "@/services/services";
const isShow: Ref<boolean> = ref(false);
const isEdit: Ref<boolean> = ref(false);

const simpleSchema: any = {
  name: yup.string().required("اسم المستخدم مطلوب"),
  email: yup
    .string()
    .email("البريد الالكتروني غير صحيح")
    .required("البريد الالكتروني مطلوب"),
  role: yup.string().required("الصلاحية مطلوبة"),
  // password min 8 chars
  password: yup
    .string()
    .min(8, "كلمة المرور يجب ان تكون اكثر من 8 حروف")
    .required("كلمة المرور مطلوبة"),
};
const data: Ref<RegisterUserForm> = ref({});
const titleP: Ref<string> = ref("مستخدم جديد");

const title = computed(() => {
  return titleP.value;
});

function hide() {
  isShow.value = false;
  data.value = {};
}

async function submit(values: any) {
  try {
    await postAdminRegisterUser(data.value);
    hide();
    emitter.emit("refreshTables");
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  emitter.on("addUser", (_data: any) => {
    isShow.value = true;
    if (_data) {
      isEdit.value = true;
      const temp = _.cloneDeep(_data);
      data.value = temp;
      titleP.value = "تعديل استمارة خط الخدمة";
    } else {
      isEdit.value = false;
      data.value = {};
      titleP.value = "اضافة مستخدم";
    }
  });
});
</script>

<style scoped></style>
