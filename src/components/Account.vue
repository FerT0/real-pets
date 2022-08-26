<template>
<router-view></router-view>



<div class="header">

    <!--Content before waves-->
    <div class="inner-header flex">
        <button @click="$router.go(-1)" class="back" type="button">Volver</button>

    
    
    
    <div v-if="mostrarLogueoExitoso" class="fondoLogueoExitoso">
    </div>
    <div v-if="mostrarLogueoExitoso" class="mensajeLogueoExitoso">
        <div class="mensajeColorExitoso">
            <img src="./imagenes/sucess.png" height="70">
        </div>
        <h1>¡Logueo exitoso!</h1>
        <p>Presione continuar para volver al menú.</p>
        <button v-on:click="loadHome" type="button">Continuar</button>
    </div>

    <div v-if="mostrarLogueoError == true" class="fondoLogueoError">
    </div>
    <div v-if="mostrarLogueoError == true" class="mensajeLogueoError">
        <div class="mensajeColorError">
            <img src="./imagenes/error.png" height="70">
        </div>
        <h1>¡Error!</h1>
        <p>Los datos de inicio de sesión no coinciden.</p>
        <button @click="mostrarLogueoError = false" type="button">Continuar</button>
    </div>



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
        
        <form v-on:submit.prevent="processSignUpUser">
        <div class="datosRegistro">
            <input class="rnombre" type="text" v-model="user_register.nombre" maxlength="20" size="20" placeholder="Nombre">
            <input class="rusuario" type="text" v-model="user_register.usuario" maxlength="20" size="20" placeholder="Usuario"><br><br>
            <input class="remail" type="text" v-model="user_register.correo" maxlength="20" size="20" placeholder="Email"><br><br>
            <input class="rpassword" type="password" v-model="user_register.password" maxlength="25" size="25" placeholder="Contraseña"><br><br>
        </div>
        
        <button class="semail" type="submit">Registrarse con Email</button>
        </form>
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
    <div v-if="mostrarRegistroExitoso" class="fondoRegistroExitoso">
    </div>
    <div v-if="mostrarRegistroExitoso" class="mensajeRegistroExitoso">
        <div class="mensajeColorExitoso">
            <img src="./imagenes/sucess.png" height="70">
        </div>
        <h1>¡Registro exitoso!</h1>
        <p>Presione continuar para volver al menú.</p>
        <button v-on:click="loadHome" type="button">Continuar</button>
    </div>

    <div v-if="mostrarRegistroError" class="fondoRegistroError">
    </div>
    <div v-if="mostrarRegistroError" class="mensajeRegistroError">
        <div class="mensajeColorError">
            <img src="./imagenes/error.png" height="70">
        </div>
        <h1>¡Error!</h1>
        <p>Hubo un fallo en el registro. Inténtelo nuevamente.</p>
        <button @click="mostrarRegistroError = false" type="button">Continuar</button>
    </div>

    <transition>
    <div v-if="mostrarL" class="inicioSesion">
        <img src="./imagenes/logo.png" height="70">
        <h1>Ingresar</h1>
        
        <button class="googleL" type="button">Ingresar con Google</button>
        <p class="orL">or</p>
        
        <form v-on:submit.prevent="processLogInUser">
        <div class="datosRegistro">
            <input class="lusuario" type="text" v-model="user_login.usuario" name="lusuario" maxlength="20" size="20" placeholder="Usuario"><br><br>
            <input class="lpassword" type="password" v-model="user_login.password" name="lpassword" maxlength="25" size="25" placeholder="Contraseña"><br><br>
        </div>
        
        <button class="lemail" type="submit">Ingresar</button>
        </form>
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
<div class="content flex">
  
</div>


</template>

<script>
import axios from 'axios';
export default {
  name: "Account",
  data: function(){
        return {
            mostrarL: false,
            mostrarLogueoExitoso: false,
            mostrarLogueoError: false,
            mostrarRegistroExitoso: false,
            mostrarRegistroError: false,
            user_login:{
                usuario: "",
                password: ""
            },
            user_register:{
                nombre: "",
                usuario: "",
                correo: "",
                password: ""

            }
        }

            
    },

    methods: {
        processLogInUser: function(){
            axios.post(
                "https://jairoprueba.herokuapp.com/login/",
                this.user_login,
                {headers:{}}
            )
            .then((result) => {
                let dataLogin = {
                    usuario: this.user_login.usuario,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh
                }

                this.$emit('completedLogIn', dataLogin)
                this.mostrarLogueoExitoso = true
            })
            .catch((error) => {
                if (error.response.status == "401")
                    this.mostrarLogueoError = true
                    
            });
        },
        processSignUpUser: function(){
            axios.post(
                "https://jairoprueba.herokuapp.com/clienteCreate/",
                this.user_register,
                {headers: {}}
            )
            .then((result) => {
                let dataSignUp = {
                usuario: this.user_register.username,
                token_access: result.data.access,
                token_refresh: result.data.refresh,
            }

            this.$emit('completedSignUp', dataSignUp)
            this.mostrarRegistroExitoso = true

            })
            .catch((error) => {
                console.log(error)

            this.mostrarRegistroError = true
            });
            },

        loadHome: function(){
            this.$router.push({name: 'root'})
    }

    }
}

</script>

<style scoped src="./css/cuenta.css"></style>