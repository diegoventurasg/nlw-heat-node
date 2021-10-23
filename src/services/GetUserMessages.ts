import prismaClient from "../prisma";

class GetUserMessages {
    async execute(user_id: string) {
        const messages = await prismaClient.message.findMany({
            where: {
                user_id: user_id,
            }
        });

        return messages;
    }
}

export { GetUserMessages };