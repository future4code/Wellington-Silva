import jwt from 'jsonwebtoken'

interface AuthenticationData {
    id: string
}

export class Authenticator {
    private static EXPIRE_IN = "1min"

    generateToken(payload: AuthenticationData): string{
        const token = jwt.sign(
            {
                id: payload.id,
            },

            "bananinha",

            {
                expiresIn: Authenticator.EXPIRE_IN,
            }
        )

        return token;
    }

    getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, "bananinha")as any;
        const result: AuthenticationData = 
        {
            id:  payload.id
        }

        return result;
    }
}