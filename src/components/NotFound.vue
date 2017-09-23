<template>
    <div class="not-found">
        <div class="container">
            <h1>404</h1>
            <hr>
            <h2>Ohh! 页面找不到了!</h2>
            <div>
                <button type="button" class="btn btn-info" @click="backHomePage">
                    <span class="glyphicon glyphicon-home"></span> 返回主页
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default {
    methods: {
        backHomePage() {
            router.push('/');
        }
    }

}
</script>

<style scoped>
.not-found {
    color: #FAF9F5;
    text-align: center;
}

h1 {
    color: #E1E0DB;
    font-weight: 800;
    font-size: 6em;
}

hr {
    width: 10em;
    border-width: .1em;
    border-color: #D8D7D3;
}

h2 {
    color: #D8D8D6;
}
</style>
