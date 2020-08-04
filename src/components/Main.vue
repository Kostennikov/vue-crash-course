<template>
  <div class="main">
    <h1 class="cover-heading">Online PNG optimizer by Sijeko</h1>

    <section class="target">
      <img class="icon-download" src="https://png.sijeko.ru/img/galleryIcon.png" alt="Image" />
      <p>Drop your PNG files here!</p>
      <p>
        <small>Up to 4 MB each one.</small>
      </p>
      <div id="app">
        <input type="file" id="fileInput" multiple @change="fileChange" />

        <button id="send" @click="sendFiles">send</button>
        <div id="output">

        </div>
      </div>
    </section>

    <div class="gallery">
      <ul>
        <Gallery
        :files="files"
        />
      </ul>
    </div>
  </div>
</template>





<script>

// import draggable from "vuedraggable";
import Gallery from "@/components/Gallery";
// import ProgressBar from "@/components/ProgressBar";

import Vue from "vue";

export default {
  components: {
    Gallery,
    // ProgressBar
    // draggable,
  },
  props: ["progress"],
  data() {
    return {
      files: [],
      info: {
        base64: 'base64'
      }
    };
  },

  methods: {
    
    fileChange: function(event) {
      let input = event.target;
      for (let i = 0, l = input.files.length; i < l; i++) {
        this.prepareFile(input.files[i]);
      }
    },
    prepareFile: function(file) {
      let reader = new FileReader(),
        info = { binaryFile: file, name: file.name };
      this.files.push(info);

      reader.addEventListener("load", function(event) {
        let base64 = event.target.result;
        Vue.set(info, "base64", base64);
      });
      reader.readAsDataURL(file);
    },
    // sendFiles: function() {
    //   for (let i = 0, l = this.files.length; i < l; i++) {
    //     Vue.set(this.files[i], "status","ok");
    //   }
    // },

    sendFiles: function() {
      // for (let i = 0, l = this.files.length; i < l; i++) {
      //   Vue.set(this.files[i], "status", "progress");
      // }

      // const circle = document.querySelector(".circle");
      // const radius = circle.r.baseVal.value;
      
      
      this.progress = 0;
      this.showProgress = true;
     
      const interval = setInterval(() => {
        this.progress += 25;
        
        if (this.progress >= 100) {
          clearInterval(interval);
        }
      }, 500);
      }
    }
  };


</script>



<style scoped>
.main {
  padding: 0 1.5rem;
  min-width: 320px;
}
.cover-heading {
  text-align: center;
}
.target {
  cursor: pointer;
  position: relative;
  border: 0.2rem dashed #616778;
  max-width: 38rem;
  margin: 1rem auto;
  padding: 0 0 1.6rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease-out, border-color 0.3s ease-out;
}
.target:hover {
  cursor: pointer;
  border: 0.2rem dashed #fff;
  transition: color 0.3s ease-out, border-color 0.3s ease-out;
}
.icon-download {
  max-width: 110px;
  height: auto;
  margin: 20px 0px 10px 0px;
}

.image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}
.image_ok {
  border: 3px solid #0ff;
}
.image_bad {
  border: 3px solid #f00;
}
.progress {
  background-color: #0f0;
  border: 1px solid red;
}
</style>