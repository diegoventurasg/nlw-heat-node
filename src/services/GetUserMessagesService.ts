import prismaClient from "../prisma";

class GetUserMessagesService {
    async execute(user_id: string) {
        const messages = await prismaClient.message.findMany({
            where: {
                user_id: user_id,
            },
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        });

        return messages;
    }
}

export { GetUserMessagesService };