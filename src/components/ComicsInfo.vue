<template>
    <div class="row">
        <div class="col-sm-3 cover-img">
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
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            required: true
        },
        totalChaptor: {
            type: Number,
            required: true
        },
        intro: {
            type: String
        },
        coverImg: {
            type: String,
            required: true
        },
        name: {
            type: String,
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
.cover-img {
    text-align: center;
}

img {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 1em;
}

h2 {
    margin: 0 0 .4em;
}

ul {
    margin: 0 0 1em;
    padding: 0;
    list-style: none;
    font-size: 1em;
}
</style>
