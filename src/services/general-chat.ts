import {getGeneralMessage} from "../models/claude-3";
import {ModelInterface} from "../interfaces/ModelInterface";
import {MODEL_OPUS, MODEL_SONNET} from "../libs/helpers";


export const generalChat = async (prompt: string, max_token: number = 100, temperature: number, system_prompt: string, model: ModelInterface = MODEL_OPUS, ) => {
    const response = await getGeneralMessage(prompt, max_token, temperature, system_prompt, model);
    if (!response) {
        return false;
    }
    return response?.content[0]?.text || false;
}
