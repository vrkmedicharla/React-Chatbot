import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root";
import ChatbotPage , { loader as chatBotLoader } from "../pages/Chatbot";
import ErrorPage from "../pages/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element : <RootLayout />,
        errorElement : <ErrorPage />,
        id:'root',
        children : [
            {
                index: true,
                element : <ChatbotPage />,
                loader : chatBotLoader
            },
        ]
    }
])
export default router