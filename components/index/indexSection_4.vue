<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Our Selected Case Study</h1>
      <p>
        Esteem spirit temper too say adieus who direct esteem. It esteems <br />
        luckily or picture placing drawing.
      </p>
    </div>
    <div class="row carousel">
      <Swiper
        :modules="[SwiperPagination]"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          '576': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }"
      >
        <SwiperSlide class="card" v-for="slide in 9" :key="slide">
          <img src="/img/1.png.webp" alt="" class="card-img-top" />
          <div class="card-body bg-dark user-select-none">
            <h1 class="card-title">UI/UX title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, amet!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-fluid {
  padding: 8rem;
  background: url(/img/study_banner.png.webp) no-repeat center;
  background-size: 100% 100%;

  .row {
    text-align: center;
    margin: 4rem 0;

    h1 {
      font-size: 4rem;
      color: var(--white-color);
    }

    p {
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  .carousel {
    min-height: 70vh;

    .swiper {
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #fff;
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          background-color: var(--pagination) !important;
        }
        .swiper-pagination-bullet-active-main {
          padding: 0 1rem;
          background-color: var(--pagination-active) !important;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 8rem 4rem;
  }
}

@media (max-width: 400px) {
  .container-fluid {
    padding: 8rem 1rem;
  }
}
</style>
