<template>
  <div class="p-5 bg-offwhite h-[calc(100vh-1px)] overflow-auto">
    <div>
      <div class="font-bold text-center text-title">بسم الله الرحمن الرحيم</div>
      <div class="font-bold text-2xl text-center mb-3 text-pm">
        ولقد نصركم الله ببدر
      </div>
      <div class="font-bold text-2xl text-center text-pm2">
        استمارة خط الخدمة لضباط بدر
      </div>
    </div>
    <div class="flex flex-col gap-4 justify-between h-[calc(100vh-12rem)]">
      <div class="h-full">
        <div class="grid grid-cols-4 mt-5 print-contener text-gray">
          <div>المعلومات الشخصية</div>
          <div>التحصيلات الدراسية</div>
          <div>الدورات</div>
          <div>الترفيعات</div>
        </div>
        <div
          class="grid grid-cols-4 print-contener-content h-[calc(100%-6rem)]"
        >
          <div
            class="flex flex-col justify-between gap-2 bg-white border border-lgray"
          >
            <div class="flex flex-col gap-2 p-2">
              <div>
                الرقم الاحصائي :
                <span>{{ data?.statisticalNumber }}</span>
              </div>
              <div>
                الرتبة :
                <span>
                  {{ data?.rank }}
                </span>
              </div>
              <div>
                الاسم الثلاثي واللقب :
                <span>
                  {{ data?.fullName }}
                </span>
              </div>
              <div>
                المواليد :
                <span dir="auto">
                  {{
                    data?.birthDate
                      ? moment(data?.birthDate).format("YYYY-M-DD")
                      : ""
                  }}
                </span>
              </div>
              <div>
                الدورة :
                <span dir="auto">
                  {{ data?.course }}
                </span>
              </div>
              <div>
                تاريخ الدورة :
                <span dir="auto">
                  {{
                    data?.courseDate
                      ? moment(data?.courseDate).format("YYYY-M-DD")
                      : ""
                  }}
                </span>
              </div>
            </div>
            <div class="h-[40%]">
              <div class="border-t border-b border-black p-2">
                <div class="text-center">الملاحظات</div>
              </div>
              <div class="p-2" dir="auto">{{ data?.notes }}</div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between gap-2 bg-white border border-lgray"
          >
            <div class="flex flex-col gap-2 p-2">
              <div>
                التحصيل الدراسي :
                <span>{{
                  data?.academicAchievement?.academicAchievement
                }}</span>
              </div>
              <div>
                الدورة التعليمية النقويمية للمرحلة الاعدادية :
                <div class="flex gap-3">
                  <div>
                    من :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.edCycleDateFrom
                          ? moment(
                              data?.academicAchievement?.edCycleDateFrom
                            ).format("YYYY-M-DD")
                          : ""
                      }}
                    </span>
                  </div>
                  <div>
                    الى :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.edCycleDateTo
                          ? moment(
                              data?.academicAchievement?.edCycleDateTo
                            ).format("YYYY-M-DD")
                          : ""
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                دورة الكلية العسكرية :
                <div class="flex gap-3">
                  <div>
                    من :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.mccDateFrom
                          ? moment(
                              data?.academicAchievement?.mccDateFrom
                            ).format("YYYY-M-DD")
                          : ""
                      }}
                    </span>
                  </div>
                  <div>
                    الى :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.mccDateTo
                          ? moment(data?.academicAchievement?.mccDateTo).format(
                              "YYYY-M-DD"
                            )
                          : ""
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                دورة تاهيل الضباط :
                <div class="flex gap-3">
                  <div>
                    من :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.otcDateFrom
                          ? moment(
                              data?.academicAchievement?.otcDateFrom
                            ).format("YYYY-M-DD")
                          : ""
                      }}
                    </span>
                  </div>
                  <div>
                    الى :
                    <span dir="auto">
                      {{
                        data?.academicAchievement?.otcDateTo
                          ? moment(data?.academicAchievement?.otcDateTo).format(
                              "YYYY-M-DD"
                            )
                          : ""
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-[40%]">
              <div class="border-t border-b border-black p-2">
                <div class="text-center">
                  تاريخ الالتحاق الى بدر
                  <span dir="auto">
                    {{
                      data?.dateOfJoiningBadr
                        ? moment(data?.dateOfJoiningBadr).format("YYYY-M-DD")
                        : ""
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2 flex flex-col gap-2 bg-white border border-lgray">
            <div v-for="course in data.courses" :key="course.id">
              {{ course.courseName }}
              <div class="flex gap-3">
                <div>
                  من :
                  <span dir="auto">
                    {{
                      course.courseDateFrom
                        ? moment(course.courseDateFrom).format("YYYY-M-DD")
                        : ""
                    }}
                  </span>
                </div>
                <div>
                  الى :
                  <span dir="auto">
                    {{
                      course.courseDateTo
                        ? moment(course.courseDateTo).format("YYYY-M-DD")
                        : ""
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="p-2 px-5 flex flex-col gap-2 bg-white border border-lgray"
          >
            <div
              v-for="promotion in data.promotions"
              :key="promotion.id"
              class="flex justify-between"
            >
              <div>بتاريخ</div>
              <span dir="auto">
                {{
                  promotion.promotionDate
                    ? moment(promotion.promotionDate).format("YYYY-M-DD")
                    : ""
                }}
              </span>
              <div>
                {{ promotion.promotionName }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between px-5 text-blue">
        <span>الادارة شؤون الافراد</span>
        <div>الامين العام</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { PersonalInformation } from "@/services/types";
import { getFormGetFormId, getFormGetManyForms } from "@/services/services";
import moment from "moment";
import { useRoute } from "vue-router";

const data: Ref<PersonalInformation> = ref({} as PersonalInformation);

const props = defineProps<{
  id: string;
}>();
const route = useRoute();
onMounted(async () => {
  const formID = route.params.formID;
  data.value = (await getFormGetFormId(props.id ?? formID)).data
    .data as PersonalInformation;
});
</script>

<style scoped></style>
