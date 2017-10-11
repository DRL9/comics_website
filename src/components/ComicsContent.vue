<template>
    <div class="comics-content">
        <div class="container">
            <h1>第{{chaptor+1}}话 {{title}}</h1>
            <figure v-for="(img,index) of comicsView" :key="page=index+1">
                <img :src="img" :alt="'page-'+page" />
                <figcaption>{{page}} / {{imgList.length}}</figcaption>
            </figure>
            <infinite-loading @infinite='infiniteHandler' v-if="imgList.length>0" spinner="circles">
                <span slot="no-more">最后一张</span>
            </infinite-loading>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import { handleError } from '@/utils'
import { routerParamsNames } from '@/router'
import InfiniteLoading from 'vue-infinite-loading'

//每次加载图片数量
const IMG_COUNT_PER_LOAD = 3;

export default {
    components: {
        InfiniteLoading
    },
    data() {
        return {
            title: '',
            comicsId: '',
            chaptor: 0,
            imgList: [],
            comicsView: []
        }
    },
    created() {
        this.setInfo();
    },
    methods: {
        setInfo() {
            this.comicsId = this.$route.params[routerParamsNames.comicsId];
            this.chaptor = this.$route.params[routerParamsNames.chaptor] - 0;
            api.getComicsChaptorInfo(this.comicsId, this.chaptor).then(
                ({ title, imgList }) => {
                    this.title = title;
                    this.imgList = imgList;
                }, (err) => {
                    handleError(err);
                }
            )
        },
        infiniteHandler($state) {
            if (this.comicsView.length == this.imgList.length && this.imgList.length > 0) {
                $state.complete();
            }
            else {
                let endIndex = Math.min(this.comicsView.length + IMG_COUNT_PER_LOAD, this.imgList.length);
                for (let i = this.comicsView.length; i < endIndex; i++) {
                    this.comicsView.push(this.imgList[i]);
                }
                setTimeout(function() {
                    $state.loaded();
                }, 1000);
            }
        }
    }
}
</script>

<style scoped>
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
