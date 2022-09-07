<template>
    <div class="home__layout">
        <homeHeader></homeHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import homeHeader from '../components/home-header.vue';

    export default{
components:{homeHeader}
    }
</script>