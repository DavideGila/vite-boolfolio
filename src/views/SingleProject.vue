<template>
    <div>
        <h1>{{ project.title }}</h1>
        <img :src="store.imgPath + project.image" :alt="project.title">
    </div>
</template>

<script>
    import { store } from '../router/store'
    import axios from 'axios';
    export default {
        name: 'SingleProject',
        data(){
            return {
                store,
                project: {},
            }
        },
        methods:{
            getProjectData(){
                console.log(this.$route);
                axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                    console.log(res.data);
                    if(res.data.results){
                       this.project = res.data.results 
                    } 
                })
            }
        },
        mounted(){
            this.getProjectData();
        }
    }
</script>

<style lang="scss" scoped>

</style>