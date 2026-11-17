const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KEY_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KEY_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KEY_URL_ENDPOINT,
});

async function uploadFile(buffer) {
  const result = await imagekit.upload({
    file: buffer,
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;
