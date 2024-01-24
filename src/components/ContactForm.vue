<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="name" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
            <div id="nameHelp" class="form-text">Insert your name</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Your Address</label>
            <input type="address" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
            <div id="addressHelp" class="form-text">Insert your Address</div>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea type="message" class="form-control" id="message" aria-describedby="messageHelp" v-model="message"></textarea>
            <div id="messageHelp" class="form-text">Insert your Message</div>
        </div>

        <button type="submit" class="btn btn-primary me-3">Submit</button>
        <button type="reset" class="btn btn-info">Reset</button>
    </form>
</template>

<script>
import axios from 'axios';
import {store} from '../router/store'
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            address: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }
            axios.post(store.apiUrl + '/contacts', formData).then((res) => {
                this.name = '',
                this.email = '',
                this.address = '',
                this.message = ''
            }).catch((err) => {
                console.log('error', err);
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>