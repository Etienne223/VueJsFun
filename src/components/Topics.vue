<template>
  <div class="container mx-auto my-6">
    <div v-for="topic in topics" :key="topic.url" class="container mx-auto">
    <router-link to="/">
      <img
        class="rounded-full mx-auto"
        :src=topic.url
        :width="topic.size"
        :height="topic.size"
      />
    </router-link>
      <h2 class="text-white text-center">{{ topic.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 1,
          name: "React JS",
          url: require(`../assets/images/react.png`),
          size: 100,
        },
        {
          id: 2,
          name: "Vue JS",
          url: require(`../assets/images/vuejs.png`),
          size: 100,
        },
        {
          id: 3,
          name: "Angular JS",
          url: require(`../assets/images/angularjs.png`),
          size: 100,
        },
        {
          id: 4,
          name: "Vanilla JS",
          url: require(`../assets/images/javascript.jpg`),
          size: 100,
        },
      ],
    };
  },
};
</script>

<style></style>
