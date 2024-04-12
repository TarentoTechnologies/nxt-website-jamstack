import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import audioBtn from "../../../../static/icons/mic.png";
import sendBtn from "../../../../static/icons/send.png";
import ThorLogo from "../../../../static/images/Thor-i-logo.png";
import ThorBg from "../../../../static/images/ThorBg.png";
import { themeState } from "../../../states/atoms";
import {
  thorFeatureCard,
  thorSubtext,
} from "../../../styles/style-guide/Typography.module.css";
import {
  audioButtonDark,
  audioButtonLight,
  botMsg,
  botMsgDark,
  botMsgLight,
  chatArea,
  chatAreaMain,
  chatSectionContainer,
  chatSectionDark,
  chatSectionLight,
  featureCardDark,
  featureCardGrid,
  featureCardLight,
  initialChat,
  inputArea,
  sendButton,
  thorLogo,
  userInputBoxDark,
  userInputBoxLight,
  userMsgDark,
  userMsgLight,
} from "../ThorDemo.module.css";

interface ChatSectionProps {
  data: any;
}

interface ChatMessage {
  text: string;
  isUser?: boolean;
}

export const ChatSection = ({ data }: ChatSectionProps) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showInitialChat, setShowInitialChat] = useState(true);

  useEffect(() => {
    const terminalResultsDiv: HTMLElement | null =
      document.getElementById("chats");
    if (terminalResultsDiv) {
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    const userInput = document.getElementById("userInput");
    if (userInput) {
      userInput.focus();
    }
  }, [chatMessages]);

  const handleScrollToBottom = () => {
    const terminalResultsDiv: HTMLElement | null =
      document.getElementById("chats");
    if (terminalResultsDiv) {
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
  };

  const handleInputChange = (event: any) => {
    setUserInput(event.target.value);
  };

  const handleUserInputSubmission = (text = userInput.trim()) => {
    if (text !== "") {
      setShowInitialChat(false);

      setUserResponse(text);
      // sendMessage(text);

      // Clear user input
      setUserInput("");
    }
  };

  const setUserResponse = (message: string) => {
    // Create a new message object for the user
    const newMessage: ChatMessage = {
      text: message,
      isUser: true,
    };

    // Update messages state with the new user message
    setChatMessages([...chatMessages, newMessage]);

    // Clear user input
    setUserInput("");

    handleScrollToBottom();

    // showBotTyping();
  };

  return (
    <div className={`${chatSectionContainer}`}>
      <div
        className={`${theme === "dark" ? chatSectionDark : chatSectionLight}`}
        id="chats"
      >
        <div className={`d-flex align-items-center ${thorLogo}`}>
          <img
            src={ThorLogo}
            alt="Thor"
            height={50}
            width={50}
            className="me-3"
          />
          <span className={`${theme === "dark" ? "text-white" : ""}`}>
            THOR
          </span>
        </div>
        <div className={`${chatAreaMain}`}>
          {/* Initial Chat */}
          {showInitialChat && (
            <div className={`${initialChat}`}>
              <div className={`mb-4`}>
                <img src={ThorBg} alt="Thor" />
              </div>
              <div
                className={`${thorSubtext} ${
                  theme === "dark" ? "text-white" : ""
                } pb-2`}
              >
                {data?.text1}
              </div>
              <div
                className={`${thorSubtext} ${
                  theme === "dark" ? "text-white" : ""
                }`}
              >
                {data?.text2}
              </div>
              <div className={`${featureCardGrid} pt-3`}>
                {data?.cardData?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`${
                      theme === "dark" ? featureCardDark : featureCardLight
                    }`}
                  >
                    <div className={`d-flex justify-content-center pb-2`}>
                      <img src={item?.ImgSrc} alt={item?.Title} />
                    </div>
                    <div
                      className={`${thorFeatureCard} text-center ${
                        theme === "dark" ? "text-white" : ""
                      }`}
                    >
                      {item?.Title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Area */}
          <div className={`${chatArea} pb-3`}>
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`d-flex ${
                  message.isUser ? "justify-content-end" : ""
                }`}
              >
                {message.isUser ? (
                  <p
                    className={`${
                      theme === "dark" ? userMsgDark : userMsgLight
                    }`}
                  >
                    {message.text}
                  </p>
                ) : (
                  <p
                    className={`${theme === "dark" ? botMsgDark : botMsgLight}`}
                  >
                    {message.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className={`d-flex px-5 ${inputArea} w-100`}>
        <div className={`position-relative w-100`}>
          <textarea
            id="userInput"
            placeholder="Type in your query"
            className={
              theme === "dark"
                ? `${userInputBoxDark} text-white`
                : `${userInputBoxLight}`
            }
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleUserInputSubmission();
              }
            }}
          ></textarea>
          <div
            className={`${sendButton}`}
            role="button"
            onClick={() => handleUserInputSubmission()}
          >
            <img src={sendBtn} alt="send" />
          </div>
        </div>
        <div
          className={`${
            theme === "dark" ? audioButtonDark : audioButtonLight
          } ms-2`}
          role="button"
        >
          <img src={audioBtn} alt="send" />
        </div>
      </div>
    </div>
  );
};
