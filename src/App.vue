<script lang="ts">
import Loader from "@/components/Loader.vue";
import LayoutFull from "@/layouts/full/LayoutFull.vue";
import VerticalLayout from "@/layouts/vertical/VerticalLayout.vue";

import emitter from "@/emitter";
import { useToast } from "vue-toastification";
import { useToastStore } from "@/stores/toast";
import { useUserStore } from "@/stores/user";

const toast = useToast();
export default {
  components: { VerticalLayout, LayoutFull, Loader },
  watch: {
    showToast(value: boolean) {
      if (value) {
        const Toast = useToastStore();
        (toast as any)[Toast.type as string](Toast.msg, {
          position: "top-left",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
  },
  computed: {
    showToast() {
      const Toast = useToastStore();
      return Toast.show;
    },
    isLoader() {
      const user = useUserStore();
      return user.isLoader;
    },
    layout() {
      if (this.$route.meta.layout === "full") return "layout-full";
      return `vertical-layout`;
    },
  },
};
</script>

<template>
  <Loader v-if="isLoader" />
  <component :is="layout">
    <router-view />
  </component>
  <div
    class="fixed bottom-5 left-5 z-[9999999] opacity-[65%] pointer-events-none"
    v-if="$route.name !== 'print'"
  >
    <img src="@/assets/images/logos/1.png" class="w-60" alt="Tatwer Logo" />
  </div>
</template>

<style scoped></style>
