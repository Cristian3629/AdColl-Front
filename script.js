var header_us = new Vue({
  el:'#us',
  data:{
    isActive:true,
  },
  methods:{
    activeElement:function(){
      isActive = true;
    }
  }
})


var header_register = new Vue({
  el:'#register',
  data:{
    active:false
  },
  methods:{
    activeElement:function()
  }
})

var header_login = new Vue({
  el :'#login',
  data:{
    active:false
  }
})


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})


var app4 = new Vue({
  el: '#app-4',
  data: {
    seen: true
  }
})


var app5 = new Vue({
  el: '#app-5',
  data: {
    seen: true
  }
})
