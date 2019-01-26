import dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const pass = process.env.DB_PASSWORD || '';
const user = process.env.DB_USER || '';

interface IDatabase {
  db: string;
  password: string;
  url: string;
  user: string;
}

interface IEnvironment {
  database: IDatabase;
}

const development: IEnvironment = {
  // mongodb connection settings
  database: {
    db: 'development',
    password: pass,
    url: 'mongodb+srv://cluster0-zfc0b.mongodb.net/test?retryWrites=true',
    user,
  },
};

const production: IEnvironment = {
  // mongodb connection settings
  database: {
    db: 'production',
    password: pass,
    url: 'mongodb+srv://cluster0-zfc0b.mongodb.net/test?retryWrites=true',
    user,
  },
};

const config = (): IEnvironment => {
  switch (env) {
    case 'development':
      return development;
      case 'production':
      return production;
    default:
      return development;
  }
};

export default config();
