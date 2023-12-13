// Descrizione:

// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            mailArray: [],
            mail: "", 
        }
    },
    methods: {
        
    },
    mounted() {
        console.log("L'applicazione è caricata!!");

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                // const result = response.data;
                this.email = email.data.response;
                this.mailArray.push(this.email);
                console.log(email.data.response);
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                // const result = response.data;
                this.email = email.data.response;
                this.mailArray.push(this.email);
                console.log(email.data.response);
            })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            // const result = response.data;
            this.email = email.data.response;
            this.mailArray.push(this.email);
            console.log(email.data.response);
        });
    }
}).mount('#app')
