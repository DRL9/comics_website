<template>
    <figure>
        <router-link :to="'/ComicsView/'+id">
            <div class="img">
                <img :src="coverImg" :alt="id">
            </div>
            <figcaption>
                {{name}}
            </figcaption>
        </router-link>
    </figure>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        coverImg: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
figure {
    margin: 1em 0;
    text-align: center;
    vertical-align: middle;
}

a {
    color: #000;
}

a:hover {
    text-decoration: none;
    color: orange;
}

.img {
    display: inline-block;
    width: 133px;
    height: 177px;
    border: 1px solid #ccc;
}

.img:hover {
    border-color: orange;
}

figure img {
    max-width: 100%;
    max-height: 100%;
}
</style>
