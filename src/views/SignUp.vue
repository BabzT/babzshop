<template>
  <div class="signupdiv">
    <h1 class="font-bold text-3xl mb-5"><span class="text-green-600">SIGN</span> UP</h1>
    
    <form @submit.prevent="signUp" class="w-11/12 md:w-5/12 flex flex-col items-center justify-center">
        <input class="input" 
        @keydown.space.prevent 
        v-model="name" 
        type="text" 
        placeholder="Enter Your Name" 
        minlength="4"
        required>

        <input class="input" 
        @keydown.space.prevent 
        v-model="email" 
        type="text" 
        placeholder="Enter Your Email"  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" 
        required>

        <input class="input" 
        @keydown.space.prevent 
        v-model="password" 
        type="text" 
        minlength="6" 
        placeholder="Enter Password" 
        required>

        <button class="submitbtn" type="submit">Sign Up</button>
        <router-link :to="{name:'login'}" class="link">Already have an Account? Login here</router-link>
    </form>
    
  </div>
</template>

<script>
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
        signUp(){
            const user = {
                name:this.name,
                email:this.email,
                password:this.password
            }
            console.log(user)
            this.$router.push({name:'home'})
        }
    }
}
</script>
