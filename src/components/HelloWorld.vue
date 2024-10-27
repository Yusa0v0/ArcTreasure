<template>
  <!-- <div>Lorem ipsum dolor</div> -->
  <div ref="vantaRef" class="vantaRef">
    <div class="top-left" style="z-index: 1">
      <a href="https://github.com/Yusa0v0">
        <i class="ent-github"> </i>
        GitHub
      </a>
    </div>
    <div class="container">
      <div class="eight">
        <h1 id="typed-title"></h1>
        <h3 id="typed-content"></h3>
        <!-- <br> <div class="btn customize">
          <i class="ent-cog"> </i>
          Customize & Get Code
        </div> -->
        <!-- <div class="btn restart" style="display: none">Randomize!</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import * as THREE from "three";
// import BIRDS from "vanta/src/vanta.birds";
// import Fog from "vanta/src/vanta.fog";
// import WAVES from "vanta/src/vanta.waves";
import Clouds from "vanta/src/vanta.clouds";
//import Clouds2 from "vanta/src/vanta.clouds2"; // 有问题
// import Globe from "vanta/src/vanta.globe";
// import Net from "vanta/src/vanta.net";
// import Cells from "vanta/src/vanta.cells";
// import Trunk from "vanta/src/vanta.trunk"; //不可用
// import Topology from "vanta/src/vanta.topology"; //不可用
// import Dots from "vanta/src/vanta.dots"; //不可用
// import Rings from "vanta/src/vanta.rings";
// import Halo from "vanta/src/vanta.halo";

export default {
  mounted() {
    this.vantaEffect = Clouds({
      el: this.$refs.vantaRef,
      THREE: THREE,
    });
    // // 这里重新设置样式
    this.vantaEffect.setOptions({
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0x0,
      // 漂亮的紫色
      cloudShadowColor: 0x3640d4,
      speed: 1.1,
    });

    var typedTitle = {
      strings: ["Lorem ipsum"],
      typeSpeed: 200,
      showCursor: false,
    };
    var typedContent = {
      strings: [
        "Lorem ipsum dolor sit amet ex sed magna. Eirmod sed ea magna aliquyam no labore sit accusam vulputate labore ipsum sea. Vero erat ipsum invidunt nonumy eirmod dolore dolor diam sadipscing nulla amet sadipscing soluta sadipscing laoreet. Autem lobortis accumsan amet enim. Clita ut kasd autem voluptua amet facilisis et ut minim sed stet. Et diam diam diam ipsum tempor ut accusam sed invidunt et dignissim lorem enim eros lobortis sed ut sea.",
      ],
      typeSpeed: 10,
      // cursorChar: "-",
      showCursor: false,
    };
    new Typed("#typed-title", typedTitle);
    new Promise((resolve) => {
      setTimeout(() => {
        new Typed("#typed-content", typedContent);
        resolve("操作完成");
      }, 3500);
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>
<style lang="scss" scoped>
.vantaRef {
  height: 100vh;
  width: 100vw;
  top: 0;
  // position: absolute;
  display: flex;
  align-items: center; /* 垂直居中 */
}

.eight {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  --rem: 16;
  color: #2b2928;
  text-align: left;
  float: left;
  display: inline;
  margin-left: 1.25%;
  margin-right: 1.25%;
  width: 47.4666666%;
}
.container {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  --rem: 16;
  font-family: circular, "segoe ui", sans-serif;
  color: #2b2928;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 1;
  text-align: left;
  // max-width: 1500px;
}
.top-left,
.top-right,
.bottom-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
