<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a v-link="'home'">home</a></li>
          <li><a v-link="'discovery'">discovery</a></li>
          <li><a v-link="'about'">about</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

  <div class="container">
    <router-view transition="blur" transition-mode="out-in">
      <div class="deo" >

      </div>
    </router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style media="screen">
  .blur-transition{
    transition: all .5s ease
  }
  .blur-enter,.blur-leave{
    filter: blur(5px);
  }
</style>
