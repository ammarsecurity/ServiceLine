import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axiosIns from "@/lib/http/http";
import { useToastStore } from "@/stores/toast";
import { TYPE } from "vue-toastification/src";

export const useUserStore = defineStore("user", () => {
  const userData = ref(
    localStorage.getItem("userData") !== null
      ? JSON.parse(localStorage.getItem("userData") as string)
      : null
  );
  const accessToken = ref(
    localStorage.getItem("accessToken") !== null
      ? localStorage.getItem("accessToken")
      : null
  );
  const role = computed(() => userData.value?.role);
  const isLoader = ref(false);
  const Toast = useToastStore();

  function setLoader(val: boolean) {
    isLoader.value = val;
  }

  function logout() {
    localStorage.clear();
    userData.value = null;
    accessToken.value = null;
    window.location.href = "/Login";
  }

  function setUserData(data: any) {
    userData.value = data;
    localStorage.setItem("userData", JSON.stringify(data));
  }

  function setAccessToken(token: string) {
    accessToken.value = token;
    localStorage.setItem("accessToken", token);
  }

  async function login(usernameOrEmail: string, password: string) {
    let isLogedIn = false;
    try {
      isLoader.value = true;
      if (usernameOrEmail && password) {
        const { data } = await axiosIns.post(`Auth/Login`, {
          usernameOrEmail,
          password,
        });
        Toast.showToast(data.message, TYPE.SUCCESS);
        setUserData(data.data);
        setAccessToken(data.data.token);
        isLogedIn = true;
      }
    } catch (err: any) {
      Toast.showToast(err?.response?.data?.message, TYPE.ERROR);
      isLogedIn = false;
    } finally {
      isLoader.value = false;
    }
    return isLogedIn;
  }
  function isLoggedIn() {
    if (typeof localStorage !== "undefined") {
      // const UserData = localStorage.getItem('userData')
      const token = localStorage.getItem("accessToken");
      return (
        // UserData != null &&
        token != null && token.length > 50
      );
    }
    return false;
  }

  return {
    userData,
    accessToken,
    logout,
    setUserData,
    setAccessToken,
    role,
    login,
    isLoader,
    setLoader,
    isLoggedIn,
  };
});
