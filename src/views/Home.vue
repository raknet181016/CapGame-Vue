<template>
  <QiwiModal v-if="this.$store.getters.getModalQiwi"></QiwiModal>
  <BringOutModal v-if="this.$store.getters.getModalWithdrawal"></BringOutModal>

  <div class="game">
    <div class="game__panel">
      <div class="game__setting">
        <div class="game__amount game__item">
          <p>Сумма</p>
          <input
            type="number"
            title="Минимальное значение: 1"
            v-model="amount"
            @blur="normalizeAmount"
          />
          <div class="item__buttons">
            <button
              @click="
                amount *= 2;
                normalizeAmount();
              "
            >
              Удвоить
            </button>
            <button
              @click="
                amount /= 2;
                normalizeAmount();
              "
            >
              Половина
            </button>
            <button @click="amount = this.$store.getters.getMoney">Макс</button>
            <button
              @click="
                amount = 1;
                normalizeAmount();
              "
            >
              Мин
            </button>
          </div>
        </div>
        <div class="game__percent game__item">
          <p>Процент</p>
          <input
            type="number"
            title="Минимальное значение: 1; Максимальное значение: 95"
            v-model="percent"
            @blur="normalizePercent"
          />
          <div class="item__buttons">
            <button
              @click="
                percent *= 2;
                normalizePercent();
              "
            >
              Удвоить
            </button>
            <button
              @click="
                percent /= 2;
                normalizePercent();
              "
            >
              Половина
            </button>
            <button
              @click="
                percent = 95;
                normalizePercent();
              "
            >
              Макс
            </button>
            <button
              @click="
                percent = 1;
                normalizePercent();
              "
            >
              Мин
            </button>
          </div>
        </div>
      </div>
      <div class="game__play">
        <h1>{{ winningAmount }}</h1>
        <p>Возможный выигрыш</p>
        <p>0 - 999999</p>
        <p>Диапазон</p>
        <p>0 - {{ range }}</p>
        <p>Ваш диапазон</p>
        <FormButton @click="startGame">Играть</FormButton>
      </div>
    </div>
    <div class="game__history">
      <h1>Ваши последние 10 игр:</h1>
      <div class="history">
        <div
          class="history__item"
          v-for="item of gameHistory"
          :key="item"
          :class="item.win ? 'greenborder' : 'redborder'"
        >
          <p>
            Ставка: <span>{{ item.bet }}</span>
          </p>
          <p>
            Шанс: <span>{{ item.chance }}</span>
          </p>
          <p>
            Выигрыш: <span>{{ item.price }}</span>
          </p>
          <p>
            Результат: <span>{{ item.result }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QiwiModal from "../components/qiwi-modal.vue";
import BringOutModal from "../components/bringOut-modal.vue";
import FormButton from "../components/UI/form-button.vue";
import { selfRandom } from "../selfRandom.js";

export default {
  components: { QiwiModal, BringOutModal, FormButton },
  data() {
    return {
      amount: 1,
      percent: 1,
      maxRange: 999999,
      gameHistory: [],
    };
  },
  methods: {
    normalizePercent() {
      if (this.percent < 1) {
        this.percent = 1;
      } else if (this.percent > 95) {
        this.percent = 95;
      }
    },
    normalizeAmount() {
      if (this.amount < 1) {
        this.amount = 1;
      }
    },
    startGame() {
      const money = this.$store.getters.getMoney;
      const dropped = selfRandom(0, 999999);

      this.$store.commit("CHANGE_MONEY", money - this.amount);

      if (dropped < this.range) {
        this.$store.commit("CHANGE_MONEY", money + +this.winningAmount);
        this.changeHistory(true);
      } else {
        this.changeHistory(false);
      }
    },
    changeHistory(win) {
    if (this.gameHistory.length >= 10) {
        this.gameHistory.pop();
    }

      const round = {};
      round.bet = this.amount;
      round.chance = this.percent;
      round.prize = this.winningAmount;
      round.win = win;
      if(win) {
        round.result = "Победа";
      } else {
        round.result = "Поражение";
      }

      this.gameHistory.unshift(round);
    },
  },
  computed: {
    range() {
      return Math.trunc((this.percent / 100) * this.maxRange);
    },
    winningAmount() {
      return ((this.amount * 100) / this.percent).toFixed(2);
    },
  },
  watch: {},
};
</script>

<style lang="scss">
.game {
  p {
    color: #1e1f2f;
    display: block;
  }
  h1 {
    font-size: 28px;
    color: #1e1f2f;
    display: block;
  }
  padding: 30px;
  max-width: 80%;
  min-width: 300px;
  min-height: 500px;
  background: white;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 27px 2px rgba(256, 256, 256, 0.2);
  -moz-box-shadow: 0px 0px 27px 2px rgba(256, 256, 256, 0.2);
  box-shadow: 0px 0px 27px 2px rgba(256, 256, 256, 0.2);
  &__panel {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &__item {
    max-width: 300px;
    margin-right: 50px;
    display: inline-block;
    input {
      margin-top: 10px;
    }
    button {
      padding: 5px;
      background-color: gray;
      border-radius: 2px;
    }
  }
}

.item__buttons {
  display: flex;
  flex-wrap: wrap;
  button {
    margin-top: 10px;
  }
}

.game__history {
  margin-top: 30px;
}
.game__play {
  text-align: center;
  p {
    color: #1e1f2f;
    display: block;
    margin-top: 10px;
  }
  h1 {
    font-size: 60px;
    color: #66ddf6;
  }
  button {
    margin-top: 10px;
  }
}

.history {
}
.history__item {
  width: 100%;
  background: white;
  padding: 8px;
  border-radius: 6px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  span {
    color: #1e1f2f;
  }
}
.redborder {
  border: 2px solid red;
}
.greenborder {
  border: 2px solid #50bb8b;
}
</style>
