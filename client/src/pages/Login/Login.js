import React, { useState, useEffect } from "react";
import { useInput } from "../../sharedFunctions/sharedFunctions";
import API from "../../utils/API";
import moment from "moment";
import logo from "../../../src/logo.svg";
import GithubLogo from "../../images/github_logos/GitHub_Logo_White.png";
import mongoLogo from "../../images/mongo_logo.png";
import "./style.css";

const Login = () => {
  /*
    var [newMessage, setNewMessage] = useInput("");
    var [messages, setMessages] = useState([]);

    const renderMessages = () => {
        API.findAllMessages().then(
            (res) => {
                setMessages(messages => res.data);
            }
        );
    }

    const saveMessage = (event) => {
        if (newMessage !== "") {
            API.createMessage(newMessage, new Date()).then(
                (res) => {
                    renderMessages();
                    document.getElementById('messageInput').value = "";
                }
            );
        }
    };

    const deleteMessage = (event) => {
        let messageDeletionID = event.currentTarget.dataset.message_id;
        API.deleteOneMessage(messageDeletionID).then(
            (res) => {
                renderMessages();
            }
        );
    }
    */

  useEffect(() => {
    //renderMessages();
  }, []);

  return (
    <div>
      <div className="App">
        <header className="App-header p-4">
          <h1>Passport Sandbox</h1>
        </header>
        <div className="container">
          <form>
            <div className="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-md-12">
                <input type="text" className="form-control" id="staticEmail" />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="mb-3 row">
            <div className="col-md-12 align-left">
                <button className="btn btn-success">Login</button>
                </div>
            </div>
          </form>

          <div className="col-md-12 pt-3 pb-3">
            <a
              href="https://github.com/nick-ramsay/passport-sandbox"
              target="_blank"
              rel="noopener noreferrer"
              title="Check out this repo on GitHub!"
              className="github-link"
            >
              <img className="github-logo" src={GithubLogo} alt="GitHub_logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
