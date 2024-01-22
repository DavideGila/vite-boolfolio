<template>
    <header>
        <AppHeader />
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer>
        <AppFooter />
    </footer>
</template>

<script>
import axios from 'axios';
import { store } from './router/store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            store,
            projects: [],
        }
    },
    methods: {
        getAllProjects() {
            axios.get(store.apiUrl + '/projects').then((res) => {
                console.log(res.data);
                this.projects = res.data.results;
                console.log(this.projects)
            })
        },

    },
    components: {
        AppHeader,
        AppFooter
    },
    mounted() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped></style>./router/store