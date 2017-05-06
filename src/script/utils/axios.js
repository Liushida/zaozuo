import axios from 'axios';

export default {
  all: function(opt){
    axios({
      type: opt.type,
      url: opt.url,
      data: opt.data
    })
    .then(function(res){
      opt.callback(res)
    })
  }
}
