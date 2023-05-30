import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT ? process.env.MYSQL_PORT : '3306'),
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

export type ModerrkowoUser = {
  UUID: string;
  NAME: string;
  MONEY: number;
  SEASON_ONE_COINS: 0;
  RANK: string;
  STUFF_RANK: string;
  LEVELS: string;
  QUEST_DATA: string;
  LAST_SEEN: Date;
  REGISTERED: Date;
  SIDEBAR: boolean;
  PLAYING_TIME: number;
  VERSION: string;
};

export type AuthUser = {
  UUID: string;
  NAME: string;
  PASSWORD: string;
};

export default async function excuteQuery(
  query: string,
  values: Array<string | number>
): Promise<any> {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
