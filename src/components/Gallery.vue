<template>
  <div>
    {{ files }}
    <h2>Last optimized</h2>
    <div v-for="file in filesReversed" :key="file.id">
      <h1 v-if="progress === 100">Completed</h1>
      <h1 v-else>Not Completed</h1>
      <img
              class="image"
              :src="file.base64 || file.link"


      />
      <div class="progress" :style="'width: '+progress+'%'" v-if="showProgress"></div>
      <!-- <ProgressBar />
     -->
<!--      <p>{{file.name}}</p>-->
    </div>
   
  </div>
</template>
<script>
export default{
  props:
    ['files', "progress"],


  data() {
    return {

    };
  },
  computed: {
    filesReversed: function() {
      return this.files.slice().reverse();
    }
  },
  methods: {

  },
}
</script>
<style scoped>
  .image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
  .progress {
    background-color: #0f0;
    border: 1px solid red;
  }
</style>