<template>
  <!-- Extra Large Modal -->
  <div
    v-if="isShow"
    v-motion-pop
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] p-4 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
    tabindex="-1"
  >
    <div class="relative w-full max-w-7xl h-full md:h-auto">
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
              class="max-h-[calc(100vh-15rem)] overflow-auto px-10 pt-5 flex flex-col gap-4"
            >
              <fieldset
                class="border border-pm border-opacity-25 rounded-md p-10"
              >
                <legend class="text-lg font-bold text-pm">
                  المعلومات الشخصية
                </legend>
                <div class="grid grid-cols-3 gap-3">
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="statisticalNumber"
                    >
                      الرقم الاحصائي
                    </label>
                    <Field
                      v-model="data.statisticalNumber"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-900 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3"
                      name="statisticalNumber"
                      min="0"
                      placeholder="الرقم الاحصائي"
                      type="number"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="statisticalNumber"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label class="block text-lg font-medium text-pm" for="rank">
                      الرتبة
                    </label>
                    <Field
                      v-model="data.rank"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="rank"
                      placeholder="الرتبة"
                      type="text"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="rank"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="fullName"
                    >
                      الاسم الثلاثي واللقب
                    </label>
                    <Field
                      v-model="data.fullName"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="fullName"
                      placeholder="الاسم الثلاثي واللقب"
                      type="text"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="fullName"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="birthDate"
                    >
                      تاريخ الميلاد
                    </label>
                    <Field
                      v-model="data.birthDate"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="birthDate"
                      placeholder="تاريخ الميلاد"
                      type="date"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="birthDate"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="course"
                    >
                      الدورة
                    </label>
                    <Field
                      v-model="data.course"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="course"
                      min="0"
                      placeholder="الدورة"
                      type="number"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="course"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="courseDate"
                    >
                      تاريخ الدورة
                    </label>
                    <Field
                      v-model="data.courseDate"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="courseDate"
                      placeholder="تاريخ الدورة"
                      type="date"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="courseDate"
                    />
                  </div>
                  <div class="mb-6 space-y-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="dateOfJoiningBadr"
                    >
                      تاريخ الالتحاق الى بدر
                    </label>
                    <Field
                      v-model="data.dateOfJoiningBadr"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="dateOfJoiningBadr"
                      placeholder="تاريخ الالتحاق الى بدر"
                      type="date"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="dateOfJoiningBadr"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset
                class="border border-pm border-opacity-25 rounded-md p-10"
              >
                <legend class="text-lg font-bold text-pm">الملاحظات</legend>
                <div class="grid grid-cols-3 gap-3">
                  <div class="mb-6 space-y-3 col-span-3">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="notes"
                    >
                      الملاحظات
                    </label>
                    <Field
                      v-model="data.notes"
                      rows="4"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="notes"
                      placeholder="الملاحظات"
                      as="textarea"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="notes"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset
                class="border border-pm border-opacity-25 rounded-md p-10"
              >
                <legend class="text-lg font-bold text-pm">
                  التحصيلات الدراسية
                </legend>
                <div class="grid grid-cols-4 gap-3">
                  <div class="mb-6 space-y-3 col-span-2">
                    <label
                      class="block text-lg font-medium text-pm"
                      for="academicAchievement"
                    >
                      التحصيل الدراسي
                    </label>
                    <Field
                      v-model="data.academicAchievement.academicAchievement"
                      rows="4"
                      class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                      name="academicAchievement"
                      placeholder="التحصيل الدراسي"
                      type="text"
                    />
                    <ErrorMessage
                      class="text-red-600 text-lg"
                      component="div"
                      name="academicAchievement"
                    />
                  </div>
                  <fieldset
                    class="border border-pm border-opacity-25 rounded-md p-5 col-span-4"
                  >
                    <legend class="text-lg font-bold text-pm">
                      الدورة التعليمية التقويمية للمرحلة الاعدادية
                    </legend>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="edCycleDateFrom"
                        >
                          من
                        </label>
                        <Field
                          v-model="data.academicAchievement.edCycleDateFrom"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="edCycleDateFrom"
                          placeholder="من"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="edCycleDateFrom"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="edCycleDateTo"
                        >
                          الى
                        </label>
                        <Field
                          v-model="data.academicAchievement.edCycleDateTo"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="edCycleDateTo"
                          placeholder="الى"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="edCycleDateTo"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset
                    class="border border-pm border-opacity-25 rounded-md p-5 col-span-4"
                  >
                    <legend class="text-lg font-bold text-pm">
                      دورة الكلية العسكرية
                    </legend>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="mccDateFrom"
                        >
                          من
                        </label>
                        <Field
                          v-model="data.academicAchievement.mccDateFrom"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="mccDateFrom"
                          placeholder="من"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="mccDateFrom"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="mccDateTo"
                        >
                          الى
                        </label>
                        <Field
                          v-model="data.academicAchievement.mccDateTo"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="mccDateTo"
                          placeholder="الى"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="mccDateTo"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset
                    class="border border-pm border-opacity-25 rounded-md p-5 col-span-4"
                  >
                    <legend class="text-lg font-bold text-pm">
                      دورة تاهيل الضباط
                    </legend>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="otcDateFrom"
                        >
                          من
                        </label>
                        <Field
                          v-model="data.academicAchievement.otcDateFrom"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="otcDateFrom"
                          placeholder="من"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="otcDateFrom"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          for="otcDateTo"
                        >
                          الى
                        </label>
                        <Field
                          v-model="data.academicAchievement.otcDateTo"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          name="otcDateTo"
                          placeholder="الى"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          name="otcDateTo"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </fieldset>
              <fieldset
                class="border border-pm border-opacity-25 rounded-md p-10 relative"
              >
                <legend class="text-lg font-bold text-pm">الدورات</legend>
                <!--                    add course button-->
                <button
                  class="absolute top-[-30px] left-[-1px] p-2 rounded-full bg-pm"
                  type="button"
                  @click="addCourse"
                >
                  <PhPlus class="w-6 h-6 fill-white" />
                </button>
                <div class="grid grid-cols-4 gap-3">
                  <fieldset
                    v-for="(course, i) in data.courses"
                    :key="i"
                    class="border border-pm border-opacity-25 rounded-md p-5 col-span-4 relative"
                  >
                    <legend class="text-lg font-bold text-pm">
                      {{ course.courseName }}
                    </legend>
                    <button
                      class="absolute top-[-30px] left-[-1px] p-2 rounded-full bg-red-400"
                      type="button"
                      @click="removeCourse(i)"
                    >
                      <PhTrash class="w-6 h-6 fill-white" />
                    </button>
                    <div class="grid grid-cols-3 gap-3">
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          :for="`courseName${i}`"
                        >
                          اسم الدورة
                        </label>
                        <Field
                          v-model="course.courseName"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          :name="`courseName${i}`"
                          rules="required"
                          placeholder="اسم الدورة"
                          type="text"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          :name="`courseName${i}`"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          :for="`courseDateFrom${i}`"
                        >
                          من
                        </label>
                        <Field
                          v-model="course.courseDateFrom"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          :name="`courseDateFrom${i}`"
                          rules="required"
                          placeholder="من"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          :name="`courseDateFrom${i}`"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          :for="`courseDateTo${i}`"
                        >
                          الى
                        </label>
                        <Field
                          v-model="course.courseDateTo"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          :name="`courseDateTo${i}`"
                          rules="required"
                          placeholder="الى"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          :name="`courseDateTo${i}`"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </fieldset>
              <fieldset
                class="border border-pm border-opacity-25 rounded-md p-10 relative"
              >
                <legend class="text-lg font-bold text-pm">الترفيعات</legend>
                <button
                  class="absolute top-[-30px] left-[-1px] p-2 rounded-full bg-pm"
                  type="button"
                  @click="addPromotion"
                >
                  <PhPlus class="w-6 h-6 fill-white" />
                </button>
                <div class="grid grid-cols-4 gap-3">
                  <fieldset
                    v-for="(promotion, i) in data.promotions"
                    :key="i"
                    class="border border-pm border-opacity-25 rounded-md p-5 col-span-4 relative"
                  >
                    <legend class="text-lg font-bold text-pm">
                      {{ promotion.promotionName }}
                    </legend>
                    <button
                      class="absolute top-[-30px] left-[-1px] p-2 rounded-full bg-red-400"
                      type="button"
                      @click="removePromotion(i)"
                    >
                      <PhTrash class="w-6 h-6 fill-white" />
                    </button>
                    <div class="grid grid-cols-3 gap-3">
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          :for="`courseName${i}`"
                        >
                          اسم الدورة
                        </label>
                        <Field
                          v-model="promotion.promotionName"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          :name="`promotionName${i}`"
                          rules="required"
                          placeholder="الرتبة"
                          type="text"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          :name="`promotionName${i}`"
                        />
                      </div>
                      <div class="mb-6 space-y-3">
                        <label
                          class="block text-lg font-medium text-pm"
                          :for="`promotionDate${i}`"
                        >
                          تاريخ الترقية
                        </label>
                        <Field
                          v-model="promotion.promotionDate"
                          class="bg-gray-50 border border-pm border-opacity-25 text-gray-500 text-lg rounded-md focus:ring-pm focus:border-pm block w-full p-3 px-5"
                          :name="`promotionDate${i}`"
                          rules="required"
                          placeholder="من"
                          type="date"
                        />
                        <ErrorMessage
                          class="text-red-600 text-lg"
                          component="div"
                          :name="`promotionDate${i}`"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </fieldset>
            </div>
            <div class="p-10">
              <button
                class="text-white bg-pm hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-pm focus:ring-opacity-25 font-medium rounded-3xl text-md px-5 py-3 text-center w-full"
                type="submit"
              >
                {{ isEdit ? "تعديل" : "اضافة" }} الاستمارة
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
import { Roles, PersonalInformationForm } from "@/services/types";
import * as yup from "yup";
import {
  postAdminRegisterUser,
  postFormAddForm,
  putFormPutFormId,
} from "@/services/services";
import PhPlus from "@/assets/icons/PhPlus.vue";
import PhTrash from "@/assets/icons/PhTrash.vue";
import {
  convertDatesTimeToDateFromObj,
  createNullableDateSchema,
} from "@/lib/utils";
import { logicAnd } from "@vueuse/core";

