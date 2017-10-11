<template>
    <div class="btn-group btn-group-sm btn-group-vertical">
        <button class="btn btn-default" v-for="(page,index) in pageArray" :key="index" @click='goPage(index+1)'>{{page}}</button>
    </div>
</template>

<script>
export default {
    props: {
        pagePerCount: {
            type: Number,
            required: true
        },
        totalChaptorCount: {
            type: Number,
            required: true
        }
    },
    computed: {
        pageArray() {
            let arr = [];
            let count = Math.floor(this.totalChaptorCount / this.pagePerCount);
            let lastPageOnlyOne = (this.totalChaptorCount - this.pagePerCount * count) == 1;
            for (let i = 1; i < count; i++) {
                arr.push(`${i * this.pagePerCount + 1} - ${(i + 1) * this.pagePerCount}话`);
            }
            if (lastPageOnlyOne) {
                arr.push(`${this.totalChaptorCount}话`);
            } else {
                arr.push(`${this.pagePerCount * count + 1} - ${this.totalChaptorCount}话`)
            }
            return arr;
        }
    },
    methods: {
        goPage(pageNum) {
            this.$emit('pagination', pageNum);
        }
    }
}
</script>

