<template>
<router-view></router-view>

<div class="header">

    <!--Content before waves-->
    <div class="inner-header flex">
        <button @click="$router.go(-1)" class="back" type="button">Volver</button>

    
    <div class="registro">
        <img src="./imagenes/logo.png" height="70">
        <h1>Crear Cuenta</h1>
        <div class="cuentaexistente">
            <p class="ctexto" v-if="!mostrarL">
                ¿Ya tienes una cuenta? <a @click="mostrarL = true">Ingresa</a>
            </p>
        </div>
        <button class="google" type="button">Registrarse con Google</button>
        <p class="or">or</p>
        
        <div class="datosRegistro">
            <input class="rnombre" type="text" name="rnombre" maxlength="20" size="20" placeholder="Nombre">
            <input class="rapellido" type="text" name="rapellido" maxlength="20" size="20" placeholder="Apellido"><br><br>
            <input class="remail" type="text" name="remail" maxlength="20" size="20" placeholder="Email"><br><br>
            <input class="rpassword" type="text" name="rpassword" maxlength="25" size="25" placeholder="Contraseña"><br><br>
        </div>
        
        <button class="semail" type="button">Registrarse con Email</button>
        <br><br>
        <label class="container">Acepto los <a href="test">términos</a> y <a href="test">condiciones</a>
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
        <label class="container">Suscribirse al newsletter
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
        



    </div>

    <transition>
    <div v-if="mostrarL" class="inicioSesion">
        <img src="./imagenes/logo.png" height="70">
        <h1>Ingresar</h1>
        
        <button class="googleL" type="button">Ingresar con Google</button>
        <p class="orL">or</p>
        
        <div class="datosRegistro">
            <input class="lusuario" type="text" name="lusuario" maxlength="20" size="20" placeholder="Usuario"><br><br>
            <input class="lpassword" type="text" name="lpassword" maxlength="25" size="25" placeholder="Contraseña"><br><br>
        </div>
        
        <button class="lemail" type="button">Ingresar</button>
        <br><br>
        <label class="container">No cerrar sesión
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>


    
    </div>
    </transition>


    
        
    </div>

    <!--Waves Container-->
    <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
        </svg>
    </div>
    <!--Waves end-->

</div>
<!--Header ends-->

<!--Content starts-->
<div class="content flex">
  
</div>
<!--Content ends-->

</template>

<script>
export default {
  data() {
    return {
      mostrarL: false
    }
  }
}

</script>

<style scoped src="./css/cuenta.css"></style>