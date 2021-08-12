import { h, Component } from "preact";
import MessageType from "./messagetype";
import { IMessageTypeProps } from "../../typings";

//this class is handling the different attachment types
export default class TextType extends MessageType {
    render(props: IMessageTypeProps) {
        const message = props.message;
        const attachment = message.attachment;

        const textObject = { __html: message.text };

        return (
            <div>
                {/* {the line below will display the actual text} */}
                {/* <p dangerouslySetInnerHTML={textObject} /> */}

                <div
                    style={{
                        display: "flex",
                        overflow: "scroll",
                    }}
                >
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            height: "300px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        <img
                            style={{ height: "100px", width: "100px" }}
                            src="https://tymber-blaze-products.imgix.net/4cb59957-b922-4b77-9492-df91cfdec1f2.jpg?auto=format&ixlib=react-9.0.2&h=300&q=75&dpr=1"
                            alt="product display image"
                        />
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                        }}
                    >
                        Hello World
                    </div>
                </div>

                {attachment && attachment.type === "image" ? (
                    <img src={attachment.url} style="max-width: 100%;" />
                ) : (
                    ""
                )}
                {attachment && attachment.type === "audio" ? (
                    <audio controls autoPlay={false} style="max-width: 100%;">
                        <source src={attachment.url} type="audio/mp3" />
                    </audio>
                ) : (
                    ""
                )}
                {attachment && attachment.type === "video" ? (
                    <video
                        height={props.conf.videoHeight}
                        controls
                        autoPlay={false}
                        style="max-width: 100%;"
                    >
                        <source src={attachment.url} type="video/mp4" />
                    </video>
                ) : (
                    ""
                )}
            </div>
        );
    }
}
