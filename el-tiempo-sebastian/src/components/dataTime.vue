<template>
  <div class="container">
    <!-- TIME - PARTE SUPERIOR -->
    <div>
      <!-- opciones -->
      <!-- <select id="cities">
        <option value="malaga" selected>Málaga</option>
        <option value="madrid">Madrid</option>
        <option value="sevilla">Sevilla</option>
        <option value="huelva">Huelva</option>
        <option value="cordoba">Cordoba</option>
        <option value="andorra">Andorra</option>
        <option value="asturias">Asturias</option>
        <option value="galicia">Galicia</option>
        <option value="london">Londres</option>
        <option value="norway">Noruega</option>
        <option value="sahara">Sahara</option>
      </select> -->
      <div class="select is-large">
        <select v-model="city">
          <!-- <option value=""></option> -->
          <option value="malaga" selected>Malaga</option>
          <option value="huelva">Huelva</option>
          <option value="cordoba">Cordoba</option>
          <option value="andorra">Andorra</option>
          <option value="asturias">Asturias</option>
          <option value="galicia">Galicia</option>
          <option value="london">Londres</option>
          <option value="sevilla">Sevilla</option>
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

      <!-- <h1 class="subtitle is-5 descripcion">Que calo cohone</h1> -->
    </div>
    <br />

    <!-- DATA - PARTE INFERIOR -->
    <div>
      <div class="columns">
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
  </div>
</template>

<script>
export default {
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
  watch: {
    async city(newValue) {
      if (newValue === "") {
        this.tempValue = "";
        return;
      }
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

<style>
</style>