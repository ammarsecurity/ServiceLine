<template>
  <div class="flex flex-col gap-5">
    <div class="grid grid-cols-12">
      <div
        class="flex mb-12 items-center flex-wrap gap-3 col-span-10"
        :class="{
          'col-span-10': user.role !== 'Viewer',
          'col-span-12': user.role === 'Viewer',
        }"
      >
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">الرقم الاحصائي:</div>
          <input
            v-model="filters.statisticalNumber"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="الرقم الاحصائي"
            type="text"
          />
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">الرتبة :</div>
          <input
            v-model="filters.rank"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="الرتبة"
            type="text"
          />
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">الاسم الثلاثي واللقب:</div>
          <input
            v-model="filters.fullName"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="الاسم الثلاثي واللقب"
            type="text"
          />
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">المواليد:</div>
          <input
            v-model="filters.birthDate"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="المواليد"
            type="date"
          />
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">تاريخ الالتحاق الى بدر:</div>
          <input
            v-model="filters.dateOfJoiningBadr"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="تاريخ الالتحاق الى بدر"
            type="date"
          />
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="fill-pm text-md">الدورة:</div>
          <input
            v-model="filters.course"
            class="p-3 rounded-3xl w-[18rem] outline-pm"
            placeholder="الدورة"
            type="number"
          />
        </div>
        <div class="flex flex-col justify-end gap-4">
          <div class="fill-pm text-md">&nbsp;</div>
          <button
            class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-4 px-8"
            @click="resetFilters"
          >
            اعادة تعيين
          </button>
        </div>
      </div>
      <div
        class="flex flex-col items-end gap-4 col-span-2 w-full"
        v-if="user.role !== 'Viewer'"
      >
        <div class="fill-pm text-md">&nbsp;</div>
        <button
          v-if="user.role !== 'Viewer'"
          class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-4 px-8"
          @click="addForm"
        >
          اضافة خط خدمة
        </button>
      </div>
    </div>
    <div class="lg:max-w-[calc(100vw-20rem)] overflow-auto">
      <Table :headers="headers" :items="forms" :loading="isLoading">
        <template #birthDate="{ item }">
          {{ moment(item.value.birthDate).format("DD/MM/YYYY") }}
        </template>
        <template #courseDate="{ item }">
          {{ moment(item.value.courseDate).format("DD/MM/YYYY") }}
        </template>
        <template #dateOfJoiningBadr="{ item }">
          {{ moment(item.value.dateOfJoiningBadr).format("DD/MM/YYYY") }}
        </template>
        <template #createdAt="{ item }">
          {{ moment(item.value.createdAt).format("DD/MM/YYYY") }}
        </template>
        <template #actions="{ item }">
          <div class="flex gap-2">
            <!--          print-->
            <button
              class="text-blue-500 text-sm font-bold text-center w-full bg-blue-500 bg-opacity-10 rounded-3xl py-3 px-2"
              @click="printForm(item.value.id)"
            >
              طباعة
            </button>
            <button
              v-if="user.role !== 'Viewer'"
              class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-3 px-2"
              @click="editForm(item.value)"
            >
              تعديل
            </button>
            <button
              v-if="user.role !== 'Viewer'"
              class="text-red-500 text-sm font-bold text-center w-full bg-red-500 bg-opacity-10 rounded-3xl py-3 px-2"
              @click="deleteForm(item.value.id)"
            >
              حذف
            </button>
          </div>
        </template>
      </Table>
    </div>
    <br />
    <Pagination
      :current-page="pagination.currentPage"
      :has-more-pages="pagination.hasMorePages"
      :per-page="pagination.perPage"
      :total="pagination.total"
      @pagechanged="showMore"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  deleteFormDeleteFormId,
  getFormGetManyForms,
} from "@/services/services";
import { inject, onMounted, reactive, Ref, ref, watch } from "vue";
import {
  GetFormGetManyFormsQueryParams,
  PersonalInformation,
  UserDto,
} from "@/services/types";
import Table from "@/components/Table.vue";
import emitter from "@/emitter";
import moment from "moment";
import { useUserStore } from "@/stores/user";
import Pagination from "@/components/Pagination.vue";

const user = useUserStore();
const isLoading: Ref<boolean> = ref(false);
const forms: Ref<PersonalInformation[] | undefined> = ref([]);
const headers = [
  {
    label: "الرقم الاحصائي",
    field: "statisticalNumber",
  },
  {
    label: "الرتبة",
    field: "rank",
  },
  {
    label: "الاسم الثلاثي واللقب",
    field: "fullName",
  },
  {
    label: "المواليد",
    field: "birthDate",
  },
  {
    label: "الدورة",
    field: "course",
  },
  {
    label: "تاريخ الدورة",
    field: "courseDate",
  },
  {
    label: "تاريخ الالتحاق الى بدر",
    field: "dateOfJoiningBadr",
  },
  {
    label: "تاريخ الاضافة",
    field: "createdAt",
  },
  {
    label: "الاجراءات",
    field: "actions",
  },
];

const pagination = reactive({
  total: 0,
  perPage: 10,
  currentPage: 1,
  hasMorePages: true,
});

const filters: GetFormGetManyFormsQueryParams = reactive(
  {} as GetFormGetManyFormsQueryParams
);

const swal: any = inject("$swal");
const getForms = async (params: GetFormGetManyFormsQueryParams) => {
  try {
    params = {
      ...params,
      Page: pagination.currentPage,
      PageSize: pagination.perPage,
    };
    isLoading.value = true;
    const data = await getFormGetManyForms(params);
    pagination.total = data.data.total as number;
    forms.value = data.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
async function showMore(page: number) {
  pagination.currentPage = page;
  await getForms(filters);
}
async function resetFilters() {
  for (const key in filters) {
    (filters as any)[key] = null;
  }
  await getForms(filters);
}

watch(
  filters,
  async (val: GetFormGetManyFormsQueryParams) => {
    await getForms(val);
  },
  { deep: true }
);
const addForm = () => {
  emitter.emit("addForm");
};
const editForm = (data: any) => {
  emitter.emit("addForm", data);
};
const printForm = (id: string) => {
  emitter.emit("printForm", id);
};
const deleteForm = async (id: string) => {
  try {
    // sweet alert ask if sure
    const { isConfirmed } = await swal.fire({
      title: "هل انت متأكد؟",
      text: "لن تتمكن من استرجاع هذا السجل!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، احذفه!",
      cancelButtonText: "لا، الغاء!",
    });
    if (isConfirmed) {
      await deleteFormDeleteFormId(id);
      await getForms();
      // sweet alert success
      await swal.fire("تم الحذف!", "تم حذف السجل بنجاح.", "success");
    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getForms();
  emitter.on("refreshTables", getForms);
});
</script>

<style scoped></style>
