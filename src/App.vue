<template>
  <div id="app">
    <TheNavigation />
    <transition name="fade">
      <router-view :key="$route.path.slug" />
    </transition>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
// import TheNavigation from './components/TheNavigation.vue';
export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* .moveUp-enter-active,
.moveUp-leave-active {
  transition: opacity 1s, transform 1s;
}

.moveUp-enter,
.moveUp-leave-to {
  opacity: 0;
  transform: translateX(-30%);
} */

/* .moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
} */

.fade-enter-active,
.face-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
