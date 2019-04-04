new Vue({
  el: "#app",
  data:{
    curentPage: "Wszystko",
    isActive: true,
    pages: ['Wszystko','Grafika','Filmy','Zakupy','Wiadomości','Więcej','Ustawienia','Narzędzia']
  },
  methods:{
    myfunc(cPage){

      this.curentPage = cPage;
      console.log(this.curentPage);

    }

  }
})
