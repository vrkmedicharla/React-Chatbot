
import { PiRobotBold } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";
import ChatMesssagesComponent from "./chatMessagesComponent";

function ChatbotComponent({ data }) {
    return (
        <>
            {/* <h1>Chat Bot</h1> */}

            <div className="chat-bot-container">
                <div className="chat-bot-header" >
                    <span>
                        <PiRobotBold />
                        <span>
                            LSEG Chatbot
                        </span>
                    </span>
                </div>
                <ChatMesssagesComponent data={data} />
                <div className="chat-bot-option-select">
                    Please pick an option
                    <span><IoMdSend /> </span>

                </div>
            </div>

        </>
    )
}

export default ChatbotComponent