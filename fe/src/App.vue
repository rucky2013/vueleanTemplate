<template>
  <div>
    <a v-link="{ path: '/' }">Go to 增加社区</a>
    <br>
    <a v-link="{ path: '/test1' }">Go to Test1</a>
    <br>
    <a v-link="{ path: '/test2'}">Go to Test2</a>
    <router-view>
    </router-view>
  </div>
</template>
