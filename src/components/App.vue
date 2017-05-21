<!-- src/components/App.vue -->
<template>
  <div class="ui secondary  menu">
    <a class="item"><i class="steam icon"></i></a>
    <a class="active item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
    <button class="ui button"><i class="copy icon"></i></button>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search...">
          <i class="bug icon"></i>
        </div>
      </div>
      <a class="ui item">
        Logout
      </a>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
