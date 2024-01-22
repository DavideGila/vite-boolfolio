<template>
    <div class="card">
        <img :src="store.imgPath + project.image" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.body }}</p>
            <button><router-link :to="{ name: 'single-project', params: { slug: project.slug } }"></router-link>View More</button>
        </div>
    </div>
</template>

<script>
import { store } from '../router/store'
export default {
    name: 'AppCard',
    props: ['project'],
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped></style>