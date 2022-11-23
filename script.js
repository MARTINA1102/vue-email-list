/*Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

new Vue({
	el:'#root',
	data:{
		email:[],
	},
	methods:{
		getEmail(){
			this.email=[];
			for (let i=0; i<10;i++){
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse=>{
					this.email.push(axiosResponse.data.response);
				})
			
			}
		}
	},	
		
		
	

	});
	
	





