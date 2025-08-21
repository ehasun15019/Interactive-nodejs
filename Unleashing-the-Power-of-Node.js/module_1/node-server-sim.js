function ImageUpload(userId) {
  console.log(`User ${userId} try to upload Image....`);

  //   non-blocking purpose
  setTimeout(() => {
    console.log(`User ${userId} finished upload Image`);
  }, 3000);
}

function userFeed(userId) {
  console.log(`User ${userId} getting Feed`);
}

ImageUpload(1);
userFeed(1);
ImageUpload(2);
userFeed(2);
