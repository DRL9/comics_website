<template>
    <div class="comics-content">
        <h1>第{{chaptor}}话 {{title}}</h1>
        <div>
            <figure v-for="(img,index) of imgList" :key="page=index+1">
                <img :src="img" :alt="'page-'+page" />
                <figcaption>{{page}}/{{imgList.length}}</figcaption>
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

