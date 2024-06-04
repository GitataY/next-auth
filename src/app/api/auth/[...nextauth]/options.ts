import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string, 
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name : "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password",
                    type: "text",
                    placeholder: "your-password"

                }
            },
            async authorize(credentials){
                //This is where I'd retrieve user data from a db
                //to verify with credentials
                const user = {
                    id:"23",
                    name: "yvonne",
                    password: "password"
                }
                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } 
                else {
                    return null
                }
            }
        })
    ],
}