const isShow: Ref<boolean> = ref(false);
const isEdit: Ref<boolean> = ref(false);

const simpleSchema = yup.object().shape({
  statisticalNumber: yup.number().required("الرقم الاحصائي مطلوب"),
  rank: yup.string().required("الرتبة مطلوبة"),
  fullName: yup.string().required("الاسم مطلوب"),
  birthDate: yup.date().required("تاريخ الميلاد مطلوب"),
  course: yup.number().required("الدورة مطلوبة"),
  courseDate: yup.date().required("تاريخ الدورة مطلوب"),
  dateOfJoiningBadr: yup.date().required("تاريخ الالتحاق الى بدر مطلوب"),

  // academicAchievement

  academicAchievement: yup.string().required("التحصيل الدراسي مطلوب"),

  edCycleDateFrom: yup.string().nullable(),
  edCycleDateTo: createNullableDateSchema(
    "تاريخ الانتهاء مطلوب",
    "edCycleDateFrom"
  ),

  mccDateFrom: yup.string().nullable(),
  mccDateTo: createNullableDateSchema("تاريخ الانتهاء مطلوب", "mccDateFrom"),

  otcDateFrom: yup.string().nullable(),
  otcDateTo: createNullableDateSchema("تاريخ الانتهاء مطلوب", "otcDateFrom"),
});
const temp: PersonalInformationForm = {
  academicAchievement: {
    academicAchievement: "",
  },
  courses: [],
  promotions: [],
  birthDate: "",
  course: 0,
  courseDate: "",
  dateOfJoiningBadr: "",
  fullName: "",
  rank: "",
  statisticalNumber: 0,
};
const data: Ref<PersonalInformationForm> = ref(_.cloneDeep(temp));
const titleP: Ref<string> = ref("استمارة خط الخدمة");
const formID: Ref<string> = ref("");

