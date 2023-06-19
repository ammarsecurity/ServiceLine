<template>
  <div class="flex overflow-x-hidden min-h-screen">
    <!-- Sidebar -->
    <SideBar />
    <div class="w-full flex flex-col">
      <!-- Nav Bar -->
      <NavBar
        :role="user.role"
        :title="pageTitle"
        :username="user.userData?.name"
      />
      <div
        :class="`${$route.meta.noWPadding ? '' : 'px-10'} ${
          $route.meta.noHPadding ? '' : 'py-10'
        } h-full`"
      >
        <router-view />
      </div>
    </div>
    <AddUser />
    <AddForm />
    <PrintForm />
  </div>
</template>
<script setup>
// Components
import { useUserStore } from "@/stores/user";
import SideBar from "@/layouts/components/SideBar.vue";
import NavBar from "@/layouts/components/NavBar.vue";
import router from "@/router";
import { computed } from "vue";
import AddUser from "@/components/Modals/AddUser.vue";
import AddForm from "@/components/Modals/AddForm.vue";
import PrintForm from "@/components/Modals/PrintForm.vue";

const user = useUserStore();
const pageTitle = computed(() => router.currentRoute.value.meta.title);
</script>
<style scoped></style>
