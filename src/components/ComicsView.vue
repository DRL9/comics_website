<template>
    <div class="comics-intro">
        <div class="container">
            <div class="home">
                <router-link to="/">
                    <span class="glyphicon glyphicon-home"></span>
                </router-link>
            </div>
            <div class="search">
                <search-input></search-input>
            </div>
        </div>
        <div class="intro">
            <div class="container">
                <comics-info :author="author" :comics-id="comicsId" :total-chaptor="totalChaptor" :name="name" :intro="intro" :cover-img="coverImg"></comics-info>
            </div>
        </div>
        <div class="chaptors">
            <div class="container">
                <comics-chaptor :comics-id="comicsId" :chaptor-titles="chaptorTitles"></comics-chaptor>
            </div>
        </div>
    </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import ComicsInfo from '@/components/ComicsInfo.vue'
import ComicsChaptor from '@/components/ComicsChaptor.vue'
import { routerParamsNames } from '@/router'
import api from '@/api'
import { handleError } from '@/utils'

export default {
    components: {
        SearchInput,
        ComicsInfo,
        ComicsChaptor
    },
    data() {
        return {
            comicsId: '',
            intro: '',
            name: '',
            author: '',
            coverImg: '',
            chaptorTitles: []
        }
    },
    computed: {
        totalChaptor() {
            return this.chaptorTitles.length;
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

.home {
    margin: 0 1em;
    display: inline-block;
    vertical-align: middle;
    font-size: 30px;
    line-height: 0;
}

.search {
    display: inline-block;
    width: 80%;
    margin: 1em 0;
    vertical-align: middle;
}

.intro {
    margin: 1em 0;
}
</style>
