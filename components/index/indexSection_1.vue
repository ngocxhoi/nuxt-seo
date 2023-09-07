<template>
  <section class="container-fluid px-0">
    <h1 class="">
      BoostUp Your Business & Get <br />
      Top Of Search Engine
    </h1>
    <button>Get Started</button>
    <img src="/img/illustration.png.webp" alt="" />
  </section>
</template>

<style scoped lang="scss">
.container-fluid {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 5rem;
  }

  button {
    background: linear-gradient(to right, var(--pink-color), var(--red-color));
    width: 16rem;
    height: 5rem;
    border: none;
    border-radius: 4rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--white-color);
    margin: 4rem 0;
  }

  img {
    width: 100%;
  }
}
</style>
