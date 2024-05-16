import React, { ReactNode, useEffect, useState } from "react";
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
  customCard,
  customCardDark,
  customCardLight,
  fadeIn1,
  featureCardDark,
  featureCardGrid,
  featureCardLight,
  initialChat,
  inputArea,
  pullUp1,
  sendButton,
  thorLogo,
  userInputBoxDark,
  userInputBoxLight,
  userMsgDark,
  userMsgLight,
  viewMoreBtnDark,
  viewMoreBtnLight,
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
  data?: any;
}

interface APIResponse {
  res: {
    data: any;
    entities: any[];
    intent: string;
    statusCode: number;
    text: string[];
    type: string;
  }[];
}

interface ThorCXResponse {
  Confidence: number;
  Context: string;
  text: string;
  type: {
    text: string;
    type: string;
  };
}

interface APIResponse extends Array<ThorCXResponse> {}

export const ChatSection = ({ data }: ChatSectionProps) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showInitialChat, setShowInitialChat] = useState(true);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [selectedQuestion, setSelectedQuestion] =
    useRecoilState(questionSelected);
  const [selectedIndustry, setSelectedIndustry] =
    useRecoilState(industrySelected);
  const [formattedIndustry, setFormattedIndustry] = useState("");
  const [displayedItems, setDisplayedItems] = useState<number>(5);

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
  }, [chatMessages, displayedItems]);

  const handleInputChange = (event: any) => {
    setUserInput(event.target.value);
  };

  const handleUserInputSubmission = (text = userInput.trim()) => {
    if (text !== "") {
      // setShowInitialChat(false);
      handleMessageSend(text);
    }
  };

  useEffect(() => {
    switch (selectedIndustry) {
      case "THOR for Manufacturing":
        // setSelectedIndustry("Thor-Manufacture");
        setFormattedIndustry("Thor-Manufacture");
        break;
      case "THOR for Retail":
        setFormattedIndustry("Thor-Retail");
        break;
      case "THOR for Banking":
        setFormattedIndustry("Thor-Banking");
        break;
      case "THOR for Healthcare":
        setFormattedIndustry("Thor-Healthcare");
        break;
      case "THOR for CX":
        setFormattedIndustry("Thor-CX");
        break;
      default:
        setFormattedIndustry("Thor-Manufacture");
        break;
    }
  }, [selectedIndustry]);

  const handleMessageSend = async (message: string) => {
    setShowInitialChat(false);
    const requestBody = {
      jwt: "jwt",
      uid: "0000",
      username: "tarento@website.com",
      text: message,
      endpoint: formattedIndustry,
    };

    const requestBodyCX = {
      Question: message,
    };

    const newMessage: ChatMessage = {
      text: message,
      isUser: true,
      showAvatar: true,
    };

    setChatMessages([...chatMessages, newMessage]);

    setIsBotTyping(true);

    setUserInput("");

    setTimeout(async () => {
      try {
        const response = await fetch(
          formattedIndustry === "Thor-CX"
            ? "https://9cf0-36-255-86-45.ngrok-free.app/faq"
            : "https://thor-console.tarento.com/interactiverouter/user",
          formattedIndustry === "Thor-CX"
            ? {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBodyCX),
              }
            : {
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
        if (responseData !== null) {
          let botMessage: ChatMessage;
          if (formattedIndustry === "Thor-CX") {
            botMessage = {
              text: responseData[0].text,
              isUser: false,
              showAvatar: true,
              isClickable: false,
            };
          } else {
            botMessage = {
              text: responseData.res[0].text,
              isUser: false,
              showAvatar: true,
              isClickable: false,
            };
          }
          // console.log("Response data: ", responseData);
          // console.log("Current Industry: ", formattedIndustry);

          if (formattedIndustry !== "Thor-CX") {
            // Check if the response contains HTML markup
            const htmlContent = responseData.res[0].text[0];
            const containsHtml = /<[a-z][\s\S]*>/i.test(htmlContent);

            if (containsHtml) {
              botMessage.text = (
                <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
              );
            }

            if (responseData.res[0].data !== null) {
              botMessage.data = responseData.res[0].data;
              // console.log("Res Data: ", responseData.res[0].data);
              // console.log("Res Data type: ", typeof responseData.res[0].data);
            }
          }

          setChatMessages((prevMessages) => [...prevMessages, botMessage]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsBotTyping(false);
      }
    }, 650);
  };

  useEffect(() => {
    if (selectedQuestion !== "") {
      handleMessageSend(selectedQuestion);
      setSelectedQuestion("");
      setDisplayedItems(5);
    }
  }, [selectedQuestion]);

  const handleViewMore = () => {
    setDisplayedItems((prevItems) => prevItems + 5);
  };

  return (
    <div className={`${chatSectionContainer}`}>
      <div
        className={`${theme === "dark" ? chatSectionDark : chatSectionLight}`}
        id="chats"
      >
        <div className={`${chatAreaMain}`}>
          {/* Initial Chat */}
          {showInitialChat && (
            <>
              <div className={`${initialChat} ${fadeIn1}`}>
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
                <div className={`my-4`}>
                  <img src={ThorBg} alt="Thor" width={120} height={120} />
                </div>
                <div
                  className={`${thorSubtext} ${
                    theme === "dark" ? "text-white mx-4" : "mx-4"
                  } pb-2`}
                >
                  {data?.text1}
                </div>
                <div
                  className={`${thorSubtext} ${
                    theme === "dark" ? "text-white mx-4" : "mx-4"
                  }`}
                >
                  {data?.text2}
                </div>
                {/* <div className={`${featureCardGrid} pt-3`}>
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
                </div> */}
              </div>
            </>
          )}

          {/* Chat Area */}
          <div className={`${chatArea} pb-3`}>
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`d-flex ${pullUp1} ${
                  message.isUser ? "justify-content-end" : ""
                } ${
                  index === chatMessages.length - 1 && !message.isUser
                    ? "customMarginBtm4"
                    : "mb-3"
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
                  <>
                    <div
                      className={`${
                        theme === "dark" ? botMsgDark : botMsgLight
                      }`}
                    >
                      <span>{message.text}</span>
                      {message.data !== null && (
                        <span>
                          {Array.isArray(message.data) ? (
                            <div>
                              {message.data
                                .slice(0, displayedItems)
                                .map((item, index) => (
                                  <div
                                    key={index}
                                    className={`${
                                      theme === "dark"
                                        ? customCardDark
                                        : customCardLight
                                    } mb-3`}
                                  >
                                    <div>
                                      {Object.entries(item).map(
                                        ([key, value]) => (
                                          <p key={key}>
                                            {key}: {value as ReactNode}
                                          </p>
                                        )
                                      )}
                                    </div>
                                  </div>
                                ))}
                              {displayedItems <
                                (message?.data || []).length && (
                                <div
                                  className={`${
                                    theme === "dark"
                                      ? viewMoreBtnDark
                                      : viewMoreBtnLight
                                  }`}
                                  role="button"
                                  onClick={handleViewMore}
                                >
                                  View More
                                </div>
                              )}
                            </div>
                          ) : typeof message.data === "object" ? (
                            <div>
                              {Object.entries(message.data).map(
                                ([key, value]) => (
                                  <p key={key} className="pt-3 mb-0">
                                    {key}: {value as ReactNode}
                                  </p>
                                )
                              )}
                            </div>
                          ) : (
                            // Render message.data as a string or number
                            <div>{message.data}</div>
                          )}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
            {isBotTyping && (
              <div className={`d-flex ${fadeIn1}`}>
                <div className={`${botTyping} px-4 ms-4 mt-0`}>
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
      <div className={`d-flex px-3 ${inputArea} w-100`}>
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
