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
          <button v-on:click="loadAccountPage" v-if="isUserLoggedIn()">CUENTA</button>
          <button v-on:click="logOut()" v-if="!isUserLoggedIn()">CERRAR SESIÓN</button>

        </nav>
      </div>

    </div>

    <div v-if="mostrarMensajeCompra" class="fondoConfirmacionCompra">
    </div>
    <div v-if="mostrarMensajeCompra" class="mensajeConfirmacionCompra">
        <div class="mensajeColorConfirmacionCompra">
            <img src="./imagenes/sucess.png" height="70">
        </div>
        <h1>¡Compra exitosa!</h1>
        <h3>Precio: <span>$</span><span>{{precioFinal}}</span></h3>
        <h3>Fecha: <span>{{ new Date() }}</span></h3>
        <p>Presione continuar para volver al menú.</p>
        <button @click="mostrarMensajeCompra = false" type="button">Continuar</button>
    </div>
    
    
    
    
    <div class="contenido">
        <div v-on:mouseover="active1 = true" v-on:mouseleave="active1 = false" class="producto1">
            <img src="./imagenes/banio.png" height="200" width="250">
            <p><b>Corte de uñas</b><br>Manicure completo.</p>
            <h3>$15,000</h3>
            <button v-if="active1" v-on:click="asignarPrecio(15000); actualizarPrecio()" @click="mostrarMensajeCompra = true"  type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active2 = true" v-on:mouseleave="active2 = false" class="producto2">
            <img src="./imagenes/guarderia.png" height="200" width="250">
            <p><b>Baño</b><br>Incluye secado y perfume.</p>
            <h3>$60,000</h3>
            <button v-if="active2" v-on:click="asignarPrecio(60000); actualizarPrecio()" @click="mostrarMensajeCompra = true"  type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active3 = true" v-on:mouseleave="active3 = false" class="producto3">
            <img src="./imagenes/unias.png" height="200" width="250">
            <p><b>Guardería</b><br>Servicio diario.</p>
            <h3>$30,000</h3>
            <button v-if="active3" v-on:click="asignarPrecio(30000); actualizarPrecio()" @click="mostrarMensajeCompra = true"  type="button">COMPRAR</button>
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
            active8: false,
            mostrarMensajeCompra: false
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
            },
            asignarPrecio: function(precio){
                localStorage.setItem("precioProducto", precio);
            },
            actualizarPrecio: function(){
                this.precioFinal = localStorage.getItem('precioProducto') || "none"
            },
            logOut: function(){
                localStorage.clear();
                this.$router.push({name: 'root'})
            },
            
            isUserLoggedIn: function(){
            if (localStorage.getItem("usuarioLogueado") == 'true'){
                return false
            } else {
                return true
            }
        }

        }
}

</script>


<style scoped src="./css/services.css"></style>