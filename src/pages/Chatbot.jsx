import ChatbotComponent from "../components/ChatbotComponent"
import { getchatBotData } from "../util/chatbot";

import { useLoaderData, json } from 'react-router-dom';

function ChatbotPage(){

    const data = useLoaderData()
    return (
        <ChatbotComponent data={data} />
    )
}

export default ChatbotPage;


export async function loader() {
    const response = await getchatBotData()
    if(response) {
        return response; 
    }
    else {
          throw json(
        { message: 'Could not fetch events.' },
        {
          status: 500,
        }
      );
    }
  
  }