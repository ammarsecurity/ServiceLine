import { defineStore } from "pinia";
import { TYPE } from "vue-toastification/src/ts/constants";
import { ref, Ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const msg: Ref<string> = ref("");
  const type: Ref<TYPE> = ref(TYPE.DEFAULT);
  const show: Ref<boolean> = ref(false);
  let toastTypes = TYPE;
  function showToast(_msg: string, _type: TYPE = toastTypes.DEFAULT) {
    msg.value = _msg;
    type.value = _type;
    show.value = true;
    // set 5000ms timeout and hide toast
    setTimeout(() => {
      show.value = false;
      msg.value = "";
      type.value = TYPE.DEFAULT;
    });
  }

  return { showToast, msg, type, toastTypes, show };
});
