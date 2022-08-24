import 'dotenv/config';
import monk from 'monk';

function getDB() {
  if (!process.env.MONGODB_URI) {
    console.error('No MONGODB_URI found in env variables');
  }
  
  return monk(process.env.MONGODB_URI as string);
}

export default { getDB };
