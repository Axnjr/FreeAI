/* eslint-disable no-unused-vars */
// copy as it is neccesary for next-auth with typescript
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
    }
  }
}