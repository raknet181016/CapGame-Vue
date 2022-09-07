<template>
  <div class="modal__wrapper">
    <div class="login">
      <div class="wrapper">
        <h1>Вывод денег:</h1>
        <p>
          Укажите номер телефона или карты (минимальная сумма вывода - 100руб)
        </p>
        <input type="text" placeholder="Введите номер счёта" />
        <formButton @click="withdrawalMoney">Вывести</formButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.login {
  z-index: 1;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 500px;
  min-width: 300px;
  height: 250px;
  background-color: var(#34445c);
  border-radius: 12px;
  -webkit-box-shadow: 12px 18px 11px 0px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 12px 18px 11px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 12px 18px 11px 0px rgba(255, 255, 255, 0.2);
  .wrapper {
    padding: 30px;
    h1 {
      text-align: center;
    }
    p {
      text-align: left;
      margin-top: 20px;
    }
    button {
      text-align: left;
      margin-top: 12px;
      margin-right: 10px;
    }
  }
}
</style>

<script>
import formButton from "../components/UI/form-button.vue";

export default {
  components: { formButton },
  methods: {
    withdrawalMoney(){
      if(this.$store.getters.getMoney >= 100) {
        this.$store.commit('CHANGE_MONEY', 0)
      }
    }
  }
};
</script>
