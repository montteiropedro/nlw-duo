import CryptoJS from "crypto-js";

export function encryptTokens(accessToken: string, refreshToken: string) {
  return {
    accessToken: CryptoJS.AES.encrypt(accessToken, process.env.CRYPTOJS_SECRET!).toString(),
    refreshToken: CryptoJS.AES.encrypt(refreshToken, process.env.CRYPTOJS_SECRET!).toString()
  }
}

export function decryptToken(EncryptedToken: string) {
  return CryptoJS.AES.decrypt(EncryptedToken, process.env.CRYPTOJS_SECRET!).toString(CryptoJS.enc.Utf8);
}
