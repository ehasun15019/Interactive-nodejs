function ImageUpload(userId) {
  console.log(`User ${userId} try to upload Image....`);

  const date = Date.now();

  while (Date.now() - date < 2000) {
    // block
  }

  console.log(`User ${userId} finished upload Image`);
}

function userFeed(userId) {
  console.log(`User ${userId} getting Feed`);
}

ImageUpload(1);
userFeed(1);
ImageUpload(2);
userFeed(2);
