<template>
<div id="BGGeneral2">
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav> -->
  <router-view/>
</div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

*{
  margin: 0;
  padding: 0;
}

#BGGeneral {
  background-image: url(https://i.pinimg.com/originals/21/5c/7f/215c7fdca6033092baa04b35c17466bd.gif);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
#BGGeneral2 {
  background-image: url("https://cdn.eltiempo.es/images/content/bg/general.jpg");
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
