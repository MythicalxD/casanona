import { TextEncoder, TextDecoder } from 'util';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

async function convertReadableStreamToBodyInit(readableStream: Readable): Promise<BodyInit> {
  const chunks = [];

  for await (const chunk of readableStream) {
    chunks.push(chunk);
  }

  const buffer = Buffer.concat(chunks);
  const encodedText = textEncoder.encode(buffer);
  const decodedText = textDecoder.decode(encodedText);

  return new Blob([decodedText], { type: 'text/plain' });
}
