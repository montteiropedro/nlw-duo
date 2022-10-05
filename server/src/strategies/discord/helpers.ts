import { prisma } from "../../config/prisma";

export async function findOrCreateUser(discordId: string, accessToken: string, refreshToken: string) {
  const userExists = await prisma.user.findUnique({
    where: { discordId }
  });

  if (userExists) {
    const updatedUser = await updateUser(discordId, accessToken, refreshToken);
    return updatedUser;
  };

  return await prisma.user.create({
    data: {
      discordId,
      accessToken,
      refreshToken
    }
  });
}

async function updateUser(discordId: string, accessToken: string, refreshToken: string) {
  return prisma.user.update({
    where: { discordId },
    data: {
      accessToken,
      refreshToken
    }
  })
}
