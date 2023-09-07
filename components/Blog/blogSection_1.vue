<template>
  <section v-for="item in useBlog.blogItems" :key="item.i">
    <div class="card" v-if="item.isShow">
      <img :src="item.img" class="card-img-top" />
      <div class="card-body">
        <h1 class="card-title">
          Ukraine war: Drone attack on Pskov airbase from inside Russia - Kyiv
        </h1>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam
          nulla doloremque incidunt eos nemo fuga odit cupiditate expedita?
          Tenetur dolorem accusamus cum repellendus rem inventore animi fugiat
          amet incidunt.
        </p>
        <div class="card-status">
          <div class="card-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 232v-80"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M256 88V72M132 132l-12-12"
              />
              <circle
                cx="256"
                cy="272"
                r="32"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M256 96a176 176 0 10176 176A176 176 0 00256 96z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>

            <p>1 hour ago</p>
          </div>
          <div class="card-comment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <circle cx="160" cy="256" r="32" />
              <circle cx="256" cy="256" r="32" />
              <circle cx="352" cy="256" r="32" />
            </svg>

            <p>44 comments</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="control-btn">
    <button class="prev-btn" @click="useBlog.prevPage()">Prev</button>
    <button v-for="item in useBlog.maxPage" @click="useBlog.changePage(item)">
      {{ item }}
    </button>
    <button class="next-btn" @click="useBlog.nextPage()">Next</button>
  </div>
</template>

<script setup>
import { blogStore } from "@/stores/BlogStore";
const useBlog = blogStore();
</script>

<style scoped lang="scss">
.card {
  border: none;
  box-shadow: 0 0 15px 2px var(--shadow-color);
  margin-bottom: 4rem;
  .card-body {
    padding: 2rem;

    .card-text {
      font-size: 1.6rem;
      color: var(--text-light);
      margin: 2rem 0;
    }

    .card-status {
      display: flex;

      div {
        display: flex;
        align-items: center;

        svg {
          height: 2rem;
          margin-right: 1rem;
        }

        p {
          margin: 0 2rem 0 0;
          font-size: 1.4rem;
        }
      }
    }
  }
}

.control-btn {
  display: flex;
  justify-content: center;

  button {
    height: 5rem;
    width: 5rem;
    margin: 0 1rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 15px 2px var(--shadow-color);
    font-size: 1.6rem;
  }
}
</style>
