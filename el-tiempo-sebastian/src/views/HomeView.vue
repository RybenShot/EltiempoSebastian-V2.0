<template>
  <div class="home" id="BGGeneral">
    <section class="hero is-medium is-link " :class="[BGGeneral]">
      <div class="hero-body">
        <p class="title is-1 simple-shadow">
          EL TIEMPO EN {{ city.toUpperCase() }}
        </p>
      </div>
        <font-awesome-icon icon="fa-solid fa-user-secret" />
    </section>

    <br />

    <div class="card py-3 mb-3 container mx-4 BGGlass" style="background-opacity='0.5'">
      <div class="select is-large ">
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

      <br>
      <br>

      <h1 class="title has-text-light is-1 location simple-shadow">{{ this.city }}</h1>
      <h1 class="subtitle has-text-light is-3 heading simple-shadow">{{ this.heading }}</h1>

      <!-- Temperatura -->
      <p class="mb-5">
        <span class="title has-text-light is-1 temp-value simple-shadow">{{ this.tempValue }}ºC</span>
      </p>
    </div>

    <br />

    <!-- DATA - PARTE INFERIOR -->
    <div class="mx-6 ">
      <div class="columns is-mobile">
        <div class="card column mx-3 BGGlass">
          <h3 class="title has-text-light is-3">Humedad</h3>
          <p class="has-text-light">{{ this.humidity }}</p>
        </div>
        <div class="card column mx-3 BGGlass">
          <h3 class="title has-text-light is-3">Viento</h3>
          <p class="has-text-light">{{ this.windSpeed }}</p>
        </div>
      </div>

      <br />

      <div class="columns">
        <div class="card column mx-3 BGGlass">
          <h3 class="title has-text-light is-4 ">Sensacion termica</h3>
          <p class="has-text-light subtitle is-4 pt-2">{{ this.fellsLike }}ºC</p>
        </div>
        <div class="card column mx-3 BGGlass">
          <h3 class="title has-text-light is-3">Temp. max</h3>
          <p class="has-text-light subtitle is-4 pt-2">{{ this.tempMax }}</p>
        </div>
        <div class="card column mx-3 BGGlass">
          <h3 class="title has-text-light is-3">Temp. min</h3>
          <p class="has-text-light subtitle is-4 pt-2">{{ this.tempMin }}</p>
        </div>
      </div>
      <br>
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
      BGGeneral:'backgroundDefaul',
      TodosBG: 'backgroundMalaga, backgroundHuelva, backgroundAndorra, backgroundGalicia, backgroundLondres, backgroundMadrid, backgroundNoruega'
      ,

    };
  },
  components: {
    Footer,
  },
  // watch: {
  //   async city(newValue) {
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${newValue}&appid=3408896f1d019f9845f9f0726d4dab41&lang=es&units=metric`;
  //     const response = await fetch(url);
  //     const weatherData = await response.json();
  //     this.city = weatherData.name;
  //     this.heading = weatherData.weather[0].description;
  //     this.tempValue = Math.round(weatherData.main.temp);
  //     this.humidity = weatherData.main.humidity;
  //     this.windSpeed = weatherData.wind.speed;
  //     this.fellsLike = Math.round(weatherData.main.feels_like);
  //     this.tempMax = Math.round(weatherData.main.temp_max);
  //     this.tempMin = Math.round(weatherData.main.temp_min);
  //     this.comprovateBG()
  //   },
  // },
  methods:{
    cambioBG(){
      this.BGGeneral = ''
      this.BGGeneral = 'backgroundNoruega'
    },
    comprovateBG: function(){
      if (this.city == "Málaga") {
        this.BGGeneral = 'backgroundMalaga'
      } 
      else if (this.city == "Province of Huelva") {
        this.BGGeneral = 'backgroundHuelva'
      } 
      else if (this.city == "Andorra") {
        this.BGGeneral = 'backgroundAndorra' 
      }
      else if (this.city == "Galicia") {
        this.BGGeneral = 'backgroundGalicia'
      }
    }
  },
  // computed:{
  //   comprovateBG: function(){
  //     this.BGGeneral = {}
  //     if (this.city == "malaga") {
  //       this.BGGeneral.backgroundMalaga = true
  //     } 
  //     else if (this.city == "province of huelva") {
  //       this.BGGeneral.backgroundHuelva = true
  //     } 
  //     else if (this.city == "andorra") {
  //       this.BGGeneral.backgroundAndorra = true
  //     }
  //     else if (this.city == "galicia") {
  //       this.BGGeneral.backgroundGalicia = true
  //     }
  //   }
  // },
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
      this.comprovateBG()
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
.backgroundDefaul {
  background: url("https://www.wallpaperuse.com/wallp/79-798291_m.jpg")
    no-repeat center / cover;
}

.BGGlass{
background-color: rgba(255, 255, 255, 0.26);  
 backdrop-filter: blur(5px);
}


.simple-shadow {
  text-shadow: 5px 5px 15px black;
}
/* ("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1383%26quot%3b)' fill='none'%3e%3crect width='2000' height='1000' x='0' y='0' fill='url(%23SvgjsLinearGradient1384)'%3e%3c/rect%3e%3cpath d='M1309 351L1946 988' stroke-width='6' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M678 89L279 -310' stroke-width='6' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1386 666L2008 1288' stroke-width='6' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1012 936L319 243' stroke-width='10' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1076 969L1513 1406' stroke-width='10' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1632 425L2007 800' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M459 366L-120 -213' stroke-width='6' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M89 410L728 1049' stroke-width='6' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1280 129L1750 599' stroke-width='6' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M909 3L1573 667' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1618 43L2142 567' stroke-width='8' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1527 428L1202 103' stroke-width='10' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1593 110L1071 -412' stroke-width='6' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M4 827L-501 322' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M104 536L-574 -142' stroke-width='8' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1889 928L2512 1551' stroke-width='10' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1149 372L1825 1048' stroke-width='8' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1869 400L1413 -56' stroke-width='6' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M239 527L498 786' stroke-width='8' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M495 826L0 331' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M352 525L-124 49' stroke-width='10' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M475 783L223 531' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M20 389L574 943' stroke-width='6' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M431 947L1094 1610' stroke-width='8' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1733 15L1097 -621' stroke-width='8' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1528 215L1983 670' stroke-width='6' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M263 559L576 872' stroke-width='8' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M848 118L170 -560' stroke-width='6' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M572 392L937 757' stroke-width='8' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M808 455L180 -173' stroke-width='8' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1984 230L1265 -489' stroke-width='6' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M770 383L513 126' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M419 501L58 140' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1398 730L682 14' stroke-width='8' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M436 968L792 1324' stroke-width='8' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1485 746L1989 1250' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1484 290L979 -215' stroke-width='6' stroke='url(%23SvgjsLinearGradient1387)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1435 202L2166 933' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1642 405L1912 675' stroke-width='8' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M495 680L-105 80' stroke-width='6' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1561 994L1972 1405' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M59 591L744 1276' stroke-width='6' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M802 16L1086 300' stroke-width='8' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M951 271L575 -105' stroke-width='8' stroke='url(%23SvgjsLinearGradient1385)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1545 33L1215 -297' stroke-width='8' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1970 182L1398 -390' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M824 287L370 -167' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1521 414L870 -237' stroke-width='10' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1113 119L1578 584' stroke-width='10' stroke='url(%23SvgjsLinearGradient1388)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M26 911L-249 636' stroke-width='8' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M957 349L1452 844' stroke-width='6' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1866 502L2545 1181' stroke-width='6' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1323 982L884 543' stroke-width='6' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M10 940L490 1420' stroke-width='10' stroke='url(%23SvgjsLinearGradient1389)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1966 224L2347 605' stroke-width='6' stroke='url(%23SvgjsLinearGradient1390)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1807 649L1215 57' stroke-width='6' stroke='url(%23SvgjsLinearGradient1386)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1383'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='100%25' y1='50%25' x2='0%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1384'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1385'%3e%3cstop stop-color='rgba(246%2c 107%2c 14%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(246%2c 107%2c 14%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='100%25' y2='100%25' id='SvgjsLinearGradient1386'%3e%3cstop stop-color='rgba(239%2c 239%2c 239%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(239%2c 239%2c 239%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1387'%3e%3cstop stop-color='rgba(30%2c 162%2c 249%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(30%2c 162%2c 249%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1388'%3e%3cstop stop-color='rgba(239%2c 239%2c 239%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(239%2c 239%2c 239%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='100%25' y2='100%25' id='SvgjsLinearGradient1389'%3e%3cstop stop-color='rgba(246%2c 107%2c 14%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(246%2c 107%2c 14%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='100%25' y2='100%25' id='SvgjsLinearGradient1390'%3e%3cstop stop-color='rgba(30%2c 162%2c 249%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(30%2c 162%2c 249%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e") */
#BGGeneral{
background-image: url(	https://i.pinimg.com/originals/21/5c/7f/215c7fdca6033092baa04b35c17466bd.gif);
  min-height: 100vh;
  background-position: center ;
  background-size: cover;
}
</style>
