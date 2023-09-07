<template>
  <div>
    <CaseStudy1 />
    <div class="learn-more">
      <a class="card-button btn">Learn More</a>
    </div>
    <TheBanner />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.learn-more {
  height: 20vh;
  display: grid;
  place-items: center;
}
.card-button {
  height: 4rem;
  width: 12rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-color);
  transition: all 0.4s ease;
  background-color: var(--red-light-color);

  &:hover {
    color: var(--white-color);
    background-color: var(--red-color);
  }
}
</style>
