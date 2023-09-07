<template>
  <div class="container-fluid">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur
      non laboriosam quod at modi quis eaque delectus officia a quam, iure harum
      quasi sint eum amet, rerum quo nemo!
    </p>
    <div class="author">
      <h1>Creative by ME</h1>
      <div class="author-img">
        <img src="/img/person.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container-fluid {
  background: url(/img/banner_testmonial.png.webp) no-repeat center;
  background-size: cover;
  min-height: 64vh;
  padding: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

p {
  font-size: 2rem;
  color: var(--white-color);
  margin-bottom: 2rem;
}

.author {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author h1 {
  color: var(--pink-color);
  margin-bottom: 2rem;
}

.author-img {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-img img {
  height: 100%;
}
</style>
