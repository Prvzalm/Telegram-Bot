const { axiosInstance } = require("./axios");

function sendMessage(messageObj, messageText) {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || "";
    
    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                return sendMessage (
                    messageObj,
                    "Hey Zestify here, did you visit our site? Visit now."
                )
                break;
        
            default:
                return sendMessage(
                    messageObj, 
                    "Sorry, i do not understand this command")
                break;
        }
    } else {
        //send same message back to the user
        return sendMessage(messageObj, messageText)
    }

}

module.exports = { handleMessage }