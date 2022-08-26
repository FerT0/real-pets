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


  },
    created: function (){
    this.$router.push({name:'home'})
  }

}

</script>

<style>


</style>