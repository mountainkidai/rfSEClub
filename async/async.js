// node js fs module to explain async
const file = require("fs");
console.log("starting program");
function showWhatsAppChat(err, chat_data) {
  if (err) {
    console.log("Error reading file");
  } else {
    console.log(chat_data);
  }
}

file.readFile("whatsapp_chat.txt", "utf-8", showWhatsAppChat);
console.log("ending program");
for (let i = 0; i < 100; i++) {
  console.log("i is", i);
}
