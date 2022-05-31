<template>
    <div class="swiperCom">
      <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
          :pagination="{
      clickable: true,
    }"

          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide><img src="http://p1.music.126.net/qquMeBBQvPwf3K8Um1Ho3Q==/109951167348390248.jpg?imageView&quality=89" /></swiper-slide>
        <swiper-slide><img src="http://p1.music.126.net/uUIYt20rH8Ly244EI7eazw==/109951167348399709.jpg?imageView&quality=89" /></swiper-slide>
        <swiper-slide><img src="http://p1.music.126.net/c_ALwehDeaIgZuIRiAVXrw==/109951167348412503.jpg?imageView&quality=89" /></swiper-slide>
        <swiper-slide><img src="http://p1.music.126.net/ltV79cxZvZKroIVhIa7Lhg==/109951167349439196.jpg?imageView&quality=89" /></swiper-slide>
      </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },

}
</script>

<style lang="less" >
  .swiperCom{
    width: 100%;
    height: 19%;
    position: absolute;
    top: 1.5rem;
    left: 0;
    z-index: -1;
    .swiper {
      margin-top: 1rem;
      width: 95%;
      height: 95%;
      border-radius: 10px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      border-radius: 10px;
    }
    .swiper-pagination-bullet-active{
      background-color: #ff1154;
    }
  }

</style>