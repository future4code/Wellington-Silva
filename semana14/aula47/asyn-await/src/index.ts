import axios from 'axios'

const baseUrl:string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/'

type User = {
    id: string,
    name: string,
    email:string
}


function main(){
    try{
    /* função nomeada */
    /*   async function getSubscribers(): Promise<User []>{
        const users = await axios.get(`${baseUrl}/subscribers/all`)
        return users.data.map((res:any)=>{
            return {
                id: res.id,
                name: res.name,
                email: res.email,
              };
        })
    } */

    /* ARROW FUNCTION */
    const getSubscribers2 = async():Promise<any []> => {
        const users = await axios.get(`${baseUrl}/subscribers/all`)
        return users.data.map((res:any)=>{
            return {
                 id: res.id,
                name: res.name,
                email: res.email,
            }
        }) 
    }

    async function createNews(title:string, content: string, date: number): Promise<void>{
        axios.put(`${baseUrl}/news`,{
            title: "Novidade a caminho",
            content: "Labenu: uma nova escola de programação",
            date: 1590522289000,
        })
        console.log()
    }

    const sendNotifications = async(users: User[], message: string): Promise<void> => {
        const promiseArray: Promise<any> [] = [];
        for (const user of users){
            await axios.post(`${baseUrl}/notifications/send`,{
                subscribeId: user.id,
                message: message,
            })
        }
        console.log("All notifications send")
    }

    const sendNotifications2 = async (users: User[],message: string): Promise<void> => {
        const promiseArray = [];
        for (const user of users) {
          promiseArray.push(axios.post(`${baseUrl}/notifications/send`, {
              subscriberId: user.id,
              message: message,
            })
          );
        }
      
        await Promise.all(promiseArray);
      };

    const createSubscriber = async(name:string, email: string) => {
        await axios.post(`${baseUrl}/subscribes`, {
            name,
            email
        })
        console.log(createSubscriber("Well", "well@dc.com"))
    }

    const createAndSendNotifications = async () => {
        try {
            await createNews(
              "Batman a caminho",
              "Batem palmas para entrar na batcaverna",
              1590522289000
            );
        
            const users = await getSubscribers2();
        
            await sendNotifications(users, "Testando mensagens");
          } catch (err) {
            console.log("err: ", err.message);
          }
        console.log(createAndSendNotifications())
    }
    
    const getAllNotifications = async (): Promise<any> => {
        const users = await getSubscribers2();
      
        const notificationPromises = [];
        for (const user of users) {
          notificationPromises.push(
            axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
          );
        }
      
        const result = await Promise.all(notificationPromises);
      
        const dataFromResult = result.map((res) => res.data);
      
        return dataFromResult;
      };
      console.log()

    }catch(err){
        console.log(err)
    }
}

main()