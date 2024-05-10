import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import audioBtn from "../../../../static/icons/mic.png";
import sendBtn from "../../../../static/icons/send.png";
import ThorLogo from "../../../../static/images/Thor-i-logo.png";
import ThorBg from "../../../../static/images/ThorBg.png";
import {
  industrySelected,
  questionSelected,
  themeState,
} from "../../../states/atoms";
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
  botTyping,
  bounce1,
  bounce2,
  bounce3,
  chatArea,
  chatAreaMain,
  chatSectionContainer,
  chatSectionDark,
  chatSectionLight,
  fadeIn1,
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
  text: any;
  isUser?: boolean;
  showAvatar?: boolean;
  isClickable?: boolean;
  isInitialMsg?: boolean;
}

interface APIResponse {
  res: {
    data: any[];
    entities: any[];
    intent: string;
    statusCode: number;
    text: string[];
    type: string;
  }[];
}

export const ChatSection = ({ data }: ChatSectionProps) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showInitialChat, setShowInitialChat] = useState(true);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const selectedQuestion = useRecoilValue(questionSelected);
  // const [selectedIndustry, setSelectedIndustry] =
  //   useRecoilState(industrySelected);

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

  // const handleScrollToBottom = () => {
  //   const terminalResultsDiv: HTMLElement | null =
  //     document.getElementById("chats");
  //   if (terminalResultsDiv) {
  //     terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  //   }
  // };

  const handleInputChange = (event: any) => {
    setUserInput(event.target.value);
  };

  const handleUserInputSubmission = (text = userInput.trim()) => {
    if (text !== "") {
      setShowInitialChat(false);

      setUserResponse(text);
      // sendMessage(text);
      // handleMessageSend(text, selectedIndustry);
      handleMessageSend(text, "Thor-Manufacture");

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

    // handleScrollToBottom();

    // showBotTyping();
  };

  const handleMessageSend = async (message: string, industry: string) => {
    const requestBody = {
      jwt: "jwt",
      uid: "0000",
      username: "tarento@website.com",
      text: message,
      endpoint: industry,
    };

    const newMessage: ChatMessage = {
      text: message,
      isUser: true,
      showAvatar: true,
    };

    setChatMessages([...chatMessages, newMessage]);

    setIsBotTyping(true);

    setUserInput("");

    try {
      const response = await fetch(
        "https://thor-console.tarento.com/interactiverouter/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message!");
      }

      const responseData: APIResponse = await response.json();
      if (responseData.res.length > 0) {
        const botMessage: ChatMessage = {
          text: responseData.res[0].text,
          isUser: false,
          showAvatar: true,
          isClickable: false,
        };
        console.log("Response data: ", responseData);

        // Check if the response contains HTML markup
        const htmlContent = responseData.res[0].text[0];
        const containsHtml = /<[a-z][\s\S]*>/i.test(htmlContent);

        if (containsHtml) {
          botMessage.text = (
            <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
          );
        }
        setChatMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsBotTyping(false);
    }
  };

  // useEffect(() => {
  //   if (selectedQuestion !== "") {
  //     handleMessageSend(selectedQuestion, selectedIndustry);
  //   }
  // }, [questionSelected]);
  // useEffect(() => {
  //   const setSampleQuestions = () => {
  //     switch (selectedIndustry) {
  //       case "THOR for Manufacturing":
  //         setSelectedIndustry("Thor-Manufacture");
  //         break;
  //       case "THOR for Retail":
  //         setSelectedIndustry("Thor-Retail");
  //         break;
  //       case "THOR for Banking":
  //         setSelectedIndustry("Thor-Banking");
  //         break;
  //       case "THOR for Healthcare":
  //         setSelectedIndustry("Thor-Healthcare");
  //         break;
  //       default:
  //         setSelectedIndustry("Thor-Manufacture");
  //         break;
  //     }
  //   };
  //   setSampleQuestions();
  // }, [selectedIndustry]);

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
            <>
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
            </>
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
            {isBotTyping && (
              <div className={`d-flex ${fadeIn1}`}>
                {/* <div>
                  <img src={botavatar} alt="Bot avatar" className="ms-3" />
                </div> */}
                <div className={`${botTyping} px-4 ms-5 mt-0`}>
                  <div className={`${bounce1}`}></div>
                  <div className={`${bounce2}`}></div>
                  <div className={`${bounce3}`}></div>
                </div>
              </div>
            )}
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
