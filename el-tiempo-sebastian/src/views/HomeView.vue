<template>
  <div class="home">
    <section class="hero is-medium is-link backgroundNoruega">
      <div class="hero-body">
        <p class="title is-1 simple-shadow">
          EL TIEMPO EN {{ city.toUpperCase() }}
        </p>
      </div>
    </section>

    <br />

    <div>
      <div class="select is-large">
        <select v-model="city">
          <option value="malaga">Malaga</option>
          <option value="huelva">Huelva</option>
          <option value="andorra">Andorra</option>
          <option value="galicia">Galicia</option>
          <option value="london">Londres</option>
          <option value="madrid">Madrid</option>
          <option value="norway">Noruega</option>
          <option value="sahara">Sahara</option>
        </select>
      </div>

      <h1 class="title is-1 location">{{ this.city }}</h1>
      <h1 class="subtitle is-5 heading">{{ this.heading }}</h1>

      <!-- Temperatura -->
      <p class="mb-5">
        <span class="title is-1 temp-value">{{ this.tempValue }}ºC</span>
      </p>
    </div>

    <br />

    <!-- DATA - PARTE INFERIOR -->
    <div class="mx-6">
      <div class="columns is-mobile">
        <div class="card column">
          <h3>Humedad</h3>
          <p>{{ this.humidity }}</p>
        </div>
        <div class="card column">
          <h3>Viento</h3>
          <p>{{ this.windSpeed }}</p>
        </div>
      </div>

      <br />

      <div class="columns">
        <div class="card column">
          <h3>Sensacion termica</h3>
          <p>{{ this.fellsLike }}ºC</p>
        </div>
        <div class="card column">
          <h3>Temp max</h3>
          <p>{{ this.tempMax }}</p>
        </div>
        <div class="card column">
          <h3>Temp min</h3>
          <p>{{ this.tempMin }}</p>
        </div>
      </div>
    </div>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      city: "",
      heading: "",
      tempValue: "",
      description: "",
      humidity: "",
      windSpeed: "",
      fellsLike: "",
      tempMax: "",
      tempMin: "",
    };
  },
  components: {
    Footer,
  },
  watch: {
    async city(newValue) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${newValue}&appid=3408896f1d019f9845f9f0726d4dab41&lang=es&units=metric`;
      const response = await fetch(url);
      const weatherData = await response.json();
      this.city = weatherData.name;
      this.heading = weatherData.weather[0].description;
      this.tempValue = Math.round(weatherData.main.temp);
      this.humidity = weatherData.main.humidity;
      this.windSpeed = weatherData.wind.speed;
      this.fellsLike = Math.round(weatherData.main.feels_like);
      this.tempMax = Math.round(weatherData.main.temp_max);
      this.tempMin = Math.round(weatherData.main.temp_min);
    },
  },
};
</script>

<style scoped>
.backgroundMalaga {
  background: url("https://media.istockphoto.com/photos/malaga-spain-cityscape-view-of-malaga-plaza-de-toros-de-ronda-in-picture-id1017217230?k=20&m=1017217230&s=612x612&w=0&h=joQ8VT3LUTJiuEQK3fPbbCph08HyjMp1XMbw1dWFER0=")
    no-repeat center / cover;
}
.backgroundHuelva {
  background: url("https://fotos.hoteles.net/articulos/guia-huelva-ciudad-6159-1.jpg")
    no-repeat center / cover;
}
.backgroundAndorra {
  background: url("https://thumbs.dreamstime.com/b/encamp-la-visi%C3%B3n-a%C3%A9rea-andorra-20862531.jpg")
    no-repeat center / cover;
}
.backgroundGalicia {
  background: url("https://p4.wallpaperbetter.com/wallpaper/541/254/509/morning-galicia-punta-nariga-malpica-wallpaper-preview.jpg")
    no-repeat center / cover;
}
.backgroundLondres {
  background: url("https://wallpaperaccess.com/full/180132.jpg")
    no-repeat center / cover;
}
.backgroundMadrid {
  background: url("https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id1297090032?b=1&k=20&m=1297090032&s=170667a&w=0&h=OLFFlSPXDqXq7SZaLMTUpGJh-bz7FKRCjnOTGBT7GRc=")
    no-repeat center / cover;
}
.backgroundNoruega {
  background: url("https://i.pinimg.com/originals/8d/07/01/8d07011f18ef40a1a0d4d63bb27ba13c.jpg")
    no-repeat center / cover;
}
.backgroundSahara {
  background: url("https://wallup.net/wp-content/uploads/2019/05/10/895743-desierto-sahara-dunas-arena-sol-naturaleza-748x421.jpg")
    no-repeat center / cover;
}
.simple-shadow {
  text-shadow: 5px 5px 15px black;
}
</style>
