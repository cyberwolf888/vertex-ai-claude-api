import {claude} from "../libs/anthropic";
import dotenv from 'dotenv';
import {ModelInterface} from "../interfaces/ModelInterface";
dotenv.config();

const projectId: string | undefined = process.env.PROJECT_ID;

export const getGeneralMessage = async (prompt: string, max_token: number, model: ModelInterface) => {
    try{
        const result = await claude(projectId, model.region).messages.create({
            model: model.name,
            max_tokens: max_token,
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        });

        // const response = JSON.stringify(result, null, 2);
        return result ?? false;
    }catch (e:any){
        console.error(e);
        return false;
    }
}

export const getAgentMeetingScribe = async (prompt: string, max_token: number, model: ModelInterface) => {
    try{
        const result = await claude(projectId, model.region).messages.create({
            model: model.name,
            max_tokens: max_token,
            temperature: 0.5,
            system: "Your task is to review the provided meeting notes and create a concise summary that captures the essential information, focusing on key takeaways and action items assigned to specific individuals or departments during the meeting. Use clear and professional language, and organize the summary in a logical manner using appropriate formatting such as headings, subheadings, and bullet points. Ensure that the summary is easy to understand and provides a comprehensive but succinct overview of the meeting's content, with a particular focus on clearly indicating who is responsible for each action item.",
            messages: [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt
                        }
                    ]
                }
            ]
        });

        // const response = JSON.stringify(result, null, 2);
        return result ?? false;
    }catch (e:any){
        console.error(e);
        return false;
    }
}