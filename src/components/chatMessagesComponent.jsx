import { useEffect, useState } from "react";
import { PiRobotBold } from "react-icons/pi";


function ChatMesssagesComponent({ data }) {

    const [chatBot, setChatBot] = useState([])

    useEffect(() => {
        const initialData = [{
            userMessage: null,
            chatBotTitle: "Please select a Stock Exchange",
            chatBotMessages: [],
            chatBotOptions: []
        }]

        initialData[0].chatBotMessages = data.map((stock, i) => {
            return {
                ...stock,
                stockName: stock.stockExchange,
            }

        })
        setChatBot(initialData)
    }, [data])

    function chatbotMessagesHandler(userInput, index) {

        if (chatBot.length - 1 === index) {
            var chatBotMessages = []
            var chatBotTitle = "Please select a Stock"

            if (userInput.topStocks) {
                userInput.topStocks.forEach(stock => {
                    chatBotMessages.push(stock)
                });
            }
            else {
                chatBotTitle = `Stock price of ${userInput.stockName} is ${userInput.price} Please select an option.`
            }


            var chatbotAnswer = {
                userMessage: userInput.stockName,
                chatBotMessages: chatBotMessages,
                chatBotTitle: chatBotTitle,
                chatBotOptions: [
                    {
                        name: "Main menu",
                        code: 0
                    },
                    {
                        name: "Go Back",
                        code: -1
                    }
                ]

            }

            setChatBot(prevChatbot => {
                var prevChat = [...prevChatbot]
                prevChat.push(chatbotAnswer)
                return prevChat
            })
            scrollView()
        }

    }

    function chatbotMenuOptionsHandler(userInput, index) {
        if (chatBot.length - 1 === index) {
            var goBackToMenu = []

            if (userInput.code === 0) {
                goBackToMenu = chatBot[0]
                goBackToMenu.userMessage = userInput.name
            }

            if (userInput.code === -1) {
                goBackToMenu = chatBot[chatBot.length - 2]
                goBackToMenu.userMessage = userInput.name
            }

            setChatBot(prevChatbot => {
                var prevChat = [...prevChatbot]
                prevChat.push(goBackToMenu)
                return prevChat
            })
            scrollView()
        }
    }

    function scrollView() {
        const goToBottom = document.getElementById("goToBottom");
        setTimeout(() => {
            if (goToBottom) {
                goToBottom.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }, 0);
    }

    return (
        <>
            <div className="chatbot-messages" >
                <div className="chatbot-robot-messages-title">
                    <div className="robot-messgages">
                        <span>
                            Hello! Welcome to LSEG, I'm here to help you
                        </span>
                    </div>
                </div>

                {chatBot.map((messages, i) => (
                    <div className="chat-bot-list" key={i}>
                        {messages.userMessage != null &&
                            <div className="chatbot-user-messages">
                                <span>{messages.userMessage}</span>
                            </div>
                        }

                        <div className="chatbot-robot-messages-list">
                            <div className="robot-messgages">
                                <span>
                                    {messages.chatBotTitle}
                                </span>
                            </div>
                            {messages.chatBotMessages.length !== 0 && <div className="chatbot-messages-list" >

                                {messages.chatBotMessages.map((botMessage, index) => (
                                    <ul onClick={() => chatbotMessagesHandler(botMessage, i)}
                                        className="" key={index}
                                    >
                                        {botMessage.stockName}
                                    </ul>
                                ))
                                }
                            </div>}

                            {messages.chatBotMessages.length === 0 && <div className="chatbot-messages-list" >

                                {messages.chatBotOptions.map((botMessage, index) => (
                                    <ul onClick={() => chatbotMenuOptionsHandler(botMessage, i)}
                                        className="" key={index}
                                    >
                                        {botMessage.name}
                                    </ul>
                                ))
                                }
                            </div>}
                        </div>
                        <div className="chat-bot-icon"   >
                            <PiRobotBold />
                        </div>
                    </div>
                ))}
                <div id="goToBottom"></div>
            </div>
        </>
    )
}

export default ChatMesssagesComponent