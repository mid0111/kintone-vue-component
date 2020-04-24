<template>
  <div v-if="visible" class="k-spinner-outer">
    <div class="k-spinner">
      <div class="k-loader" :class="[loadingClass]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
      required: false
    },
    type: {
      type: String,
      default: 'normal',
      require: false
    }
  },

  computed: {
    loadingClass() {
      return this.type === 'ring' ? 'ring' : 'normal';
    }
  }
};
</script>

<style lang="css" scoped>
.k-spinner-outer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.k-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.k-loader {
  border-radius: 50%;
}
.k-loader.normal {
  width: 1em;
  height: 1em;
  font-size: 10px;
  -webkit-animation: k-load 1.1s infinite ease;
  animation: k-load 1.1s infinite ease;
}
.k-loader.ring {
  width: 3.5em;
  height: 3.5em;
  border: 6px solid transparent;
  border-top-color: #3498db;
  border-bottom-color: white;
  border-left-color: white;
  border-right-color: white;
  -webkit-animation: k-ring-load 1.1s infinite ease;
  animation: k-ring-load 1.1s infinite ease;
}

@keyframes k-load {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.8),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.5),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.7),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.8),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.5),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.7),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.8),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.5),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.7),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.8),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.5),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.7),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.8),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.5),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.7),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.8),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.5),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.7),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.8),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.5),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.7),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 1);
  }
}
@keyframes k-load {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.8),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.5),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.7),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.8),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.5),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.7),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.8),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.5),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.7),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.8),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.5),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.7),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.8),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.2),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.5),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.7),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.8),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.5),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.7),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.8),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(52, 152, 219, 0.2),
      1.8em -1.8em 0 0em rgba(52, 152, 219, 0.2),
      2.5em 0em 0 0em rgba(52, 152, 219, 0.2),
      1.75em 1.75em 0 0em rgba(52, 152, 219, 0.2),
      0em 2.5em 0 0em rgba(52, 152, 219, 0.2),
      -1.8em 1.8em 0 0em rgba(52, 152, 219, 0.5),
      -2.6em 0em 0 0em rgba(52, 152, 219, 0.7),
      -1.8em -1.8em 0 0em rgba(52, 152, 219, 1);
  }
}

@keyframes k-ring-load {
  0% {
    transform: rotate(0deg);
  }
  3% {
    transform: rotate(10deg);
  }
  6% {
    transform: rotate(20deg);
  }
  8% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(40deg);
  }
  14% {
    transform: rotate(50deg);
  }
  17% {
    transform: rotate(60deg);
  }
  19% {
    transform: rotate(70deg);
  }
  22% {
    transform: rotate(80deg);
  }
  25% {
    transform: rotate(90deg);
  }
  28% {
    transform: rotate(100deg);
  }
  31% {
    transform: rotate(110deg);
  }
  33% {
    transform: rotate(120deg);
  }
  36% {
    transform: rotate(130deg);
  }
  39% {
    transform: rotate(140deg);
  }
  42% {
    transform: rotate(150deg);
  }
  44% {
    transform: rotate(160deg);
  }
  47% {
    transform: rotate(170deg);
  }
  50% {
    transform: rotate(180deg);
  }
  53% {
    transform: rotate(190deg);
  }
  56% {
    transform: rotate(200deg);
  }
  58% {
    transform: rotate(210deg);
  }
  61% {
    transform: rotate(220deg);
  }
  64% {
    transform: rotate(230deg);
  }
  67% {
    transform: rotate(240deg);
  }
  69% {
    transform: rotate(250deg);
  }
  72% {
    transform: rotate(260deg);
  }
  75% {
    transform: rotate(270deg);
  }
  78% {
    transform: rotate(280deg);
  }
  81% {
    transform: rotate(290deg);
  }
  83% {
    transform: rotate(300deg);
  }
  86% {
    transform: rotate(310deg);
  }
  89% {
    transform: rotate(320deg);
  }
  92% {
    transform: rotate(330deg);
  }
  94% {
    transform: rotate(340deg);
  }
  97% {
    transform: rotate(350deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes k-ring-load {
  0% {
    transform: rotate(0deg);
  }
  3% {
    transform: rotate(10deg);
  }
  6% {
    transform: rotate(20deg);
  }
  8% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(40deg);
  }
  14% {
    transform: rotate(50deg);
  }
  17% {
    transform: rotate(60deg);
  }
  19% {
    transform: rotate(70deg);
  }
  22% {
    transform: rotate(80deg);
  }
  25% {
    transform: rotate(90deg);
  }
  28% {
    transform: rotate(100deg);
  }
  31% {
    transform: rotate(110deg);
  }
  33% {
    transform: rotate(120deg);
  }
  36% {
    transform: rotate(130deg);
  }
  39% {
    transform: rotate(140deg);
  }
  42% {
    transform: rotate(150deg);
  }
  44% {
    transform: rotate(160deg);
  }
  47% {
    transform: rotate(170deg);
  }
  50% {
    transform: rotate(180deg);
  }
  53% {
    transform: rotate(190deg);
  }
  56% {
    transform: rotate(200deg);
  }
  58% {
    transform: rotate(210deg);
  }
  61% {
    transform: rotate(220deg);
  }
  64% {
    transform: rotate(230deg);
  }
  67% {
    transform: rotate(240deg);
  }
  69% {
    transform: rotate(250deg);
  }
  72% {
    transform: rotate(260deg);
  }
  75% {
    transform: rotate(270deg);
  }
  78% {
    transform: rotate(280deg);
  }
  81% {
    transform: rotate(290deg);
  }
  83% {
    transform: rotate(300deg);
  }
  86% {
    transform: rotate(310deg);
  }
  89% {
    transform: rotate(320deg);
  }
  92% {
    transform: rotate(330deg);
  }
  94% {
    transform: rotate(340deg);
  }
  97% {
    transform: rotate(350deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
