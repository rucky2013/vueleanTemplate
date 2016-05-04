<template>
  <div>
    <h1>{{ msg }}</h1>
      <form class="pure-form">
    <fieldset>
        <legend>一个简单的单行表单</legend>

        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">

        <label for="remember">
            <input id="remember" type="checkbox"> 记住我
        </label>

        <button type="submit" class="pure-button pure-button-primary">登陆</button>
    </fieldset>
</form>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      msg: 'Testview!',
    };
  },
};
</script>

<style scoped>
h1 {
  color: #ff832c;
}
</style>