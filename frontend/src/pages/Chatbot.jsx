import React from "react";
import "./Chatbot.css";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { useState } from "react";

export default function Chatbot() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChatRedirect = (e) => {
    e.preventDefault();
  };

  return (
    <BackgroundWrapper>
      <div className="Chatbot-chat">
        <h1>ChatGuru</h1>
        <p>Start chatting with ChatGuru to make your farming journey smooth!</p>
      </div>
      <form className="chat-input-box" onSubmit={handleChatRedirect}>
        {/* 📎 File Upload */}
        <label htmlFor="file-upload" className="chat-btn" title="Upload File">
          ➕
        </label>
        <input
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => console.log("File uploaded:", e.target.files[0])}
        />

        {/* 😀 Emoji Picker */}
        <button
          type="button"
          className="chat-btn"
          title="Emoji"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😀
        </button>
        {showEmojiPicker && (
          <div className="emoji-picker">
            <span onClick={() => console.log("🙂")}>🙂</span>
            <span onClick={() => console.log("🚀")}>🚀</span>
            <span onClick={() => console.log("🔥")}>🔥</span>
            <span onClick={() => console.log("🌱")}>🌱</span>
          </div>
        )}

        {/* Input Field */}
        <input
          type="text"
          placeholder="Ask Anything..."
          onClick={handleChatRedirect}
        />

        {/* 🎤 Voice Input */}
        <button type="button" className="chat-btn" title="Voice Input">
          🎤
        </button>

        {/* 📜 History */}
        <button type="button" className="chat-btn" title="History">
          📜
        </button>

        {/* ⚙️ Settings */}
        <button type="button" className="chat-btn" title="Settings">
          ⚙️
        </button>

        {/* ➤ Send Button */}
        <button type="submit" className="send-btn" title="Send">
          ➤
        </button>
      </form>
    </BackgroundWrapper>
  );
}
