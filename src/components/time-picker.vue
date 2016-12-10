<template>
  <div class="time-container">
    <div class="clock-container" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
      <div :class="['hand', handPosition]"></div>
      <div id="handPos1" class="centered pos1 clock-position">1</div>
      <div id="handPos2" class="centered pos2 clock-position">2</div>
      <div id="handPos3" class="centered pos3 clock-position">3</div>
      <div id="handPos4" class="centered pos4 clock-position">4</div>
      <div id="handPos5" class="centered pos5 clock-position">5</div>
      <div id="handPos6" class="centered pos6 clock-position">6</div>
      <div id="handPos7" class="centered pos7 clock-position">7</div>
      <div id="handPos8" class="centered pos8 clock-position">8</div>
      <div id="handPos9" class="centered pos9 clock-position">9</div>
      <div id="handPos10" class="centered pos10 clock-position">10</div>
      <div id="handPos11" class="centered pos11 clock-position">11</div>
      <div id="handPos12" class="centered pos12 clock-position">12</div>
    </div>
    <div class="confirm-cancel-time">
      <button class="time-cancel" @click="cancel">CANCEL</button>
      <button class="time-ok" @click="ok">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'time-picker',
  data: function() {
    return {
      handPosition: 'handPos1',
      positions: []
    };
  },
  mounted: function() {
    this.$el.querySelector('#' + this.handPosition).classList.add('selected');
    var childElements = this.$el.children;
    for(var i = 0; i < childElements.length; i++) {
      var element = childElements[i];
      if(element.className.indexOf('clock-position') !== -1) {
        var rect = element.getBoundingClientRect();
        var x = (rect.right + rect.left) / 2;
        var y = (rect.bottom + rect.top) / 2;
        var position = {};
        position.element = element;
        position.center = {x: x, y: y};
        this.positions.push(position);
      }
    }

  },
  methods: {
    positionSelected: function(event) {
      this.$el.querySelector('#' + this.handPosition).classList.remove('selected');
      this.$el.querySelector('#' + event.target.id).classList.add('selected');
      this.handPosition = event.target.id;
    },
    mousedown: function(event) {
      this.trackMouse = true;
      this.calculateClosestElement(event.x, event.y);
    },
    mousemove: function(event) {
      if(this.trackMouse) {
        this.calculateClosestElement(event.x, event.y);
      }
    },
    mouseup: function() {
      this.trackMouse = false;
    },
    calculateClosestElement: function(x, y) {
      var distance = Infinity;
      var closestElement = null;
      for(var i = 0; i < this.positions.length; i++) {
        var center = this.positions[i].center;
        this.positions[i].element.classList.remove('selected');
        var distanceToElement = Math.sqrt(Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2));
        if(distanceToElement < distance) {
          distance = distanceToElement;
          closestElement = this.positions[i].element;
        }
      }

      closestElement.classList.add('selected');
      this.handPosition = closestElement.id;
    },
    ok: function() {
      this.$emit('time-selected');
    },
    cancel: function() {
      this.$emit('canceled');
    }
  }
}
</script>

<style scoped lang="scss">

  button {
    background-color: transparent;
    border: none;
    color: red;
    font-weight: bold;

    &:active {
      outline: none;
      background-color: #8c8c8c;
    }

    &:focus {
      outline: none;
    }
  }

  .confirm-cancel-time {
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
  }

  .time-container {
    margin: 20px auto 0 auto;
    background-color: #4d4d4d;
    width: 170px;
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .clock-container {
    width: 170px;
    height: 170px;
    position: relative;
    -webkit-user-select: none;
    color: white;
  }

  .selected {
    background-color: red;
    color: white;
    border-radius: 12px;
  }

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
    height: 2px;
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
    width: 24px;
    height: 24px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }
</style>
