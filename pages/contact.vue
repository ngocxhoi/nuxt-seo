<template>
  <div class="container-fluid">
    <div class="tittle">
      <h1>Contact Us</h1>
      <p>Contact</p>
    </div>
    <ContactTheContact />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-fluid {
  padding: 8rem;

  .tittle {
    display: grid;
    place-content: center;
    text-align: center;
    height: 40vh;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }
  }
}

@media (max-width: 400px) {
  .container-fluid {
    padding: 8rem 1rem;
  }
}
</style>
