// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// START
var app = new Vue(
    {
        el: '#root',
        data: {
            randomMail: [],
            done: false
        },
    methods: {
        getRandomMailFromApi() {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.randomMail.push(response.data.response)
                });
            }
        },
        checkMail() {
            if (this.randomMail.length >= 10) {
                this.done = true
            }
            setInterval(this.checkMail, 3000)
        }

    },
    mounted() {
        this.getRandomMailFromApi()
        this.checkMail()
    }
    }
);