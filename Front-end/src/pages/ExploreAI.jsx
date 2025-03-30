import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

const API_KEY = "AIzaSyDWkvd-O5HU7KdqaELqiCNu98Tz3MjsdPE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

function ChatApp() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post(API_URL, {
                contents: [{ parts: [{ text: input }] }],
            });
            
            const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
            const botMessage = { text: botResponse, sender: "bot" };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) => [...prev, { text: "Error getting response.", sender: "bot" }]);
        }

        setLoading(false);
    };

    return (
        <div className="bg-[#18122B] h-[100vh] flex p-0 m-0 text-white">
            <div className="w-[25%] h-full flex flex-col p-4 bg-[#1E1A36]">
                <div className="flex items-center justify-center space-x-3">
                    <h1 className="text-4xl font-bold">Explore-TN AI</h1>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="mt-auto flex items-center justify-center space-x-3 bg-[#7B61FF] text-white py-4 px-5 rounded-lg hover:bg-[#6A51E6] transition duration-200"
                >
                    <FaArrowLeft />
                    <span>Go Back</span>
                </button>
            </div>
            
            <div className="w-[75%] flex flex-col h-full bg-[#282043] p-6">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg ${msg.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-700 self-start"}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                
                <div className="flex items-center p-4 bg-[#1E1A36] rounded-lg">
                    <input
                        type="text"
                        className="flex-1 p-3 bg-transparent text-white outline-none border border-gray-500 rounded-l-lg"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                        className="bg-lime-400 text-black px-4 py-3 rounded-r-lg hover:bg-lime-500"
                        onClick={sendMessage}
                        disabled={loading}
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
