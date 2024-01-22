<template>
    <div>
        <AppHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from './router/store';
import AppHeader from './components/AppHeader.vue';

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
        AppHeader
    },
    mounted() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped></style>./router/store