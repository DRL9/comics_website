<template>
    <div class="main">
        <div class="container">
            <div class="search">
                <search-input></search-input>
            </div>
            <h1>
                漫画列表
            </h1>
            <div class="row">
                <div class="col-sm-3" v-for="comics of list" :key="comics.id">
                    <comics-item :id="comics.id" :cover-img="comics.coverImg" :name="comics.name">
                    </comics-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';
import SearchInput from '@/components/SearchInput.vue';
import ComicsItem from '@/components/ComicsItem.vue';

export default {
    components: {
        SearchInput,
        ComicsItem
    },
    data() {
        return {
            list: []
        };
    },
    created() {
        this.fetchComicsList();
    },
    methods: {
        fetchComicsList() {
            return api.searchComics().then((list) => {
                list.forEach((comics) => {
                    this.list.push({
                        id: comics.comicsId,
                        name: comics.comicsName,
                        coverImg: comics.coverImg
                    });
                });
            });
        }
    }
};
</script>

<style>
.search {
  padding: 1em 0;
}
</style>
