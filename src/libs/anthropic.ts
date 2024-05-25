import dotenv from 'dotenv';

dotenv.config();

//get the project id from the environment variable
const projectId = process.env.PROJECT_ID;
const region = process.env.REGION;

export const claude = async () => {
    console.log(`Project ID: ${projectId}`);
    console.log(`Region: ${region}`);
}