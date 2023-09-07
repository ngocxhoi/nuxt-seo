<template>
  <h1>Get in Touch</h1>
  <div class="row">
    <form action="#" name="" class="area col-lg-8 col-md-7 col-12">
      <textarea
        name=""
        placeholder="Enter your message"
        class="col-12"
      ></textarea>
      <div class="user-info col-12">
        <input type="text" placeholder="Enter your name" class="col-5" />
        <div class="col-2"></div>
        <input type="text" placeholder="Enter your address" class="col-5" />
      </div>
      <input type="text" placeholder="Enter your Subject" class="col-12" />
      <button class="btn">Send Message</button>
    </form>
    <div class="address-area col-lg-4 col-md-5 col-12">
      <div class="address">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
        <div class="address-info">
          <h3>HaNoi, VietNam</h3>
          <p>Condominium</p>
        </div>
      </div>
      <div class="address">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <rect
            x="48"
            y="96"
            width="416"
            height="320"
            rx="40"
            ry="40"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M112 160l144 112 144-112"
          />
        </svg>
        <div class="address-mail">
          <h3>nxh20xx@gmail.com</h3>
          <p>Send me at any time you need</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.area {
  textarea {
    min-height: 30vh;
    padding: 1rem;
    font-size: 1.5rem;
    margin: 1rem 0;
    outline: none;
  }

  input {
    margin: 1rem 0;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1.5rem;
    outline: none;
  }

  .user-info {
    display: flex;
  }

  button {
    height: 5rem;
    width: 14rem;
    border: 1px solid var(--red-color);
    color: var(--red-color);
    font-size: 1.5rem;
    margin: 1rem 0;
  }
}

.address-area {
  padding: 0 2rem;

  .address {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    svg {
      height: 3.4rem;
      margin-right: 2rem;
    }

    p {
      font-size: 1.4rem;
      color: var(--text-light);
    }
  }
}

@media (max-width: 400px) {
  .container-fluid {
    padding: 8rem 1rem;
  }
}
</style>
