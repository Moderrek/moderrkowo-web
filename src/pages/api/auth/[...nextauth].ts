import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import sha512 from '@/lib/crypto';
import excuteQuery, { AuthUser } from '@/lib/database';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        name: { label: 'name', type: 'text', placeholder: 'nick' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { name, password } = credentials as {
          name: string;
          password: string;
        };

        const result: AuthUser[] = await excuteQuery(
          'SELECT `UUID`,`NAME`,`PASSWORD` FROM `auth` WHERE `NAME`=? LIMIT 1;',
          [name]
        );

        if (!result || result.length === 0) {
          throw new Error('User Not Found');
        }

        const user = result[0];
        const isAuthenticated = sha512(password) === user.PASSWORD;
        if (!isAuthenticated) {
          throw new Error('Invalid Credentials');
        }

        return { id: user.UUID, name: user.NAME };
      },
    }),
  ],
  pages: {
    signIn: '/zaloguj',
  },
  secret: process.env.ACCESS_TOKEN,
};

export default NextAuth(authOptions);
