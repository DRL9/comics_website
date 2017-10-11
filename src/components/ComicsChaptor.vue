<template>
    <div>
        <div class="row header">
            <div class="col-sm-3">
                <h2>章节列表</h2>
            </div>
            <div class="col-sm-3">上次看到:
                <router-link v-if="lastSee" :to="'/ComicsView'+comicsId+'/'+lastSee">{{lastSeeTitle}}</router-link>
                <span v-else>---</span>
            </div>
            <div class="col-sm-3">最新章节:
                <router-link :to="'/ComicsView/'+comicsId+'/'+newChaptor">{{newChaptorTitle}}</router-link>
            </div>
            <div class="col-sm-3">
                <div class="btn-group btn-group-sm" role="group">
                    <button type="button" class="btn btn-default" @click="goPage(0)">1 - {{pagePerCount}}话</button>
                    <template v-if="chaptorTitles.length>pagePerCount">
                        <div class="btn-group btn-group-sm">
                            <popover trigger='hover' placement="bottom">
                                <button type="button" class="btn btn-default btn-sm" data-role="trigger">...</button>
                                <div slot="popover">
                                    <chaptor-page :total-chaptor-count="chaptorTitles.length" :page-per-count="pagePerCount" @pagination='goPage'></chaptor-page>
                                </div>
                            </popover>
                        </div>
                        <button type="button" class="btn btn-default" @click="goLastChaptor">最新{{pagePerCount}}话</button>
                    </template>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3 list" v-for="(title,index) of curPage" :key="chaptor=index+chaptorRecoup">
                <router-link :to="'/ComicsView/'+comicsId+'/'+chaptor" target=''>{{chaptor+1}} - {{title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Popover } from 'uiv'
import ChaptorPage from '@/components/ChaptorPage.vue'

export default {
    components: {
        Popover,
        ChaptorPage
    },
    props: {
        chaptorTitles: {
            type: Array,
            required: true
        },
        comicsId: {
            type: String,
            required: true
        },
        lastSee: {
            type: Number
        }
    },
    data() {
        return {
            pagePerCount: 30,
            page: [],
            curPageIndex: 0
        }
    },
    created() {
        this.page = this.pagation(this.chaptorTitles, this.pagePerCount);
    },
    watch: {
        chaptorTitles() {
            this.page = this.pagation(this.chaptorTitles, this.pagePerCount);
        }
    },
    computed: {
        newChaptor() {
            return this.chaptorTitles.length - 1;
        },
        newChaptorTitle() {
            return this.chaptorTitles[this.newChaptor];
        },
        lastSeeTitle() {
            return this.chaptorTitles[this.lastSee];
        },
        curPage() {
            return this.page[this.curPageIndex];
        },
        chaptorRecoup() {
            if (this.curPageIndex == 'last') {
                let tmp = this.chaptorTitles.length - this.pagePerCount;
                return tmp < 0 ? 0 : tmp;
            }
            return this.curPageIndex * this.pagePerCount;
        }
    },
    methods: {
        /**
         * @param {Array} titles
         * @param {Number} pagePerCount
         */
        pagation(titles, pagePerCount) {
            let pageCount = Math.ceil(titles.length / pagePerCount);
            let page = [];
            for (let i = 0; i < pageCount; i++) {
                page.push(titles.slice(i * pagePerCount, (i + 1) * pagePerCount));
            }
            page['last'] = titles.slice(-pagePerCount, titles.length);
            return page;
        },
        goPage(pageNum) {
            this.curPageIndex = pageNum;
        },
        goLastChaptor() {
            this.curPageIndex = 'last';
        }
    }
}
</script>

<style scoped>
.header>div {
    margin-bottom: .3em;
}

h2 {
    margin: 0;
}

.list a {
    display: block;
    padding: .9em 1em .2em;
    border-bottom: 1px solid #ccc;
}

a {
    color: #000;
}

a:hover {
    color: orange;
    border-color: orange;
    text-decoration: none;
}
</style>
