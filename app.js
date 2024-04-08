// Utilizzando Vue
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const {createApp} = Vue

createApp({
    data(){
        return{
            emails:[],
            nEmails: 10
        }
    },

    methods:{

        //creo una funzione in cui sfrutto la libreria AXIOS per inviare una richiesta, col metodo .get, al server mediante l'URL
        //mi faccio ritornare la risposta col metodo .then e, grazie all'uso dell'arrow function,
        //aggiungo le email generate nell'array presente in data()
        generateEmails(email){
            for(let i = 0; i < email; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const generatedEmail = res.data.response
    
                    this.emails.push(generatedEmail)
                })
            }
        }
    },

    //richiamo la funzione generata assegnando come parametro quanti indirizzi ho bisogno
    created(){
        this.generateEmails(this.nEmails)
    }
}).mount('#app')