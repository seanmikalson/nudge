<template>
  <div>
    <div :class="['hand', handPosition]"></div>
    <div @click="positionSelected" id="handPos1" class="centered pos1 clock-position">1</div>
    <div @click="positionSelected" id="handPos2" class="centered pos2 clock-position">2</div>
    <div @click="positionSelected" id="handPos3" class="centered pos3 clock-position">3</div>
    <div @click="positionSelected" id="handPos4" class="centered pos4 clock-position">4</div>
    <div @click="positionSelected" id="handPos5" class="centered pos5 clock-position">5</div>
    <div @click="positionSelected" id="handPos6" class="centered pos6 clock-position">6</div>
    <div @click="positionSelected" id="handPos7" class="centered pos7 clock-position">7</div>
    <div @click="positionSelected" id="handPos8" class="centered pos8 clock-position">8</div>
    <div @click="positionSelected" id="handPos9" class="centered pos9 clock-position">9</div>
    <div @click="positionSelected" id="handPos10" class="centered pos10 clock-position">10</div>
    <div @click="positionSelected" id="handPos11" class="centered pos11 clock-position">11</div>
    <div @click="positionSelected" id="handPos12" class="centered pos12 clock-position">12</div>
  </div>
</template>

<script>
export default {
  name: 'time-picker',
  data: function() {
    return {
      handPosition: 'handPos1'
    };
  },
  methods: {
    positionSelected: function(event) {
      this.handPosition = event.target.id;
    }
  }
}
</script>

<style scoped>
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .hand {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 5px;
    background-color: red;
  }

  .handPos1 {
    transform: translateY(-50%) translateX(-30px) rotate(-60deg) translateX(30px);
  }
  .handPos2 {
    transform: translateY(-50%) translateX(-30px) rotate(-30deg) translateX(30px);
  }
  .handPos3 {
    transform: translateY(-50%) translateX(-30px) rotate(0) translateX(30px);
  }
  .handPos4 {
    transform: translateY(-50%) translateX(-30px) rotate(30deg) translateX(30px);
  }
  .handPos5 {
    transform: translateY(-50%) translateX(-30px) rotate(60deg) translateX(30px);
  }
  .handPos6 {
    transform: translateY(-50%) translateX(-30px) rotate(90deg) translateX(30px);
  }
  .handPos7 {
    transform: translateY(-50%) translateX(-30px) rotate(120deg) translateX(30px);
  }
  .handPos8 {
    transform: translateY(-50%) translateX(-30px) rotate(150deg) translateX(30px);
  }
  .handPos9 {
    transform: translateY(-50%) translateX(-30px) rotate(180deg) translateX(30px);
  }
  .handPos10 {
    transform: translateY(-50%) translateX(-30px) rotate(210deg) translateX(30px);
  }
  .handPos11 {
    transform: translateY(-50%) translateX(-30px) rotate(240deg) translateX(30px);
  }
  .handPos12 {
    transform: translateY(-50%) translateX(-30px) rotate(270deg) translateX(30px);
  }

  .pos1 {
    transform: translate(-50%, -50%) rotate(30deg) translateY(-70px) rotate(-30deg);
  }

  .pos2 {
    transform: translate(-50%, -50%) rotate(60deg) translateY(-70px) rotate(-60deg);
  }

  .pos3 {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-70px) rotate(-90deg);
  }

  .pos4 {
    transform: translate(-50%, -50%) rotate(120deg) translateY(-70px) rotate(-120deg);
  }

  .pos5 {
    transform: translate(-50%, -50%) rotate(150deg) translateY(-70px) rotate(-150deg);
  }

  .pos6 {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-70px) rotate(-180deg);
  }

  .pos7 {
    transform: translate(-50%, -50%) rotate(210deg) translateY(-70px) rotate(-210deg);
  }

  .pos8 {
    transform: translate(-50%, -50%) rotate(240deg) translateY(-70px) rotate(-240deg);
  }

  .pos9 {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-70px) rotate(-270deg);
  }

  .pos10 {
    transform: translate(-50%, -50%) rotate(300deg) translateY(-70px) rotate(-300deg);
  }

  .pos11 {
    transform: translate(-50%, -50%) rotate(330deg) translateY(-70px) rotate(-330deg);
  }

  .pos12 {
    transform: translate(-50%, -50%) rotate(360deg) translateY(-70px) rotate(-360deg);
  }

  .clock-position {
    width: 20px;
    height: 20px;
    text-align: center;
  }
</style>
