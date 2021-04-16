<template>
  <div class="contain">
    <div class="btn">
      <button v-show="isShowBtn" @click="handleOpen">Click Me</button>
      <DialogBox v-show="isShow" class="animate__bounceInDown"></DialogBox>
    </div>
  </div>
</template>

<script>
import DialogBox from '../components/dialogBox.vue'
export default {
  components: { DialogBox },
  data(){
    return{
      isShow:false,
      isShowBtn:true
    }
  },
  methods:{
    handleOpen(){
      this.isShow = true,
      this.isShowBtn = false
    }
  }
}
</script>

<style scoped>
.contain{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(25deg, #099d87, #79b39f, #bdc8b8, #fcdbd1)
}
.btn button{
  font-size: 18px;
  position: relative;
  z-index: 1;
  display: inline-block;
  letter-spacing: 2px;
  cursor: pointer;
  height: 50px;
  width: 150px;
  color: white;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  text-transform: uppercase;
  transition: 0.5s;
}
.btn button:hover{
  letter-spacing: 4px;
  height: 60px;
  cursor: pointer;
  animation: btn 0.5s;
  color: #161616;
}
button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-image: linear-gradient(25deg, #103b49, #575c65, #967e83, #d7a2a2);
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}

@keyframes btn {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}

</style>
