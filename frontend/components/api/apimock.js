import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },
    list_tweets(){
        return mockasync([
            {
            id: 1111,
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
            id: 222,
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
            id: 32,
            author:
            {
              name:"Enéas Carneiro",
              username:"@eneasprona",
              avatar: 'https://i.ytimg.com/vi/VgLVM7CNa70/hqdefault.jpg', 
            },
            
            text: "Meu nome é Enéas!!",
            time: "43 min"
            },
        
          ])
    }
};

export default api;
