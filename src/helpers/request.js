import axios from 'axios';

export const request = {
  methods: {
    post(route, params = {}){
      const url = 'https://anotaai-dev-xld2jmqk5q-uc.a.run.app/anotai';
      return axios.post(url + route, params, this.getConfig())
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
    },

    getConfig(){
      const config = {
        headers:{
          'Content-Type': 'application/json'
        }
      };
      return config;
    }
  }
}
