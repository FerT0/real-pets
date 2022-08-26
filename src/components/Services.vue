<template>
<router-view></router-view>
  
  <div class="app">
    
    
    <div class="header">
      <div class="logoNav">
        <img src="./imagenes/logo2.png" height="70">
      </div>
      
      <div class="barraNav">
        <nav>
          <button v-on:click="loadHome">INICIO</button>
          <button v-on:click="loadProducts">PRODUCTOS</button>
          <button v-on:click="loadServices">SERVICIOS</button>
          <button v-on:click="loadAccountPage">CUENTA</button>

        </nav>
      </div>

    </div>

    <div class="contenido">
        <div v-on:mouseover="active1 = true" v-on:mouseleave="active1 = false" class="producto1">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active1" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active2 = true" v-on:mouseleave="active2 = false" class="producto2">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active2" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active3 = true" v-on:mouseleave="active3 = false" class="producto3">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active3" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active4 = true" v-on:mouseleave="active4 = false" class="producto4">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active4" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active5 = true" v-on:mouseleave="active5 = false" class="producto5">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active5" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active6 = true" v-on:mouseleave="active6 = false" class="producto6">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active6" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active7 = true" v-on:mouseleave="active7 = false" class="producto7">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active7" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active8 = true" v-on:mouseleave="active8 = false" class="producto8">
            <img src="./imagenes/servicio.png" height="190">
            <p><b>CHUNKY</b><br>Adult Salmón</p>
            <h3>$32,000</h3>
            <button v-if="active8" type="button">COMPRAR</button>
        </div>

    </div>





    </div>

    


</template>


<script>
export default {
    name: 'Products',
    data: function() {
        return {
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
            active7: false,
            active8: false
        }

    },
        methods:{
            loadAccountPage: function(){
            this.$router.push({name: 'account'})
            },
            loadHome: function(){
            this.$router.push({name: 'root'})
            },
            loadProducts: function(){
            this.$router.push({name: 'products'})
            },
            loadServices: function(){
            this.$router.push({name: 'services'})
            }
        }


}

</script>


<style scoped src="./css/services.css"></style>