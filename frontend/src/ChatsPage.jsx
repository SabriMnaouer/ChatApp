import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "4532a405-d5ad-416e-bbc2-b1dd491a398a", //Add your own ProjectId from chatengine.io
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;
