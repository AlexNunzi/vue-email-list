const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: []
        }
    },
    methods:{
        generateMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                    this.mailList.push(response.data.response);
                }
            );
        }
    },
    mounted(){
        for(i = 0; i < 10; i++){
            this.generateMail();
        }
    }
}).mount('#app')