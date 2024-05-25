import {ModelInterface} from "../interfaces/ModelInterface";
import {MODEL_OPUS} from "../libs/helpers";
import {getAgentMeetingScribe} from "../models/claude-3";

export const agentMeetingScribe = async (prompt: string, max_token: number = 4000, model: ModelInterface = MODEL_OPUS) => {
    const response = await getAgentMeetingScribe(prompt, max_token, model);
    if (!response) {
        return false;
    }
    return response?.content[0]?.text || false;
}