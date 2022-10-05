import axios from "axios";
import { decryptToken } from "../encrypt_decrypt_tokens";

export interface DiscordUserData {
  id: string;
  avatar: string | null;
  username: string;
  discriminator: string;
  mfa_enabled?: boolean;
  locale?: string;
}

/**
 * Makes the Discord API call for the user data. It returns
 * a `Object` containing the `data`.
 * @param accessToken 
 * @returns `Object`
 */
export async function fetchDiscordData(accessToken: string) {
  const decryptedAccessToken = decryptToken(accessToken);

  return await axios.get<DiscordUserData>(process.env.DISCORD_OAUTH2_USER!, {
    headers: {
      Authorization: `Bearer ${decryptedAccessToken}`
    }
  });
}
