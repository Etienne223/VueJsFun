<template>
  <div class="container relative flex items-center justify-center mx-auto">
    <h1 id="title1" class="text-6xl lg:text-8xl xl:text-9xl text-green-300 absolutepy-3">Question Mark</h1>
    <h1 id="title2" class="text-6xl lg:text-8xl xl:text-9xl text-yellow-300 absolute  py-3">Question Mark</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
h1{
  font-family: "Luckiest Guy", sans-serif;
  margin-top: 40px;
}

#title1{
  animation: title1Move 2s ease-in-out infinite;
  text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.150) ;
}
#title2{
  animation: title2Move 3s ease-in-out infinite;
}

@keyframes title1Move {
  0% {
   transform: translateY(3px);
 }
 50%{
   transform: translateY(20px);
 }
  100% {
    transform: translateY(3px);
  }
}
@keyframes title2Move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
