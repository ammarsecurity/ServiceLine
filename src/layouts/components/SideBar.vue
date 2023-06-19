<script>
// Icons
import PhHouse from "@/assets/icons/PhHouse.vue";
import PhFilesBack from "@/assets/icons/PhFilesBack.vue";
import PhUsersThree from "@/assets/icons/PhUsersThree.vue";
import PhGear from "@/assets/icons/PhGear.vue";
import PhPower from "@/assets/icons/PhPower.vue";
import PhUploadSimple from "@/assets/icons/PhUploadSimple.vue";
import IcOutlineUploadFile from "@/assets/icons/IcOutlineUploadFile.vue";
import PhChartPie from "@/assets/icons/PhChartPie.vue";
import PhListDashes from "@/assets/icons/PhListDashes.vue";
import PhUserList from "@/assets/icons/PhUserList.vue";
import PhListChecks from "@/assets/icons/PhListChecks.vue";
import PhTimer from "@/assets/icons/PhTimer.vue";
import PhTrash from "@/assets/icons/PhTrash.vue";
import PhBellRinging from "@/assets/icons/PhBellRinging.vue";
import PhArrowUp from "@/assets/icons/PhArrowUp.vue";
import PhArrowDown from "@/assets/icons/PhArrowDown.vue";
import PhX from "@/assets/icons/PhX.vue";
import PhSchool from "@/assets/icons/PhSchool.vue";
import PhTeacher from "@/assets/icons/PhTeacher.vue";
import PhFileTextDuotone from "@/assets/icons/PhFileTextDuotone.vue";
import PhList from "@/assets/icons/PhList.vue";
import PhChart from "@/assets/icons/PhChart.vue";
import { useUserStore } from "@/stores/user";
import NavLinks from "../navLinks";
import emitter from "tiny-emitter/instance";

export default {
  name: "SideBar",
  components: {
    PhSchool,
    PhTeacher,
    PhFileTextDuotone,
    PhList,
    PhChart,
    PhHouse,
    PhArrowUp,
    PhArrowDown,
    PhFilesBack,
    IcOutlineUploadFile,
    PhChartPie,
    PhBellRinging,
    PhListDashes,
    PhListChecks,
    PhUserList,
    PhTrash,
    PhX,
    PhTimer,
    PhUsersThree,
    PhGear,
    PhPower,
    PhUploadSimple,
  },
  data() {
    return {
      emitter,
      showSideMenu: false,
      showSub: {},
    };
  },
  setup() {
    const user = useUserStore();
    const navLinks = NavLinks(user.role);
    return {
      navLinks,
    };
  },
  watch: {
    $route() {
      // check route and show sub menu
      this.navLinks.forEach((link) => {
        if (link.isParent) {
          link.sub.forEach((sub) => {
            if (sub.to === "/" + this.$route.path.split("/")[1]) {
              this.showSub[link.title] = true;
            }
          });
        }
      });
    },
  },
  methods: {
    toggleSideMenu() {
      this.showSideMenu = !this.showSideMenu;
    },
  },
  mounted() {
    this.emitter.on("showSideMenu", () => {
      this.toggleSideMenu();
    });
  },
  created() {
    this.navLinks.forEach((link) => {
      if (link.isParent) {
        this.showSub[link.title] = false;
      }
    });
  },
};
</script>
<template>
  <div
    :class="`${
      showSideMenu ? '' : 'hidden'
    } h-screen lg:h-auto overflow-y-auto fixed lg:static z-[99] lg:flex flex-col py-14 min-w-[18vw] shadow-md bg-pm items-center lg:z-50  lg:w-auto`"
  >
    <div class="relative w-full">
      <RouterLink to="/">
        <img
          alt=""
          class="m-auto bg-offwhite rounded-full p-2"
          src="@/assets/images/logos/logo.png"
          width="150"
        />
      </RouterLink>
      <PhX
        v-if="showSideMenu"
        class="lg:hidden icon w-8 h-8 fill-black absolute top-0 left-0 cursor-pointer z-[50]"
        @click="showSideMenu = !showSideMenu"
      />
    </div>
    <ul class="flex flex-col mt-24 justify-start w-full gap-4 pr-[25.5%]">
      <!--      5.5rem-->
      <template v-for="link in navLinks" :key="link.title">
        <div
          v-if="link.isParent"
          class="flex justify-between items-center gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm [&>.flex>.icon]:hover:fill-pm hover:text-pm hover:bg-[#F3F4FF] transition-transition py-3 px-6 rounded-r-full cursor-pointer select-none"
          @click="showSub[link.title] = !showSub[link.title]"
        >
          <div class="flex gap-4">
            <component :is="link.icon" class="icon w-8 h-8 fill-offwhite">
            </component>
            {{ link.title }}
          </div>
          <ph-arrow-up
            v-if="showSub[link.title]"
            class="icon w-8 h-8 fill-offwhite h-5 w-5"
          >
          </ph-arrow-up>
          <ph-arrow-down v-else class="icon w-8 h-8 fill-offwhite h-5 w-5">
          </ph-arrow-down>
        </div>
        <div
          v-if="link.isParent && showSub[link.title]"
          class="flex gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm hover:text-pm transition-transition pr-5 rounded-r-full"
        >
          <ul
            v-if="showSub[link.title]"
            class="flex flex-col justify-start align-middle w-full gap-4"
          >
            <li v-for="sub in link.sub">
              <button
                v-if="sub.HaveFunCall"
                class="flex gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm hover:text-pm hover:bg-[#F3F4FF] transition-transition py-3 px-6 rounded-r-full items-center"
                @click.prevent="sub.funCall()"
              >
                <component :is="link.icon" class="icon w-8 h-8 fill-offwhite">
                </component>
                {{ sub.title }}
              </button>
              <RouterLink
                v-else
                :to="sub.to"
                class="flex gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm hover:text-pm hover:bg-[#F3F4FF] transition-transition py-3 px-6 rounded-r-full items-center"
                @click="showSideMenu = false"
              >
                <component :is="link.icon" class="icon w-8 h-8 fill-offwhite">
                </component>
                {{ sub.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <button
          v-if="link.HaveFunCall && !link.isParent"
          class="flex gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm hover:text-pm hover:bg-[#F3F4FF] transition-transition py-3 px-6 rounded-r-full items-center"
          @click.prevent="link.funCall()"
        >
          <component :is="link.icon" class="icon w-8 h-8 fill-offwhite">
          </component>
          {{ link.title }}
        </button>
        <RouterLink
          v-else-if="!link.isParent"
          :to="link.to"
          class="flex gap-2 font-medium text-[20px] text-offwhite [&>.icon]:hover:fill-pm hover:text-pm hover:bg-[#F3F4FF] transition-transition py-3 px-6 rounded-r-full items-center"
          @click="showSideMenu = false"
        >
          <component :is="link.icon" class="icon w-8 h-8 fill-offwhite">
          </component>
          {{ link.title }}
        </RouterLink>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #f3f4ff !important;
  color: var(--pm);
}

.router-link-active .icon {
  fill: var(--pm);
}
</style>
