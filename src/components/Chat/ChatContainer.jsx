import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import React from "react";
import MessageStatus from "../common/MessageStatus";
import ImageMessage from "./ImageMessage";

function ChatContainer() {
  const [{ messages, currentChatUser, userInfo }] = useStateProvider();
  console.log(messages);

  return (
    <div className="h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar bg-chat-background bg-cover">
      {/* <div className="bg-chat-background bg-fixed h-full w-full opacity-20 absolute left-0 top-0 z-0"> */}
      {/* <div className="bg-chat-background bg-cover h-full w-full absolute left-0 top-0 z-0"> */}
      <div className="mx-8 my-6 relative bottom-0 z-40 left-0">
        <div className="flex w-full">
          <div className="flex flex-col justify-end w-full gap-1 overflow-x-hidden overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${
                  message.senderId === currentChatUser.id
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {message.type === "text" && (
                  <div
                    className={`text-white px-2 py-[5px] text-sm rounded-md flex flex-col gap-2 max-w-[45%] ${
                      message.senderId === currentChatUser.id
                        ? "bg-incoming-background items-start"
                        : "bg-outgoing-background items-end"
                    }`}
                  >
                    <span className="">{message.message}</span>
                    <div className="flex gap-1 items-end mt-[-10px]">
                      <span className="text-bubble-meta text-[11px] pt-1 min-w-fit">
                        {calculateTime(message.createdAt)}
                      </span>
                      <span>
                        {message.senderId === userInfo.id && (
                          <MessageStatus
                            messageStatus={message.messageStatus}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                )}
                {message.type === "image" && <ImageMessage message={message} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ChatContainer;
