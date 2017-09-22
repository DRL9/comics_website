<template>
    <figure>
        <router-link :to="'/ComicsView/'+id">
            <img :src="coverImg" :alt="id">
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
    text-align: center;
}

figure img {
    max-width: 100%;
}
</style>
