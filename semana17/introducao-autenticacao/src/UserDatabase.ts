import knex from 'knex';

export class UserDatabase{
    private tableName = "User"
    private connection =  knex({
        client: "mysql",
            connection: {
                host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
                port: 3306,
                user: "julian_wellington_silva",
                password: "nsy5cFXimB9usW6f5mz6",
                database: "julian_wellington_silva_db",
            }
    });

    async createUser(
        id: string, 
        name: string, 
        email:string, 
        password:string
    ){
        try {
          await this.connection.insert({
                    id,
                    name,
                    email,
                    password
            }
        ).into(this.tableName)


        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserByEmail(email: string): Promise<any>{
        try {
            const result = await this.connection
            .select("*")
            .from(this.tableName)
            .where({email})

            return result[0];

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}