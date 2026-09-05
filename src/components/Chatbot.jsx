import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaCopy, FaTimes } from "react-icons/fa";
import "../styles/chatbot.css";

const mascot = "/images/brand-mascot.png";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "https://rubium-backened.onrender.com"
).replace(/\/$/, "");

const starterQuestions = [
  "What services does Rubium AI provide?",
  "Tell me about AI chatbot development",
  "What can Rubium AI automate?",
];

function Message({ message, onCopy }) {
  const isBot = message.role === "bot";
  const lines = message.text.split("\n");

  return (
    <div className={`message-row ${isBot ? "bot-row" : "user-row"}`}>
      {isBot && (
        <div className="mini-avatar">
          <img src={mascot} alt="Rubium AI" />
        </div>
      )}

      <div className={`message ${isBot ? "bot-message" : "user-message"}`}>
        <div className="message-text">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        {isBot && message.copyable && (
          <button
            className="copy-button"
            onClick={() => onCopy(message.text)}
            aria-label="Copy response"
          >
            <FaCopy />
          </button>
        )}
      </div>
    </div>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [conversationId, setConversationId] = useState(() => {
    try {
      const saved = window.sessionStorage.getItem("rubiumConversationId");

      if (saved) return saved;
    } catch {}

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `rubium-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)}`;

    try {
      window.sessionStorage.setItem("rubiumConversationId", id);
    } catch {}

    return id;
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hi! I'm the Rubium AI assistant. How can I help you today?",
      copyable: true,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const messagesContainer = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const container = messagesContainer.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => window.clearTimeout(timer);
    }
  }, [open]);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1400);
    } catch {}
  };

  const sendMessage = async (event, suppliedText) => {
    event?.preventDefault();

    const text = (suppliedText ?? input).trim();

    if (!text || loading) return;

    setInput("");

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId,
          message: text,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "The assistant could not process your request."
        );
      }

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "bot",
          text:
            data.reply ||
            "I do not have a response right now. Please try again.",
          copyable: true,
        },
      ]);
    } catch (error) {
      console.error("Rubium AI API error:", error);

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "bot",
          text:
            "I am unable to connect to the Rubium AI server right now. Please try again.",
          copyable: false,
        },
      ]);
    } finally {
      setLoading(false);

      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  };

  const clearChat = () => {
    const newConversationId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `rubium-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)}`;

    setConversationId(newConversationId);

    try {
      window.sessionStorage.setItem(
        "rubiumConversationId",
        newConversationId
      );
    } catch {}

    setMessages([
      {
        id: Date.now(),
        role: "bot",
        text: "Hi! I'm the Rubium AI assistant. How can I help you today?",
        copyable: true,
      },
    ]);

    setInput("");

    inputRef.current?.focus();
  };

  return (
    <div className="chatbot-root">
      {open && (
        <section
          className="chat-widget"
          aria-label="Rubium AI chatbot"
        >
          <header className="chat-header">
            <div className="assistant-avatar">
              <img
                src={mascot}
                alt="Rubium AI assistant"
              />

              <span className="online-dot" />
            </div>

            <div className="assistant-title">
              <strong>Rubium AI Assistant</strong>

              <span>
                <i /> Online
              </span>
            </div>

            <button
              className="clear-button"
              onClick={clearChat}
              title="Start a new chat"
              aria-label="Start a new chat"
            >
              <FaTimes />
            </button>

            <button
              className="close-button"
              onClick={() => setOpen(false)}
              title="Close chat"
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </header>

          <div
            ref={messagesContainer}
            className="messages"
            role="log"
            aria-live="polite"
          >
            <div className="welcome-line">
              <span>Rubium AI</span>
              <time>Assistant</time>
            </div>

            {messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                onCopy={copyText}
              />
            ))}

            {messages.length === 1 && (
              <div className="starter-area">
                <p>Try asking:</p>

                <div className="starter-list">
                  {starterQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(null, question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="message-row bot-row">
                <div className="mini-avatar">
                  <img
                    src={mascot}
                    alt="Rubium AI"
                  />
                </div>

                <div className="message bot-message typing-message">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <form
            className="composer"
            onSubmit={sendMessage}
          >
            <div className="input-box">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Ask Rubium AI anything..."
                aria-label="Message Rubium AI"
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
              >
                <FaArrowUp />
              </button>
            </div>

            <div className="composer-note">
              <span>Rubium AI Assistant</span>

              {copied && (
                <span className="copied">
                  Copied
                </span>
              )}
            </div>
          </form>
        </section>
      )}

      {!open && (
        <button
          className="chatbot-float"
          onClick={() => setOpen(true)}
          aria-label="Open Rubium AI chatbot"
        >
          <img
            src={mascot}
            alt="Open Rubium AI chatbot"
          />
        </button>
      )}
    </div>
  );
}

export default Chatbot;