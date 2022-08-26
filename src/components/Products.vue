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
            <img src="./imagenes/producto1.png" height="220" width="220">
            <p><b>Juguete</b><br>Hueso de perro</p>
            <h3>$2,500</h3>
            <button v-if="active1" v-on:click="asignarPrecio(2500); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active2 = true" v-on:mouseleave="active2 = false" class="producto2">
            <img src="./imagenes/producto2.png" height="220" width="220">
            <p><b>Cortauñas</b><br>Cuidado de uñas.</p>
            <h3>$22,000</h3>
            <button v-if="active2" v-on:click="asignarPrecio(22000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active3 = true" v-on:mouseleave="active3 = false" class="producto3">
            <img src="./imagenes/producto3.png" height="220" width="220">
            <p><b>Productos de aseo</b><br>Shampoo para perros.</p>
            <h3>$60,000</h3>
            <button v-if="active3" v-on:click="asignarPrecio(60000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active4 = true" v-on:mouseleave="active4 = false" class="producto4">
            <img src="./imagenes/producto4.png" height="220" width="220">
            <p><b>Collar antipulgas</b><br>Lo mejor para tu mascota.</p>
            <h3>$14,000</h3>
            <button v-if="active4" v-on:click="asignarPrecio(14000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>

        <div v-on:mouseover="active5 = true" v-on:mouseleave="active5 = false" class="producto5">
            <img src="./imagenes/producto5.png" height="220" width="220">
            <p><b>Collar</b><br>Lo mejor para tu mascota.</p>
            <h3>$32,000</h3>
            <button v-if="active5" v-on:click="asignarPrecio(32000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active6 = true" v-on:mouseleave="active6 = false" class="producto6">
            <img src="./imagenes/producto6.png" height="220" width="220">
            <p><b>Comida húmeda</b><br>Comida sabor a pollo.</p>
            <h3>$50,000</h3>
            <button v-if="active6" v-on:click="asignarPrecio(50000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active7 = true" v-on:mouseleave="active7 = false" class="producto7">
            <img src="./imagenes/producto7.png" height="220" width="220">
            <p><b>Jabón antipulgas</b><br>Matador.</p>
            <h3>$32,000</h3>
            <button v-if="active7" v-on:click="asignarPrecio(32000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
        </div>
        
        <div v-on:mouseover="active8 = true" v-on:mouseleave="active8 = false" class="producto8">
            <img src="./imagenes/producto8.png" height="220" width="220">
            <p><b>Juguete masticable</b><br>Pelota masticable grande.</p>
            <h3>$32,000</h3>
            <button v-if="active8" v-on:click="asignarPrecio(32000); actualizarPrecio()" @click="mostrarMensajeCompra = true" type="button">COMPRAR</button>
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
            mostrarMensajeCompra: false,
            precioFinal: localStorage.getItem('precioProducto') || "none"
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
            isUserLoggedIn: function(){
                if (localStorage.getItem("usuarioLogueado") == 'true'){
                    return false
                } else {
                    return true
                }
            },
            logOut: function(){
                localStorage.clear();
                this.$router.push({name: 'root'})
            }
    }

}

</script>


<style scoped src="./css/products.css"></style>