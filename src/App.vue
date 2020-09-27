<template>
   <DeeplinkGenerator />
</template>

<script>
import DeeplinkGenerator from './components/DeeplinkGenerator.jsx';

export default {
   name: 'App',
   components: {
      DeeplinkGenerator,
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   margin: 14px;
}
</style>
