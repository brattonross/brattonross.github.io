<template>
  <div class="container">
    <h1 class="title">
      brattonross.github.io
    </h1>

    <img class="dank-circle" src="../assets/pajaDank.png" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.dank-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg) translateX(25vh);
  }
  to {
    transform: rotate(-360deg) translateX(25vh);
  }
}
</style>
