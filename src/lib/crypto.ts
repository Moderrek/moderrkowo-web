import crypto from 'crypto';

/**
 * Sha512 Algorithm generates hash of content string
 * @param content The content string
 * @returns Hashed content string
 */
export default function sha512(content: string) {
  const hash = crypto.createHash('sha512');
  const data = hash.update(content, 'utf-8');
  return data.digest('hex');
}
