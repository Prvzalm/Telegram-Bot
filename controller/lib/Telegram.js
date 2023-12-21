const { getAxiosInstance } = require("./axios");
const { errorHandler } = require("./helper");

const my_token  = process.env.BOT_TOKEN
const BASE_URL = `https://api.telegram.org/bot${my_token}`
const axiosInstance = getAxiosInstance(BASE_URL)

function sendMessage(chatId, messageText) {
    return axiosInstance
    .get("sendMessage", {
        chat_id: chatId,
        text: messageText,
    })
    .catch((err) => {
        errorHandler(err, "sendMessage", "axios")
    })
}

async function handleMessage(messageObj) {
    const messageText = messageObj.text || "";

    if (!messageText) {
        errorHandler("No message text", "handleMessage");
        return "";
    }

    try {
        const chatId = messageObj.chat.id;
        if (messageText.charAt(0) === "/") {
            const command = messageText.substr(1);
            switch (command) {
                case "start":
                    return sendMessage (
                        chatId,
                        "Hey Zestify here, did you visit our site? Visit now."
                    )
            
                default:
                    return sendMessage(
                        chatId, 
                        "Sorry, i do not understand this command")
            }
        } else {
            return sendMessage(chatId, messageText)
        }
    } catch (error) {
        errorHandler(error, "handleMessage")
    }
}

module.exports = { handleMessage, sendMessage }