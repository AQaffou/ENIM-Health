import { useEffect, useState, useContext } from "react";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import { AuthContexts } from "../helpers/AuthContexts";
import NavbarEtudiant from "./NavbarEtudiant";
import Footer from "../basicComponent/Footer";

function ForumEtudiant() {
  const [listeMessages, setListeMessages] = useState([]);
  const [inputListeReplies, setInputListeReplies] = useState([
    { reply: "", messagesId: null, replyUserId: null, replyCreatedAt: null },
  ]);
  const [listeReplies, setListeReplies] = useState([]);
  const [message, setMessage] = useState({
    message: "",
    messageCreatedAt: null,
    messageUserId: null,
  });
  const [render, setRender] = useState(0);
  const { authState } = useContext(AuthContexts);

  let date = new Date();

  useEffect(() => {
    async function handleMessages() {
      try {
        if (authState.status) {
          await axios
            .get("http://localhost:3001/messages", {
              headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then((response) => {
              const messages = response.data;
              setListeMessages(messages);
            });
          const response1 = await axios.get("http://localhost:3001/replies", {
            headers: { accessToken: localStorage.getItem("accessToken") },
          });
          const replies = response1.data;
          setListeReplies(replies);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    handleMessages();
  }, [render]);

  const handleMessage = (Event) => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      messageCreatedAt: date.toJSON(),
      messageUserId: authState.id,
      message: Event.target.value,
    }));
  };

  const handleReply = (e, idMessage) => {
    setInputListeReplies((prevInputListeReplies) => {
      const updatedArray = [...prevInputListeReplies];
      updatedArray[idMessage] = {
        ...updatedArray[idMessage],
        replyUserId: authState.id,
        replyCreatedAt: date.toJSON(),
        messagesId: idMessage,
        reply: e.target.value,
      };
      return updatedArray;
    });
  };

  const handleClickReply = (reply, idMessage) => {
    axios
      .post("http://localhost:3001/replies", reply, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log("Le commentaire est sauvegardé dans la base de données");
          setRender((render) => render + 1);
          setInputListeReplies((prevInputListeReplies) => {
            const updatedArray = [...prevInputListeReplies];
            updatedArray[idMessage] = {
              ...updatedArray[idMessage],
              reply: "",
            };
            return updatedArray;
          });
        }
      });
  };

  const handleClickMessage = (message) => {
    axios
      .post("http://localhost:3001/messages", message, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          console.log("Le message est sauvegardé dans la base de données");
          setRender((render) => render + 1);
          setMessage({ message: "" });
        }
      });
  };

  return (
    <>
      <NavbarEtudiant />
      <div className="flex flex-row ml-56 pr-24 h-screen pt-[150px] mb-[100px]">
        <div className="form flex flex-col space-y-4 w-2/4">
          <div
            className=" border-2 rounded-xl border-[#EAF0F7] flex flex-col overflow-y-auto pb-10  p-2 resize-none space-y-5 h-full"
            id="nv_message"
          >
            {listeMessages.map(
              ({ idMessage, message, messageCreatedAt, user }) => (
                <div key={idMessage} className="space-y-2">
                  <div className="border-2 rounded-xl border-[#EAF0F7] bg-[#EAF0F7] p-3">
                    <div className="identifiants ml-5">
                      <div className="name">
                        {user.nom} {user.prenom}
                      </div>
                      <div className="text-xs text-gray-400 font-['Roboto']">
                        <ReactTimeAgo
                          date={Date.parse(messageCreatedAt)}
                          locale="fr-FR"
                        />
                      </div>
                    </div>
                    <div className="nv_message font-bold  ml-5 font-['Roboto'] text-lg">
                      {message}
                    </div>
                    <div className="Comment grid grid-cols-5 rounded-full m-2 h-10 bg-white">
                      <textarea
                        onChange={(e) => handleReply(e, idMessage)}
                        value={
                          inputListeReplies[idMessage]
                            ? inputListeReplies[idMessage].reply
                            : ""
                        }
                        placeholder="Ecrire votre commentaire ..."
                        className="col-span-4 bg-transparent border-none rounded-full resize-none hover:border-none outline-0 p-2"
                      ></textarea>
                      <button
                        className="flex flex-row space-x-1 self-end rounded-full  bg-white p-2"
                        onClick={() =>
                          handleClickReply(
                            inputListeReplies[idMessage],
                            idMessage
                          )
                        }
                      >
                        <img
                          src="../assets/forum/corner-down-right.svg"
                          alt="Répondre"
                          className="mt-1"
                        />
                        <p className="font-['Roboto'] text-blue-400 font-thin">
                          Répondre
                        </p>
                      </button>
                    </div>
                  </div>
                  <div id="Reply">
                    {listeReplies.map(
                      ({ idReply, reply, messagesId, replyCreatedAt }) => {
                        if (messagesId === idMessage) {
                          return (
                            <div
                              key={idReply}
                              className="px-4 py-3 space-y-1 border rounded-md"
                            >
                              <div className=" p font-bold">{reply}</div>
                              <div className="text-gray-400 font-['Roboto']">
                                by @ {user.nom} {user.prenom}
                              </div>
                              <div className="text-xs text-gray-400 font-['Roboto']">
                                <ReactTimeAgo
                                  date={Date.parse(replyCreatedAt)}
                                  locale="fr-FR"
                                />
                              </div>
                            </div>
                          );
                        }
                      }
                    )}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="nv_message space-y-4">
            <p className="Nouveau_message font-['Roboto'] text-gray-600 font-extrabold">
              Nouveau Message
            </p>
            <textarea
              className="message bg-transparent border border-gray-400 rounded resize-none w-[690px] outline-0"
              name="message"
              id="message"
              cols="80"
              rows="5"
              placeholder="Ecrire votre message..."
              value={message.message}
              onChange={handleMessage}
            ></textarea>
          </div>
          <div className="button flex justify-end">
            <button
              className="Publier bg-blue-500 from-Linear1 to-Linear2  rounded flex flex-row py-1.5 pr-7 pl-6 space-x-3"
              onClick={() => handleClickMessage(message)}
            >
              <img
                src="../assets/forum/send.svg"
                alt="send_icone"
                className="pt-1.5"
              />
              <p className="text-white font-black font-['Roboto']">Publier</p>
            </button>
          </div>
        </div>
        <div className="img flex justify-end w-2/4">
          <img
            src="../assets/forum/image_forum.png"
            alt="image_forum"
            className="h-3/4"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForumEtudiant;
