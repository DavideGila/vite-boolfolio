<template>
    <div>
        <h1>Ciao</h1>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from './router/store'

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
            axios.get(store.apiUrl + '/projects', { params: { 'page': this.currentPage } }).then((res) => {
                console.log(res.data);
                this.projects = res.data.results.data;
                console.log(this.projects)
            })
        },

    },
    mounted() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped></style>./router/store