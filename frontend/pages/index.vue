<template>
  <home :tweets="tweets"></home>
</template>

<script>
import home from '~/components/Home'
export default {
  data () {
      return {
        tweets: [
          {
          id: 1,
          author:
          {
            name:"Clodovil Hernandes",
            username:"@clo",
            avatar: 'https://1.bp.blogspot.com/-Rv7I8pDtetc/WEMhvAnIeCI/AAAAAAAAEsY/dozPmtY9hxMoXo1B1-SCyzSo012H6DDXgCLcB/s1600/clodovil-morto-pelos-illuminati-falou-de-mais.jpg', 
          },
          
          text: "Não me importo com o que falam pelas minhas costas. Meu traseiro não tem ouvido.",
          time: "23 min"
          },
          {
          id: 2,
          author:
          {
            name:"Luna",
            username:"@lula",
            avatar: 'https://uploads.metropoles.com/wp-content/uploads/2018/02/21162212/240417DF-lula-em-brasi%CC%81lia-032-840x560.jpg', 
          },
          
          text: "Não existe alma mais honesta do que eu nesse país",
          time: "13 min"
          },
          {
          id: 3,
          author:
          {
            name:"Enéas Carneiro",
            username:"@eneasprona",
            avatar: 'https://i.ytimg.com/vi/VgLVM7CNa70/hqdefault.jpg', 
          },
          
          text: "Meu nome é Enéas!!",
          time: "43 min"
          },
          
          
        ]
      }
    },
  components:{
    home,
  }
}
</script>

<style>
</style>
