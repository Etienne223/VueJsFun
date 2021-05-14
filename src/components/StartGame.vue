<template>
  <div class="container flex mx-auto">
    <div class="flex flex-col gap-12 m-auto mt-32">
      <router-link class="transform hover:scale-110" to="/game">
        <button
          class="
            focus:outline-none
            w-72
            lg:w-96
            h-16
            lg:h-20
            rounded
            px-3
            py-2
            m-1
            border-b-4 border-l-2
            shadow-lg
            border-yellow-400
            bg-yellow-400
            active:bg-yellow-500 active:bg-yellow-400
            text-white
            active:bg-yellow-600
            active:border-yellow-600
          "
        >
          <h2 class="text-3xl">New Game</h2>
        </button>
      </router-link>
      <router-link class="transform hover:scale-110" to="/login">
        <button
          class="
            focus:outline-none
            w-72
            lg:w-96
            h-16
            lg:h-20
            rounded
            px-3
            py-2
            m-1
            border-b-4 border-l-2
            shadow-lg
            bg-yellow-400
            border-yellow-400
            text-white
            active:bg-yellow-600
            active:border-yellow-600
          "
        >
          <h2 class="text-3xl">Login</h2>
        </button>
      </router-link>
      <router-link class="transform hover:scale-110" to="/settings">
        <button
          class="
            focus:outline-none
            w-72
            lg:w-96
            h-16
            lg:h-20
            rounded
            px-3
            py-2
            m-1
            border-b-4 border-l-2
            shadow-lg
            bg-yellow-400
            border-yellow-400
            text-white
            active:bg-yellow-600
            active:border-yellow-600
          "
        >
          <h2 class="text-3xl">Settings</h2>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  font-family: "Luckiest Guy", sans-serif;
}
</style>
