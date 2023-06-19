<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between">
      <!--      <div class="flex gap-4">-->
      <!--        <div class="relative">-->
      <!--          <div class="fill-pm absolute top-3 right-5">من:</div>-->
      <!--          <input-->
      <!--            class="p-3 rounded-3xl w-[18rem] outline-pm"-->
      <!--            placeholder="من تاريخ"-->
      <!--            type="date"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="relative">-->
      <!--          <div class="fill-pm absolute top-3 right-5">الى:</div>-->
      <!--          <input-->
      <!--            class="p-3 rounded-3xl w-[18rem] outline-pm"-->
      <!--            placeholder="الى تاريخ"-->
      <!--            type="date"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="relative">-->
      <!--          <PhSearch class="fill-pm absolute top-4 right-5" />-->
      <!--          <input-->
      <!--            class="p-3 rounded-3xl w-[18rem] outline-pm"-->
      <!--            placeholder="رقم الاستبيان"-->
      <!--            type="search"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <button-->
      <!--            class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-4 px-8"-->
      <!--            @click="resetFilters"-->
      <!--          >-->
      <!--            اعادة تعيين-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="flex gap-4">
        <!--         add new user button-->
        <button
          class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-4 px-8"
          @click="addUser"
        >
          اضافة مستخدم جديد
        </button>
      </div>
    </div>
    <Table :headers="headers" :items="users" :loading="isLoading">
      <template #actions="{ item }">
        <div class="flex gap-2">
          <button
            class="text-pm text-sm font-bold text-center w-full bg-pm bg-opacity-10 rounded-3xl py-4 px-2"
          >
            تعديل
          </button>
          <button
            class="text-red-500 text-sm font-bold text-center w-full bg-red-500 bg-opacity-10 rounded-3xl py-4 px-2"
          >
            حذف
          </button>
        </div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { getAdminGetAllUsers } from "@/services/services";
import { onMounted, Ref, ref } from "vue";
import { UserDto } from "@/services/types";
import Table from "@/components/Table.vue";
import emitter from "@/emitter";

const isLoading: Ref<boolean> = ref(false);
const users: Ref<UserDto[] | undefined> = ref([]);
const headers = [
  {
    label: "اسم استمارة خط الخدمة",
    field: "name",
  },
  {
    label: "البريد الالكتروني",
    field: "email",
  },
  {
    label: "الصلاحية",
    field: "role",
  },
  // {
  //   label: "",
  //   field: "actions",
  // },
];
const getUsers = async () => {
  try {
    isLoading.value = true;
    const data = await getAdminGetAllUsers();
    users.value = data.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

const addUser = () => {
  emitter.emit("addUser");
};

onMounted(() => {
  getUsers();
  emitter.on("refreshTables", getUsers);
});
</script>

<style scoped></style>
