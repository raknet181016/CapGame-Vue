<template>
    <header>
        <div class="header__groups">
            <div class="header__ul">
                <ul>
                    <li><a @click="$router.push({name: 'Home'})">Главная</a></li>
                    <li><a @click="$router.push({name: 'Faq'})">Честная игра</a></li>
                </ul>
            </div>
            <div class="header__buttons">
                <template v-if="auth">
                    <p>{{money}} руб.</p>
                    <formButton @click="this.$store.commit('SHOW_MODAL', 'modalQiwi')">Пополнить</formButton>
                    <formButton @click="this.$store.commit('OPEN_MODAL', 'modalWithdrawal')">Вывести</formButton>
                    <formButton @click="leave">Выйти</formButton>
                </template>
                <template v-else>
                    <formButton @click="$router.push({name: 'Login'})">Войти</FormButton>
                </template>
            </div>
        </div>
    </header>
</template>
<script>
import formButton from './UI/form-button.vue'

export default{
    components: {formButton},
    data(){
        return{
            auth: false,
        }
    },
    methods: {
leave(){
    localStorage.removeItem('auth')
    this.$router.push({name: 'Login'})
}
    },

    mounted(){
        if(localStorage.getItem('auth') === 'true'){
            this.auth = true
        } else {
            this.auth = false
        }
    },
    computed: {
        money(){
            return this.$store.getters.getMoney.toFixed(2)
        }
    }
}
</script>
<style>
    .header__groups{
        padding: 30px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    li{
        display: inline-block;
        margin-right: 20px;
    }
    p{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        margin-right: 10px;
    }
.header__buttons{
    padding: 0;
}
</style>
