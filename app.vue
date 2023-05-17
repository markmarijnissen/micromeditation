<template>
  <div class="app">
    <h1 class="row">µMeditation</h1>
    <div class="row">
      <div class="duration now">{{ format(now) }}</div>
    </div>
    <div>
      Today
      <div class="duration today">{{ format(duration.today) }}</div>
    </div>
    <div>
      All time
      <div class="duration alltime">{{ format(duration.alltime) }}</div>
    </div>
    <div @click.prevent="link">
      sync devices
    </div>
    <div @click.prevent="reset">
      reset
    </div>
  </div>
</template>
<style>
html, body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-size: cover;
  margin: 0;
  color: white;
  text-shadow: 0 0 10px black;
  font-size: 18px;
  touch-action: pan-y;
  user-select: none;
  width: 100%;
  height: 100%;
  background: url('/bg2.jpg') no-repeat center #111;
  background-size: cover;
}
#__nuxt, .app {
  height: 100vh;
  width: 100%;
}
.app {
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px auto 120px 60px;
}
.row {
  grid-column: 1 / 3;
}
.duration {
  font-size: 32px;
}
.now {
  font-size: 64px;
  font-weight: bold;
}
.close {
  text-align: right;
  padding-right: 20px;
  font-size: 32px;
}
</style>
<script setup>
import { format, duration, now, link, reset } from "./utils/model";
</script>