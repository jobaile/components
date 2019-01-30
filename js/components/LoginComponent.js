export default { //look into webpacks
    //you can put your html stuff in here
    template: `
    <div id="login">
        <h1>Log In</h1>
        <input type="text" name="username" v-model="input.username" placeholder="user name">
        <input type="password" name="password" v-model="input.password">
        <button type="button" v-on:click="login()">Log In!</button>    
    </div>
    `,

    data(){ //since we're working on a component this is going to be a function
        return{
            input: {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        login(){
            console.log("trying to log in!");

            //check against our mock account creds

            if(this.input.username != "" && this.input.pssword !=""){ //! means if it's not empty
                if (this.input.password == this.$parent.mockAccount.password && this.input.username == this.$parent.mockAccount.username){
                    //console.log("you are logged in!");
                    this.$emit("authenticated", true); //emitting the event
                    this.$router.replace({name: "users"});
                }else{
                    console.log("login failed");
                 }
            }else {
                console.log("username and password cant be blank");
            }
        }
    }
}