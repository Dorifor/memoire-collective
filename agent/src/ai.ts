import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY!;

export async function processAi(instructions: {system: string, user: string}) {
    const client = new Mistral({ apiKey });
    const chatResponse = await client.chat.complete({
        model: "mistral-large-latest",
        messages: [
            {
                role: "system",
                content: instructions.system,
            },
            {
                role: "user",
                content: instructions.user,
            },
        ],
    });

    return chatResponse.choices![0].message.content;
}





