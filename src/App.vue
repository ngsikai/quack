<template>
  <div id="app">
    <header>
      <span>Quack</span>
    </header>
    
    <main>
      <img id="logo" src="./assets/quack_logo.png" alt="Quack Logo">
      <br>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="css">
body {
  margin: 0;
  background-color: lightyellow;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

#logo{
  width: 25%;
  margin: 0 0 50px 0em;
}

#quacktop{
  position: relative;
  height: 100%;
}
</style>
