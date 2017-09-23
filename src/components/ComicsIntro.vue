<template>
    <div class="comics-intro">
        <div class="container">
            <search-input></search-input>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img :src="coverImg" :alt="id">
                </div>
                <div class="col-sm-9">
                    <h2>{{name}} </h2>
                    <p>{{intro}}</p>
                </div>
            </div>
            <ul>
                <li v-for="chaptor of totalChaptor" :key="chaptor">
                    <router-link :to="'/ComicsView/'+id+'/'+chaptor">{{chaptor}}</router-link>
                </li>
            </ul>
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
            id: '',
            intro: '',
            totalChaptor: 0,
            name: '',
            coverImg: ''
        }
    },
    created() {
        this.setInfo();
    },
    methods: {
        setInfo() {
            this.id = this.$route.params[routerParamsNames.comicsId];
            api.getComicsInfo(this.id).then((info) => {
                this.coverImg = info.coverImg;
                this.name = info.name;
                this.intro = info.intro;
                this.totalChaptor = info.totalChaptor;
            }, handleError);
        }
    }
}
</script>

