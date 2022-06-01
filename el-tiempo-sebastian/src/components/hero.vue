<template>
  <section class="hero is-medium is-link">
    <div class="hero-body">
      <p class="title is-1">EL TIEMPO EN {{ city.toUpperCase() }}</p>
      <h4>Nombre: {{ nombre }}</h4>
    </div>
  </section>
  <br />
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Hero",
  props: ["city"],
  data(){
    return{
      nombre: 'Ignacio'
    }
  },
  computed: {
    ...mapState(["frutas"]),
  },
};
</script>

<style>
</style>