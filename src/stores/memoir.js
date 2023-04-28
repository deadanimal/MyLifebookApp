import { defineStore } from "pinia";
import axios from "axios"

export const useMemoirStore = defineStore({
  id: "memoirStore",

  state: () => ({

    authenticated: false,
    userId: null,
    userToken: null

  }),

  getters: {
    // ...
  },

  actions: {
    // ...

    createToken() {

      axios.post('https://memoir.my/api/tokens', {
        email: 'afeezaziz@gmail.com',
        password: '<3Saufia'
      }).then((response) => {
        this.authenticated = true;
        this.userId = response['data']['userId'];
        this.userToken = response['data']['token'];
        
      }).catch((error) => {
        console.log(error)
      })

    },

    lol() {
      console.log(this.userToken);
    },

    deleteTokens() {
      axios.delete('https://memoir.my/api/tokens')
      .then((data) => {
        this.authenticated = false;
        this.userId = null;
        this.userToken = null;
        
        console.log(data);
      }).catch((error) => {
        console.log(error)
      })
    }
  },

});