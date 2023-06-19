<script>
import moment from "moment";
import emitter from "tiny-emitter/instance";
import {useUserStore} from "../../stores/user";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      emitter,
      user: useUserStore()
    }
  },
  methods: {
    moment,
    async goToNotification() {
      // const {data:{data}} = await this.$http.get(`/${this.user.apiName}/${this.user.apiName === 'PublicRelations' ? 'GetAllWaitRequest' : 'GetAllRequest'}`, {
      //   params: {
      //     requestNumber: this.data.requestNumber,
      //   }
      // });
      // if(data.length > 0 &&  !data[0].isRead){
      //   try {
      //     await axiosIns.post(`/Notification/UpdateNotification`, null, {
      //       params: {
      //         NotificationId: this.data?.id,
      //       }
      //     });
      //     emitter.emit('refrashNotifications')
      //   } catch (e) {
      //   }
      // }
      // emitter.emit('showViewRequsetInfo', data[0])
    }
  }
};
</script>
<template>
  <li
      class="flex flex-row lg:gap-4 gap-2 my-1 hover:bg-gray-100 p-4 rounded-md lg:w-full cursor-pointer shadow-sm border border-gray-200 relative"
  >
    <!--    @click="goToNotification"-->
    <!--    <img-->
    <!--      class="rounded-xl lg:rounded-2xl lg:h-16 lg:w-16 h-10 w-10 object-cover"-->
    <!--      src="@/assets/images/logos/requestbell.png"-->
    <!--    />-->
    <div class="w-full">
      <div class="flex justify-between items-center ">
        <!--        <div v-if="!data.isRead" class="bg-red-500 h-3 w-3 flex items-center justify-center text-white rounded-full absolute top-[-5px] right-[-5px]">-->
        <!--        </div>-->
        <h2 class="lg:text-xl text-base">{{ data.heading }}</h2>
        <!--        <h3 class="lg:text-xl text-base">{{ $t('رقم الطلب : {requestNumber}', {requestNumber: }) }}  </h3>-->
      </div>
      <div class="flex justify-between items-end">
        <h3 class="text-[15px] mt-2 text-lgray">
          {{ data.content }}
        </h3>
        <h3 class="text-[15px] mt-2 text-lgray " dir="ltr">
          <!--        {{ moment(data?.insertDate ?? data.date).format("YYYY-MM-DD hh:MM A") }}-->
        </h3>
      </div>
    </div>
  </li>
</template>