const title = computed(() => {
  return titleP.value;
});

function removeCourse(index: number) {
  data.value.courses?.splice(index, 1);
}

function addCourse() {
  data.value.courses?.push({
    courseName: "",
    courseDateFrom: "",
    courseDateTo: "",
  });
}

function removePromotion(index: number) {
  data.value.promotions?.splice(index, 1);
}

function addPromotion() {
  data.value.promotions?.push({
    promotionName: "",
    promotionDate: "",
  });
}

function hide() {
  isShow.value = false;
  isEdit.value = false;
  formID.value = "";
  data.value = _.cloneDeep(temp);
}

async function submit() {
  try {
    if (isEdit.value) {
      await putFormPutFormId(formID.value, data.value);
    } else {
      await postFormAddForm(data.value);
    }
    hide();
    emitter.emit("refreshTables");
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  emitter.on("addForm", (_data: PersonalInformationForm | undefined) => {
    isShow.value = true;
    if (_data) {
      isEdit.value = true;
      const _temp: any = _.cloneDeep(_data);
      formID.value = _temp.id;
      // date only not time and timezone for all date fields in _temp
      convertDatesTimeToDateFromObj(_temp);
      data.value = _temp;
      titleP.value = "تعديل استمارة خط الخدمة";
    } else {
      isEdit.value = false;
      data.value = _.cloneDeep(temp);
      titleP.value = "اضافة استمارة خط الخدمة";
    }
  });
});
</script>

<style scoped></style>
