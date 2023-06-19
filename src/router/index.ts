import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { useUserStore } from "@/stores/user";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import PdfPrint from "@/views/pdfPrint.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Login",
      name: "Login",
      meta: { layout: "full" },
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "استمارات خط الخدمة",
        // noWPadding: true,
        // noHPadding: true,
        // noTitle: true,
      },
    },
    {
      path: "/Users",
      name: "Users",
      component: Users,
      meta: {
        title: "استمارة خط الخدمةين",
      },
    },
    {
      path: "/print/:formID",
      name: "print",
      component: PdfPrint,
      meta: { layout: "full" },
    },
  ],
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const user = useUserStore();
    // window scroll to top
    window.scrollTo(0, 0);
    if (to.name !== "Login" && !user.isLoggedIn()) {
      return next({ name: "Login" });
    } else if (to.name === "Login" && user.isLoggedIn()) {
      return next({ name: "home" });
    } else return next();
  }
);

export default router;
