  <template>
 <div id="app">
<svg class="progress-ring" width="120" height="120">
  <circle class="progress-ring__circle" cx="60" cy="60" r="58" :style="{'stroke-dashoffset': offset}"></circle>
</svg>
  </div>
</template>

<script>
const circle = document.querySelector('.progress-ring__circle');
const r = circle.r.baseVal.value;
const circumference = 2 * Math.PI * r;

circle.style.strokeDasharray = circumference +" "+ circumference;
import Vue from "vue";
var app = new Vue({
  el: "#app",
  data: {
    progress: 0
  },
  computed: {
    offset: function(){
      return circumference - this.progress / 100 * circumference;
    }
  }
});

// Просто анимация app.progress
 var alternate = 0;
(function animateProgress(){
  console.log(app.progress)
  if(app.progress <= 0) alternate = 0;
  if(app.progress >= 100) alternate = 1;
  if(alternate){
    app.progress -= 1;
  } else {
    app.progress += 1;
  }
  requestAnimationFrame(animateProgress);
})();
</script>


<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #abdcff, #0396ff);
}


.progress-ring__circle {
  stroke-width: 4;
  stroke: #ffffff;
  fill: none;
  transform-origin: center;
  transform: rotate(-90deg);
}
</style>