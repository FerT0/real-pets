<template>
<router-view></router-view>
  
  <div class="app">
    
    <div class="header">
      <div class="logoNav">
        <img src="./imagenes/logo.png" height="70">
      </div>
      
      <div class="barraNav">
        <nav>
          <button v-on:click="loadHome">INICIO</button>
          <button>PRODUCTOS</button>
          <button>SERVICIOS</button>
          <button v-on:click="loadAccountPage">CUENTA</button>

        </nav>
      </div>

    </div>

    <div class="body">
      <img src="./imagenes/body.png">

      <div class="serviciosPresentacion">
        <div class="servicio1">
          <span class="circulo"><i class="fa-solid fa-paw"></i></span>
          <div class="servicioCuadro"></div>
          <div class="servicioTexto">
            <h2>CORTE DE UÑAS</h2>
            <p>Nos encargamos del adecuado corte de uñas para tu mascota.</p>
            <button>MÁS INFORMACIÓN</button>
          </div>
        </div>

        <div class="servicio2">
          <span class="circulo"><i class="fa-solid fa-scissors"></i></span>
          <div class="servicioCuadro"></div>
          <div class="servicioTexto">
            <h2>PELUQUERÍA</h2>
            <p>Servicio de corte de pelo para tu mascota.</p>
            <button>MÁS INFORMACIÓN</button>
          </div>
        </div>

        <div class="servicio3">
          <span class="circulo"><i class="fa-solid fa-shower"></i></span>
          <div class="servicioCuadro"></div>
          <div class="servicioTexto">
            <h2>HIGIENE</h2>
            <p>¡Bañamos a tu mascota!</p>
            <button>MÁS INFORMACIÓN</button>
          </div>
        </div>

        
         

      </div>

      <div class="presentacionPagina">
        <h2>Tienda online para tus mascotas</h2>
        <p>¡Encuentra comida y servicios de alta calidad para tus animales! <br>Más de 500 productos de alta calidad al mejor precio.</p>

      </div>
    </div>

    <div class="galeria">
      <img src="./imagenes/galeria.png">
    </div>
    <div class="galeriaTexto">
        <h1>GALERÍA</h1>
    </div>
    
    <div class="galeriaFotos">
      <div class="mascota1">
        <img src="./imagenes/mascota1.png">
      </div>
      <div class="mascota2">
        <img src="./imagenes/mascota2.png">
      </div>
      <div class="mascota1">
        <img src="./imagenes/mascota3.png">
      </div>
      <div class="mascota1">
        <img src="./imagenes/mascota4.png">
      </div>
      
      
      
      
    </div>

    <div class="contacto">
      <h1>CONTÁCTANOS</h1>
      <div class="telefono">
        <i class="fa-solid fa-phone"></i>
        <h3>Llámanos</h3>
        <p>Teléfono: +00 000 000 00 00</p>
      </div>
      <div class="direccion">
        <i class="fa-solid fa-location-dot"></i>
        <h3>Dirección</h3>
        <p>Calle 123, Colombia</p>
      </div>
      <div class="correocontacto">
        <i class="fa-solid fa-at"></i>
        <h3>Email</h3>
        <p>correo@dominio.com</p>
      </div>




    </div>

    <div class="footer">
      <h3 class="llamanos">Llámanos</h3>
      <h3 class="llamanos2">+00 000 00 00</h3>
      <h3 class="siguenos">Síguenos</h3>
      <span class="circuloP"><i class="fa-brands fa-facebook-f"></i></span>
      <span class="circuloP"><i class="fa-brands fa-twitter"></i></span>
      <span class="circuloP"><i class="fa-brands fa-skype"></i></span>
      <span class="circuloP"><i class="fa-brands fa-youtube"></i></span>
      <span class="circuloP"><i class="fa-brands fa-instagram"></i></span>
    </div>

    
  </div>
  
</template>


<script>
export default {
  name: 'App',
  data: function(){
    return{
      is_auth:false
    }
  },
  methods:{
    loadAccountPage: function(){
      this.$router.push({name: 'account'})
    },
    loadHome: function(){
      this.$router.push({name: 'root'})
    }
  }

}


</script>

<style scoped src="./css/home.css"></style>