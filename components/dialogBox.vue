<template>
  <div class="container">
     <div class="dialog animate__animated  animate__backInLeft">
        <img class="picture" src="../assets/cat.png">
        <div class="dialog-header">
          <h3>对话框标题</h3>
        </div>
        <div class="dialog-body">
            <textarea placeholder="这是正文内容,点击输入..." class="commentbody" rows="7"></textarea>
            <span class="bottom"></span>
            <span class="right"></span>
            <span class="top"></span>
            <span class="left"></span>
        </div>
        <div class="dialog-footer">
            <img class="pictureA" src="../assets/catA.png" alt="">
            <img class="pictureB" src="../assets/catB.png" alt="">
            <button @click="closeSelf">关闭</button>
            <button @click="confirm">确认</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialogBox',
  props: {

  },
  data() {
    return {
    }
  },
  methods: {
    confirm(){
      alert('您点击了确认')
    },
    closeSelf() {
      alert('您点击了取消')
    }
  }
}
</script>

<style scoped>
.container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog {
    position: relative;
    z-index: 1;
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    width: 700px;
    animation-duration:2s
}
.picture{
    position: absolute;
    top: -163px;
    left: 190px;
    width: 317px;
    height: 171px;
}
.dialog-header {
    color: #313131;
    justify-content: center;
    padding: 15px;
    display: flex;
}
.dialog-footer {
    justify-content: center;
    padding: 10px;
    display: flex;
}
.dialog-footer img{
    width: 55px;
    height: 55px;
    z-index: 3;
}
.pictureA{
    position: absolute;
    top: 180px;
    left:215px;
}
.pictureB{
    position: absolute;
    top: 180px;
    left:427px;
}
.dialog-body {
    position: relative;
    padding: 15px 15px;
    margin: 10px 20px;
}
.commentbody{
    background-image: url(../assets/comment-bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    resize: vertical;
    display: block;
    float: none;
    width: 100%;
    color: #635b31;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
}
.commentbody:focus {
    outline: none;
}
span {
    position: absolute;
    background-image: linear-gradient(25deg, #d55745, #bb836b, #92a693, #27c6bd);
    transition: transform 0.5s ease;
}
.bottom,
.top {
    height: 2px;
    left: 0;
    right: 0;
    transform: scaleX(0);
}
.left,
.right {
    width: 2px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
}
.bottom {
    bottom: 0;
    transform-origin: bottom right;
}
.commentbody:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
}
.right {
    right: 0;
    transform-origin: top right;
}
.commentbody:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
}
.top {
    top: 0;
    transform-origin: top left;
}
.commentbody:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
}
.left {
    left: 0;
    transform-origin: bottom left;
}
.commentbody:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
}
button {
    margin: 0 60px;
    border-radius: 18px;
    width: 90px;
    height: 35px;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    font-weight: 700;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;
    cursor: pointer;
    /* background-color: #00bec1; */
    background-image: linear-gradient(25deg, #d82353, #e16849, #e69938, #e8c511)
}

button::after {
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
    transition: transform 0.6s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
}
</style>