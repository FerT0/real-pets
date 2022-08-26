<template>
<router-view></router-view>


</template>


<script>
export default{
  name: 'App',
  data: function(){
    return{
      is_auth:false
    }
  },
  methods:{
    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("usuario", data.usuario);
      localStorage.setItem("token_access", data.token_acess);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación exitosa");



    },
    completedSignUp: function(data) {}


  },
    created: function (){
    this.$router.push({name:'home'})
  }

}

</script>

<style>


</style>