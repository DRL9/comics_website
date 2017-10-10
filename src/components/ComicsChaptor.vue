<template>
    <div class="row">
        <div class="col-sm-3" v-for="(title,index) of chaptorTitles" :key="chaptor=index+1">
            <router-link :to="'/ComicsView/'+comicsId+'/'+index">{{chaptor}} - {{title}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        chaptorTitles: {
            type: Array,
            required: true
        },
        comicsId: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    display: block;
    padding: .3em 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #000;
}

a:hover {
    color: orange;
    border-color: orange;
    text-decoration: none;
}
</style>
