import {AnthropicVertex} from "@anthropic-ai/vertex-sdk";

export const claude = (projectId: any, region: any) => {
    return new AnthropicVertex({
        projectId: projectId,
        region: region,
    });
}