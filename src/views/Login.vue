<template>
  <div class="container">
    <div class="login">
      <div class="wrapper">
        <h1>Войдите в аккаунт</h1>
        <p>Эл.Почта:</p>
        <input
          type="text"
          placeholder="Введите свою эл.почту"
          :class="{error__input: isError}"
          v-model="email"
        />
        <p class="error__text"></p>
        <p>Пароль:</p>
        <input
          type="text"
          placeholder="Введите свой пароль"
          :class="{error__input: isError}"
          v-model="password"
        />
        <p class="error__text" v-show="isError">Пароль или эл.почта указана некорректно</p>
        <FormButton @click.prevent="checkData">Войти</FormButton>
        <FormButton @click="$router.push({name: 'Signup'})">Регистрация</FormButton>
        <FormButton @click="$router.push({name: 'Recover'})">Забыли пароль</FormButton>
      </div>
    </div>
  </div>
</template>

<script>
import formButton from "../components/UI/form-button.vue";
import FormButton from "../components/UI/form-button.vue";

export default {
  components: { formButton, FormButton },
  data() {
    return {
        isError: false,
        password: '',
        email: '',
    };
  },
  methods: {
    checkData(){
        if(this.password == '123456' && this.email == '123456'){
          localStorage.setItem('auth', 'true')
            this.$router.push({name: 'Home'})
        } else {
          this.isError = true
        }
    }
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.container {
  width: 10vw;
  height: 100vh;
}
.login {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 500px;
  min-width: 300px;
  height: 320px;
  background-color: var(--blue-color);
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
    input {
      margin-top: 10px;
    }
    button {
      text-align: left;
      margin-top: 12px;
      margin-right: 10px;
    }
  }
}
</style>
