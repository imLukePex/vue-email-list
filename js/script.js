// Descrizione:

// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
           mail: 0 
        }
    },
    methods: {
        
    },
    mounted() {
        console.log("L'applicazione è caricata!!");

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // const result = response.data;
                console.log(response.data.response);
                this.mail = response.data.response;
            });
    }
}).mount('#app')
