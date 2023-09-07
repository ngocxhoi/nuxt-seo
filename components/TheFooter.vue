<template>
  <div class="container-fluid">
    <div class="connect-me">
      <h1>
        Let's Start your project,
        <strong>Mail To Me</strong>
      </h1>
      <div>
        <h1>(+84)336334088</h1>
        <span>nxh20xx@gmail.com</span>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-4 col-12 logo">
        <img src="/img/footer_logo.png.webp" alt="" />
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloribus quia aliquam voluptates distinctio nisi, iste unde dolorum
          rem quod voluptate quae incidunt quos deserunt corrupti dolorem
          excepturi labore? Nobis!</span
        >
        <div class="icon"></div>
      </div>
      <div class="col-md-2 col-sm-6 col-12 link">
        <h2>Services</h2>
        <ul>
          <li>Marketing & SEO</li>
          <li>Startup</li>
          <li>Finance</li>
          <li>Food</li>
          <li>Tracvel</li>
        </ul>
      </div>
      <div class="col-md-2 col-sm-6 col-12 link">
        <h2>Usefull</h2>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Appointment</li>
        </ul>
      </div>
      <div class="col-md-4 col-12 form">
        <h2>Subscribe</h2>
        <form action="#">
          <input type="email" placeholder="Enter your mail" />
          <button>Subscribe</button>
        </form>
        <span
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
          ducimus?</span
        >
      </div>
    </div>
    <hr />
    <div class="row create">
      <p>Create and Coppy by <strong>NXH</strong></p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-fluid {
  padding: 0 8rem;
  background-color: var(--bg-color);

  .connect-me {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    height: 16rem;
    text-align: center;

    h1 {
      color: var(--white-color);
      font-size: 3.4rem;

      strong {
        color: var(--pink-color);
      }
    }

    span {
      color: var(--white-color);
      font-size: 1.4rem;
    }
  }

  hr {
    color: var(--white-color);
  }

  .row {
    padding: 4rem 0;

    div {
      h2 {
        color: var(--white-color);
      }

      *:not(h2) {
        color: var(--text-light);
        font-size: 1.6rem;
      }
    }

    .logo {
      display: flex;
      flex-direction: column;

      img {
        width: 16rem;
        margin-bottom: 2rem;
      }
    }

    .link {
      h2 {
        margin-bottom: 3rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 1rem 0;
        }
      }
    }

    .form {
      h2 {
        margin-bottom: 3rem;
      }

      form {
        margin-bottom: 2rem;
        position: relative;

        input {
          height: 4.4rem;
          width: 100%;
          border-radius: 4rem;
          padding: 0 10.2rem 0 1rem;
          background-color: transparent;
          outline: none;
        }

        button {
          position: absolute;
          right: 0;
          height: 98%;
          background: linear-gradient(
            to right,
            var(--red-color),
            var(--pink-color)
          );
          color: var(--white-color);
          border-radius: 4rem;
          width: 10rem;
        }
      }
    }
  }

  .create {
    text-align: center;

    p {
      color: var(--white-color);
      font-size: 1.4rem;
      letter-spacing: 0.4rem;

      strong {
        color: var(--pink-color);
      }
    }
  }
}

@media (max-width: 768px) {
  .logo,
  .link,
  .form {
    margin-bottom: 4rem;
  }
}

@media (max-width: 400px) {
  .container-fluid {
    padding: 8rem 1rem;
  }
}
</style>
