<template>
    <div class="container">
      <div class="login">
        <div class="wrapper">
          <h1>Восстановление пароля</h1>
          <p>Введите эл.почту, которую вы указывали при регистрации (длина почты должна быть больше 10 символов):</p>
          <input
            type="text"
            placeholder="Введите свою эл.почту"
            v-model="email"
          />
          <p v-show="show">Мы отправили вам письмо на почту с паролем для входа.</p>
          <formButton @click="recover">Восстановить пароль</formButton>
          <formButton @click="$router.push({name: 'Signup'})">Зарегистрироваться</formButton>
          <formButton @click="$router.push({name: 'Login'})">Войти</FormButton>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import formButton from "../components/UI/form-button.vue";
  
  export default {
    components: { formButton},
    data() {
      return {
        email: '',
        show: false,
      };
    },
    methods: {
        recover(){
            if(this.email.length > 10){
                this.show = true
            }
        }
    },
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
    height: 350px;
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
      button {
        text-align: left;
        margin-top: 12px;
        margin-right: 10px;
      }
    }
  }
  </style>
  