<script setup>
/* --------------------------------- Imports -------------------------------- */
// Icons
import PhBellRinging from "@/assets/icons/PhBellRinging.vue";
import PhList from "@/assets/icons/PhList.vue";
import { useUserStore } from "@/stores/user";
import { onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
// import NotificationCard from "@/components/cards/NotificationCard.vue";
import emitter from "tiny-emitter/instance";
import notificationSound from "@/assets/sounds/notification.mp3";
import NotificationCard from "@/layouts/components/NotificationCard.vue";
/* ---------------------------------- Index --------------------------------- */
defineProps({
  title: String,
  username: String,
  role: String,
});

const user = useUserStore();
const dropdown = ref(null);
const nBtn = ref(null);
const dBtn = ref(null);
const notifications = ref([]);
const notification = ref(null);
const showDropdown = ref(false);
const showNotifications = ref(false);
onClickOutside((dropdown, dBtn), () => (showDropdown.value = false));
onClickOutside((notification, nBtn), () => (showNotifications.value = false));
const toggleOff = () => {
  showDropdown.value = !showDropdown.value;
};
const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};
const logout = () => {
  user.logout();
};
emitter.on("newNotify", (data) => {
  // add new data as first element on notifications and remove last on if length > 10
  const temp = notifications.value;

  if (temp.length === 10) {
    temp.pop();
  }
  temp.unshift(data);
  notifications.value = temp;
  new Audio(notificationSound).play();
});

function showSideMenu() {
  emitter.emit("showSideMenu");
}

// const newNotifyCount = computed(() => {
//   return notifications.value.filter((item) => !item.isRead).length
// })

// async function ReadAll() {
//   // get all notification is unread and read them
//   const unread = notifications.value.filter((item) => !item.isRead)
//   try {
//     await axiosIns.post(`/Notification/UpdateNotificationList`, unread.map(e => e.id));
//   } catch (e) {
//   }
//   notifications.value = notifications.value.map((item) => {
//     return {...item, isRead: true}
//   })
// }
//
// async function getNotifications() {
//   try {
//     const {data: {data}} = await axiosIns.get(`/Notification/GetNotification`, {
//       params: {
//         userType: user.role,
//         userId: user.role === 'Supervisor' || user.role === 'Cordinter' || user.role === 'Auditor' ? user.userData.id : null,
//       }
//     });
//     notifications.value = data
//   } catch (e) {
//   }
// }

emitter.on("refrashNotifications", () => {
  getNotifications();
});
onMounted(async () => {
  // await getNotifications()
});
</script>

<template>
  <nav class="py-8 px-2 lg:px-10 pb-0 lg:pb-0 w-full z-50 relative">
    <ul class="flex items-start justify-between">
      <li class="hidden lg:flex cursor-default pt-3">
        <a
          v-if="!$route.meta.noTitle"
          class="text-3xl font-bold transition-transition cursor-default text-title font-bold flex gap-4"
          href=""
        >
          {{ title }}
        </a>
      </li>
      <li class="lg:hidden flex cursor-default">
        <div class="cursor-pointer" @click="showSideMenu">
          <PhList class="h-10 w-10" />
        </div>
      </li>
      <div class="flex gap-10 items-center">
        <li class="flex gap-4 items-center">
          <div>
            <div
              ref="dBtn"
              class="text-white select-none cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-4 py-2.5 text-left"
              @click="toggleOff"
            >
              <div class="flex justify-between items-center">
                <div dir="auto">
                  <h2 class="text-xl font-medium text-title">{{ username }}</h2>
                  <h3 class="text-xl text-gray3 font-light">{{ role }}</h3>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            class="hidden lg:block w-[3.5rem] h-[3.5rem] rounded-full border"
            src="@/assets/s_avatar.jpg"
          />
          <!-- Dropdown menu -->
          <div
            v-if="showDropdown"
            ref="dropdown"
            class="z-10 w-[11rem] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block rounded-md border shadow-sm"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              transform: translate(25px, 95px);
            "
          >
            <ul
              aria-labelledby="dropdownDefault"
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
            >
              <li>
                <a
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  @click.prevent="logout"
                >
                  تسجيل خروج
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li
          ref="nBtn"
          class="flex justify-center gap-4 items-center rounded-full bg-white shadow-md relative cursor-pointer w-[3.5rem] h-[3.5rem] hidden"
          @click="toggleNotifications"
        >
          <div
            v-if="notifications.length > 0"
            class="bg-[#4D44B5] h-2 w-2 flex items-center justify-center text-white rounded-full absolute top-[10px] right-[10px]"
          ></div>
          <div
            class="text-white select-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-left"
          >
            <div class="flex justify-between items-center">
              <PhBellRinging class="w-8 h-8 fill-gray3" />
            </div>
          </div>
          <!-- Dropdown menu -->
          <div
            v-if="showNotifications"
            ref="notification"
            class="z-10 w-[35rem] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block rounded-md border shadow-sm px-2 max-h-[30rem] overflow-y-auto"
            style="
              position: absolute;
              inset: 0px auto auto 0px;
              margin: 0px;
              top: 86px;
              left: 0px;
              width: max-content;
            "
          >
            <ul
              aria-labelledby="dropdownDefault"
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
            >
              <li class="max-w-md">
                <div
                  v-if="notifications.length === 0"
                  class="text-center my-[5rem] px-10"
                >
                  <h1 class="text-3xl">لاتوجد اشعارات</h1>
                </div>
                <NotificationCard
                  v-for="(data, i) in notifications"
                  :key="i"
                  :data="data"
                />
              </li>
            </ul>
          </div>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped></style>
