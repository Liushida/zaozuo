import axios from 'axios';

export default {
  get: function(opt){
    axios.get(opt.url, {
      params: opt.data
    })
    .then(function(res){
      opt.callback(res)
    })
    .catch(function(error){
      console.log(error);
    });
  },
  post: function(opt){
    axios.post(opt.url, {
      params: opt.data,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then(function(res){
      console.log(res)
      opt.callback(res)
    })
    .catch(function(error){
      console.log(error);
    });
  }
}
