<template>
  <div class="home">
    <section class="hero is-medium is-link">
    <div class="hero-body">
      <p class="title is-1">EL TIEMPO EN {{ city.toUpperCase() }}</p>
    </div>
  </section>

    <!-- <Hero :city="city" /> -->
    <Datatime/>
    <Footer/>
    


  </div>
</template>

<script>
// @ is an alias to /src
// import Hero from '@/components/hero.vue'
import Datatime from '@/components/dataTime.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      city: "malaga"
    }
    
  },
  components: {
    // Hero,
    Datatime,
    Footer
  }
}
</script>
