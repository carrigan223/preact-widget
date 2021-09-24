import { h, Component } from "preact";
import {
    mobileClosedMessageAvatarStyle,
    closedChatAvatarImageStyle,
} from "./style";
import { IConfiguration } from "../typings";

export default class ChatFloatingButton extends Component<
    IChatFloatingButtonProps,
    any
> {
    render({ onClick, conf }: IChatFloatingButtonProps, {}) {
        return (
            <div
                style={{
                    position: "fixed",
                    bottom: "0",
                    right: "0",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div style={{ maxWidth: "200px", marginRight: "30px" }}>
                    <div
                        style={{
                            background: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            boxShadow: "2px 2px 10px black",
                        }}
                    >
                        <div>{conf.introMessage}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "10px",
                        }}
                    >
                        <button
                            style={{
                                background: "white",
                                padding: "10px",
                                borderRadius: "17px",
                                boxShadow: "2px 2px 10px black",
                            }}
                            onClick={this.props.onClick}
                        >
                            <span>Yes</span>
                        </button>
                        <button
                            style={{
                                background: "white",
                                padding: "10px",
                                borderRadius: "17px",
                                boxShadow: "2px 2px 10px black",
                            }}
                            onClick={this.props.onClick}
                        >
                            <div>No</div>
                        </button>
                    </div>
                </div>

                <div
                    style={{
                        position: "relative",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "flex-end",
                        margin: "15px",
                    }}
                    onClick={this.props.onClick}
                >
                    <div
                        // className="mobile-closed-message-avatar"
                        style={{
                            background: conf.bubbleBackground,
                            ...mobileClosedMessageAvatarStyle,
                        }}
                    >
                        {conf.bubbleAvatarUrl === "" ? (
                            <svg
                                style={{ paddingTop: 4 }}
                                fill="#FFFFFF"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        ) : conf.bubbleAvatarUrl.indexOf("/") !== -1 ? (
                            <img
                                src={conf.bubbleAvatarUrl}
                                style={{ ...closedChatAvatarImageStyle }}
                            />
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <br />
                                {conf.bubbleAvatarUrl}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

interface IChatFloatingButtonProps {
    onClick: any;
    conf: IConfiguration;
}
