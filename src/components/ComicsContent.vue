<template>
    <div class="comics-content">
        <div class="container">
            <h1>第{{chaptor}}话 {{title}}</h1>
            <figure v-for="(img,index) of imgList" :key="page=index+1">
                <img :src="img" :alt="'page-'+page" />
                <figcaption>{{page}} / {{imgList.length}}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import api from '../api'
import { handleError } from '../utils'
import { routerParamsNames } from '../router'

export default {
    data() {
        return {
            title: '',
            comicsId: '',
            chaptor: 0,
            imgList: []
        }
    },
    created() {
        this.setInfo();
    },
    methods: {
        setInfo() {
            this.comicsId = this.$route.params[routerParamsNames.comicsId];
            this.chaptor = this.$route.params[routerParamsNames.chaptor];
            api.getComicsChaptorInfo(this.comicsId, this.chaptor).then(
                ({ title, imgList }) => {
                    this.title = title;
                    this.imgList = imgList;
                }, (err) => {
                    handleError(err);
                }
            )
        }
    }
}
</script>

<style scoped>
.comics-content {
    background: #EDECEA;
}

h1 {
    margin: 1em 0;
    padding: .86em 0;
    text-align: center;
    font-family: 'yahei';
    font-size: 1.6em;
    border: 1px grey dashed;
    border-style: dotted;
    background: #fff;
}

figure {
    margin-bottom: 1em;
    padding: .2em 0;
    text-align: center;
    background-color: #fff;
    box-shadow: 3px 3px 5px 1px #606060;
}

figure img {
    max-width: 100%;
}

figcaption {
    margin: .2em 0;
    color: purple;
    font-style: italic;
    font-size: 1em;
}
</style>
