<template>
    <div class="comics-intro">
        <div class="container">
            <div class="search">
                <search-input></search-input>
            </div>
        </div>
        <div class="intro">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <img :src="coverImg" :alt="comicsId">
                    </div>
                    <div class="col-sm-9">
                        <h2>{{name}} </h2>
                        <ul>
                            <li>作者：{{author}}</li>
                            <li>总章节数：{{totalChaptor}}</li>
                            <li>简介：{{intro}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="chaptors">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" v-for="(title,index) of chaptorTitles" :key="chaptor=index+1">
                        <router-link :to="'/ComicsView/'+comicsId+'/'+chaptor">{{chaptor}} - {{title}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import { routerParamsNames } from '@/router'
import api from '@/api'
import { handleError } from '@/utils'

export default {
    components: {
        SearchInput
    },
    data() {
        return {
            comicsId: '',
            intro: '',
            totalChaptor: 0,
            name: '',
            author: '',
            coverImg: '',
            chaptorTitles: []
        }
    },
    created() {
        this.comicsId = this.$route.params[routerParamsNames.comicsId];
        this.fetchData();
    },
    methods: {
        fetchData() {
            api.getComicsInfo(this.comicsId).then((info) => {
                this.setInfo(info);
            }, handleError);
        },
        setInfo(info) {
            this.coverImg = info.coverImg;
            this.name = info.name;
            this.intro = info.intro;
            this.totalChaptor = info.totalChaptor;
            this.author = info.author;
            this.chaptorTitles = info.chaptorTitles;
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 15em;
}

.search {
    margin: 1em 0;
}

.intro {
    margin: 1em 0;
}

.intro img {
    margin-bottom: 1em;
}

.intro h2 {
    margin: 0 0 .4em;
}

.intro ul {
    margin: 0 0 1em;
    padding: 0;
    list-style: none;
    font-size: 1em;
}

.chaptors a {
    display: block;
    padding: .3em 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #000;
}

.chaptors a:hover {
    color: skyblue;
    border-color: skyblue;
    text-decoration: none;
}
</style>
