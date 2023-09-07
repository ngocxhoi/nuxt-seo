<template>
  <form action="#">
    <div>
      <input type="text " placeholder="Search Keyword" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
    </div>
    <button>SEARCH</button>
  </form>

  <div class="category">
    <h1>Category</h1>
    <ul>
      <a href="#">
        <li data-num=" (42)">Resaurant food</li>
      </a>
      <a href="#">
        <li data-num=" (103)">Travel news</li>
      </a>
      <a href="#">
        <li data-num=" (2)">Modern technology</li>
      </a>
      <a href="#">
        <li data-num=" (52)">Product</li>
      </a>
      <a href="#">
        <li data-num=" (6)">Inspiration</li>
      </a>
      <a href="#">
        <li data-num=" (0)">Health Care</li>
      </a>
    </ul>
  </div>

  <div class="recent-post">
    <h1>Recent Post</h1>
    <ul>
      <a href="#">
        <li>
          <div class="card-post">
            <img src="/img/post/post_1.png.webp" alt="" />
            <div class="card-content">
              <h3 class="card-title">Some text</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, ratione amet harum eligendi quo dolore, quas illum
                dolorum velit molestias cupiditate ducimus vitae architecto
                recusandae deserunt dicta? Quos, rem exercitationem?
              </p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li>
          <div class="card-post">
            <img src="/img/post/post_2.png.webp" alt="" />
            <div class="card-content">
              <h3 class="card-title">Some text</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, ratione amet harum eligendi quo dolore, quas illum
                dolorum velit molestias cupiditate ducimus vitae architecto
                recusandae deserunt dicta? Quos, rem exercitationem?
              </p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li>
          <div class="card-post">
            <img src="/img/post/post_3.png.webp" alt="" />
            <div class="card-content">
              <h3 class="card-title">Some text</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, ratione amet harum eligendi quo dolore, quas illum
                dolorum velit molestias cupiditate ducimus vitae architecto
                recusandae deserunt dicta? Quos, rem exercitationem?
              </p>
            </div>
          </div>
        </li>
      </a>
      <a href="#">
        <li>
          <div class="card-post">
            <img src="/img/post/post_4.png.webp" alt="" />
            <div class="card-content">
              <h3>Some text</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, ratione amet harum eligendi quo dolore, quas illum
                dolorum velit molestias cupiditate ducimus vitae architecto
                recusandae deserunt dicta? Quos, rem exercitationem?
              </p>
            </div>
          </div>
        </li>
      </a>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
form,
.category,
.recent-post {
  padding: 3rem;
  margin-bottom: 3rem;
  background-color: var(--bg-light-color);
  box-shadow: 0 4px 15px 2px var(--shadow-color);
}

form {
  div {
    position: relative;
    margin-bottom: 2rem;

    input {
      width: 100%;
      height: 4rem;
      font-size: 1.6rem;
      padding: 0 1rem;
      outline: none;
    }

    svg {
      height: 2rem;
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  button {
    height: 4rem;
    width: 100%;
    font-size: 1.6rem;
    border: 1px solid var(--red-color);
    letter-spacing: 3px;
    color: var(--red-color);
  }
}

.category {
  h1 {
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;

    a {
      text-decoration: none;

      li {
        font-size: 1.6rem;
        line-height: 1.5;
        margin: 1rem 0;
        color: var(--text-light);
        transition: color 0.4s ease;

        &:hover {
          color: var(--black-color);
        }

        &::after {
          content: attr(data-num);
        }
      }
    }
  }
}

.recent-post {
  h1 {
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;

    a {
      text-decoration: none;
      color: var(--black-color);

      li {
        margin: 2rem 0;

        .card-post {
          display: flex;

          img {
            height: 100%;
          }

          .card-content {
            display: grid;
            place-content: center;
            padding-left: 1rem;

            h3 {
              transition: color 0.4s ease;
              margin-bottom: 0.4rem;

              &:hover {
                color: var(--pink-color);
              }
            }

            p {
              font-size: 1.4rem;
              max-height: 4rem;
              color: var(--text-light);
              overflow-x: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
