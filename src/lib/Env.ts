import {resolve} from 'path';
import { logger } from './Logger';
export async function loadEnv() {
  const result = require('dotenv').config({path: resolve('./secrets/','.env')});
  if (result.error){
  }
  logger({message:`Parsed .env file:`,json: result.parsed ,source:'Env'});
}

/*
{
      path: resolve('../../secrets/','.env'),
      encoding: 'utf-8',
      overrideProcessEnv: false
    }
*/