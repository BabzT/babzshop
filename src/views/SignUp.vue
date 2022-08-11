<template>
  <div class="signupdiv">
    <transition name="errorMsg" mode="out-in">
        <p v-if="showError" class="errorMsg">This Email has already been used!</p>
    </transition>
    <h1 class="font-bold text-3xl mb-2"><span class="text-green-600">SIGN</span> UP</h1>
    
    <form @submit.prevent="signUp" class="w-10/12 md:w-2/5 flex flex-col items-center justify-center">
        <label for="name" class="labels">Full Name</label>
        <input class="input"
        v-model.trim="name" 
        type="text" 
        id="name"
        placeholder="Akinwobi Babatunde" 
        minlength="4"
        required>

        <label for="username" class="labels">Username</label>
        <input class="input" 
        v-model.trim="username" 
        id="username"
        type="text" 
        placeholder="Babz" 
        maxlength="10"
        required>

        <label for="email" class="labels">Email</label>
        <input class="input" 
        v-model.trim="email" 
        id="email"
        type="text" 
        placeholder="example@gmail.com"  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" 
        required>

        <div class="passworddiv">
            <label for="password" class="labels">Password</label>
            <input class="input"
            :class="{invalid : isInvalid}"
            v-model.trim="password" 
            id="password"
            :type="isNotVisible ? 'password' : 'text'" 
            minlength="6" 
            placeholder="Enter Password" 
            required>

            <span v-if="isNotVisible" @click="togglePassword" class="material-symbols-outlined visibility">visibility_off</span>
            <span v-else @click="togglePassword" class="material-symbols-outlined visibility">visibility</span>
        </div>

        <button v-if="signupbtn" class="submitbtn" type="submit">Sign Up</button>
        <button v-if="loading" disabled type="button" class="py-2.5 px-3 mt-5 mr-2 text-sm font-bold text-green-600 bg-white rounded-lg border border-gray-200 shadow focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700 inline-flex items-center">
            <svg role="status" class="inline mr-2 w-5 h-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#108243"/>
            </svg>
            Loading...
        </button>
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
            username:'',
            email:'',
            password:'',
            showError:false,
            signupbtn:true,
            loading:false,
            isInvalid:false,
            isNotVisible:true
        }
    },
    methods:{
        signUp(){
            const userexist = localStorage.getItem('user');
            const user = {
                name:this.name,
                username:this.username,
                email:this.email,
                password:this.password
            };
            const userinfo = {
                email:this.email,
                password:this.password
            }
            if(userexist){
                const email = JSON.parse(userexist).email;
                if(email === this.email){
                    this.showError = true
                    setTimeout(() => this.showError = false, 5000)
                }
                else if(this.password.length >= 6){
                    this.signupbtn = false;
                    this.loading = true;
                    setTimeout(() => this.$router.push({name:'home'}), 3000)
                    localStorage.setItem('user', JSON.stringify(user))
                    sessionStorage.setItem('userinfo', JSON.stringify(userinfo))
                }else{
                    console.log('password')
                    this.isInvalid = true;
                    setTimeout(() => this.isInvalid = false, 2000)
                }
            }
            else if(this.password.length >= 6){
                this.signupbtn = false;
                this.loading = true;
                setTimeout(() => this.$router.push({name:'home'}), 3000)
                localStorage.setItem('user', JSON.stringify(user))
                sessionStorage.setItem('userinfo', JSON.stringify(userinfo))  
            }else{
                console.log('password')
                this.isInvalid = true
                setTimeout(() => this.isInvalid = false, 2000)
            }
        },
        togglePassword(){
            this.isNotVisible = !this.isNotVisible
        }
    }
}
</script>
