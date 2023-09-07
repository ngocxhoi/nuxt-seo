<template>
  <div class="container-fluid">
    <div class="row title">
      <h1>Case Study</h1>
      <p>Home / Case Study</p>
    </div>
    <div class="list-card">
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
      <div class="card">
        <img src="/img/1.png.webp" alt="" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">Custome Design</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            tempora!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-fluid {
  padding: 8rem;

  .title {
    height: 20vh;
    text-align: center;
    margin-bottom: 8rem;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  .list-card {
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 32%;
      margin: 1.5rem 0;
      border-radius: 1rem;

      .card-body {
        margin: 2rem 0;
        text-align: center;

        .card-text {
          font-size: 1.6rem;
          color: var(--text-light);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 8rem 4rem;
    .card {
      width: 47% !important;
    }
  }
}

@media (max-width: 576px) {
  .card {
    width: 100% !important;
  }
}

@media (max-width: 400px) {
  .container-fluid {
    padding: 8rem 1rem;
  }
}
</style>
