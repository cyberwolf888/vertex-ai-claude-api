// claude-3.d.ts
declare module '../models/claude-3' {
    import { ModelInterface } from "../interfaces/ModelInterface";

    export function getGeneralMessage(prompt: string, max_token: number, model: ModelInterface): Promise<any>;

    export function getAgentMeetingScribe(prompt: string, max_token: number, model: ModelInterface): Promise<any>;
}