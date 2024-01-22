<template>
    <h1>Project List</h1>
    <div class="container">
        <div class="row">
            <div v-for="project in projects" :key="project.id" class="col-6">
                <AppCard :project="project" />
            </div>          
        </div>
    </div>
    
    
    
</template>

<script>
import { store } from '../router/store'
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
    export default {
        name: 'AppProjects',
        data() {
            return {
                store,
                projects: [],
            }
        },
        methods: {
            getAllProjects(){
                axios.get(store.apiUrl + '/projects').then((res) => {
                    console.log(res.data);
                    this.projects = res.data.results;
                })
            }
        },
        components:{ AppCard },
        mounted() {
            this.getAllProjects();
        },
    }
</script>

<style lang="scss" scoped>

</style>