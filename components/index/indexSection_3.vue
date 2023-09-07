<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-12">
        <img src="/img/man.png.webp" />
      </div>
      <div class="col-md-6 col-12">
        <h1>We are an SEO company that specializes in developing.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quas
          totam assumenda, fugiat sit fuga ratione omnis distinctio suscipit
          sequi eveniet laborum porro quisquam quod debitis repellat
          reprehenderit doloribus facere!
        </p>
        <button>About Us</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-fluid {
  padding: 8rem;

  .row {
    img {
      width: 90%;
      min-width: 36rem;
    }

    div {
      h1 {
        font-size: 4rem;
        margin-top: 3rem;
      }

      p {
        font-size: 1.7rem;
        margin: 3rem 0;
        color: var(--text-light);
      }

      button {
        height: 5rem;
        width: 12rem;
        background-color: var(--pink-color);
        font-size: 1.6rem;
        border: none;
        border-radius: 4rem;
        transition: all 0.4s ease;

        &:hover {
          background-color: var(--red-color);
          color: var(--white-color);
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
