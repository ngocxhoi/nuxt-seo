<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-12">
        <h1>Why Choose Us</h1>
        <div id="drop">
          <div class="drop-item">
            <a href="#collaseOne" class="btn" data-bs-toggle="collapse">
              Adieus who direct esteem It esteems luckily?</a
            >
            <div id="collaseOne" class="collapse" data-bs-parent="#drop">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                error magnam facilis!
              </p>
            </div>
          </div>
          <hr />
          <div class="drop-item">
            <a href="#collaseTwo" class="btn" data-bs-toggle="collapse">
              Who direct esteem It esteems?</a
            >
            <div id="collaseTwo" class="collapse" data-bs-parent="#drop">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                asperiores, qui fuga laudantium a laboriosam aut quibusdam quos
                earum quasi.
              </p>
            </div>
          </div>
          <hr />
          <div class="drop-item">
            <a href="#collaseThree" class="btn" data-bs-toggle="collapse">
              Duis consectetur feugiat auctor?</a
            >
            <div id="collaseThree" class="collapse" data-bs-parent="#drop">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                praesentium ducimus delectus? Esse rerum mollitia distinctio
                reprehenderit laborum exercitationem adipisci cupiditate odit
                veniam quia! Dolore, vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <img src="/img/accordion.png.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-fluid {
  padding: 8rem;
  min-height: 100vh;

  .row {
    div {
      margin: 2rem 0;

      h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
      }

      #drop {
        .drop-item {
          a {
            font-size: 1.6rem;
            border: none;
            padding: 1rem 0;
          }

          .collapse p {
            font-size: 1.6rem;
            color: var(--text-light);
            margin-left: 1rem;
            transition: none;
          }
        }
      }

      img {
        width: 100%;
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
