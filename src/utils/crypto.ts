import crypto from 'crypto';

export function encrypt(value: string): string {
  const md5 = crypto.createHash('md5');
  md5.update(value);

  return md5.digest('hex');
}

export function aesEncrypt(data: string, key: string) {
  const cipher = crypto.createCipher('aes192', key);
  let crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

export function aesDecrypt(encrypted: string, key: string) {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
