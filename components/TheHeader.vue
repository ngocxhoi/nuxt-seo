<template>
  <nav class="navbar navbar-expand-sm bg-body-secondary">
    <div class="container-fluid mx-5">
      <RouterLink
        to="/"
        class="navbar-brand col-md-3"
        :class="{ 'is-active': headStore.arr[0] }"
        @click="headStore.changeActive(0)"
      >
        <img src="/img/logo.png.webp" alt="" />
      </RouterLink>
      <ul class="navbar-nav col-6 d-md-flex d-none">
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[0] }"
          @click="headStore.changeActive(0)"
        >
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[1] }"
          @click="headStore.changeActive(1)"
        >
          <RouterLink to="/mpage/about"> Pages </RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[2] }"
          @click="headStore.changeActive(2)"
        >
          <RouterLink to="/services"> Services </RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[3] }"
          @click="headStore.changeActive(3)"
        >
          <RouterLink to="/case_study"> CaseStudy </RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[4] }"
          @click="headStore.changeActive(4)"
        >
          <RouterLink to="/mblog/blog"> Blog </RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ 'is-active': headStore.arr[5] }"
          @click="headStore.changeActive(5)"
        >
          <RouterLink to="/contact"> Contact </RouterLink>
        </li>
      </ul>
      <div class="navbar-icon col-3 d-md-flex d-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
            fill-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
        </svg>
      </div>

      <div
        class="navbar-bar d-md-none d-block"
        data-bs-toggle="offcanvas"
        data-bs-target=".offcanvas"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M80 160h352M80 256h352M80 352h352"
          />
        </svg>
      </div>
    </div>
  </nav>
  <!-- offcanvas -->
  <div class="offcanvas offcanvas-end">
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
      ></button>
      <RouterLink
        to="/"
        class="navbar-brand col-md-3"
        :class="{ 'is-enble': headStore.arr[0] }"
        @click="headStore.changeActive(0)"
      >
        <img src="/img/logo.png.webp" alt="" />
      </RouterLink>
    </div>
    <div class="offcanvas-body">
      <ul class="bar-nav">
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[0] }"
          @click="headStore.changeActive[0]"
        >
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[1] }"
          @click="headStore.changeActive[1]"
        >
          <RouterLink to="/mpage/about"> Pages </RouterLink>
        </li>
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[2] }"
          @click="headStore.changeActive[2]"
        >
          <RouterLink to="/services"> Services </RouterLink>
        </li>
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[3] }"
          @click="headStore.changeActive[3]"
        >
          <RouterLink to="/case_study"> CaseStudy </RouterLink>
        </li>
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[4] }"
          @click="headStore.changeActive[4]"
        >
          <RouterLink to="/blog"> Blogs </RouterLink>
        </li>
        <li
          class="bar-item"
          :class="{ 'is-enble': headStore.arr[5] }"
          @click="headStore.changeActive[5]"
        >
          <RouterLink to="/contact"> Contact </RouterLink>
        </li>
      </ul>
      <form action="#">
        <input type="text" placeholder="Search in page" />
        <button>Search</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@/stores/HeadStore";
const headStore = useHead();
</script>

<style scoped lang="scss">
nav {
  height: 7rem;

  .navbar-nav {
    display: flex;
    justify-content: space-around;

    .nav-item {
      a {
        font-size: 1.6rem;
        text-decoration: none;
        color: black;
      }

      &.is-active {
        a {
          color: var(--red-color);
        }
      }
    }
  }

  .navbar-icon {
    display: flex;
    justify-content: flex-end;

    svg {
      height: 3rem;
      margin-left: 2rem;
    }
  }

  .navbar-bar {
    svg {
      height: 3rem;
    }
  }
}

.offcanvas {
  width: 34rem;
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  .offcanvas-header {
    display: flex;
    align-items: center;
    margin: 2rem 0;

    img {
      height: 3.4rem;
    }
  }

  .offcanvas-body {
    ul {
      list-style: none;

      li {
        text-align: center;
        margin: 1rem 0;

        a {
          color: var(--black-color);
          text-decoration: none;
          font-size: 1.6rem;
        }

        &.is-enble {
          a {
            color: var(--red-color);
          }
        }
      }
    }

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        height: 4rem;
        width: 100%;
        padding: 1rem;
        outline: none;
        font-size: 1.6rem;
      }

      button {
        height: 4rem;
        width: 10rem;
        margin-top: 1rem;
        border: none;
        border-radius: 4rem;
        background-color: var(--pink-color);
        color: var(--white-color);
        font-size: 1.6rem;
      }
    }
  }
}
</style>
