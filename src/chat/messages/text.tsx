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
                <p dangerouslySetInnerHTML={textObject} />
                {/* below this is my protype for the card display */}
                {/* <div
                    style={{
                        display: "flex",
                        overflow: "scroll",
                        height: "max-content",
                    }}
                >
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            // border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                            borderRadius: "3px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "max-content",
                        }}
                    >
                        <img
                            style={{
                                height: "100px",
                                width: "100px",
                                margin: "10px",
                                border: "1px solid black",
                                borderRadius: "3px",
                            }}
                            src="https://tymber-blaze-products.imgix.net/4cb59957-b922-4b77-9492-df91cfdec1f2.jpg?auto=format&ixlib=react-9.0.2&h=300&q=75&dpr=1"
                            alt="product display image"
                        />
                        <h3
                            style={{
                                textAlign: "center",
                            }}
                        >
                            [Next Day] Cured Sauce - Blueberry Oreo Cake (1g)
                        </h3>
                        <a
                            href="https://buzzdelivery.org/menu/brands/friendly-farms-29172/"
                            style={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                color: "black",
                                textShadow:
                                    "1px 1px 2px rgba(209, 184, 83, 0.4)",
                            }}
                        >
                            Friendly Farms
                        </a>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                textDecoration: "line-through",
                            }}
                        >
                            $29.95
                        </span>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                color: "red",
                            }}
                        >
                            $29.95
                        </span>
                        <a
                            href="google.com"
                            style={{
                                textTransform: "uppercase",
                                border: "1px solid rgba(209, 184, 83, 1)",
                                padding: "5px",
                                color: "white",
                                background: "black",
                                borderRadius: "3px",
                                boxShadow: "2px 2px 4px gray",
                            }}
                        >
                            View Product
                        </a>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                            borderRadius: "3px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "max-content",
                        }}
                    >
                        <img
                            style={{
                                height: "100px",
                                width: "100px",
                                margin: "10px",
                                border: "1px solid black",
                                borderRadius: "3px",
                            }}
                            src="https://tymber-blaze-products.imgix.net/4cb59957-b922-4b77-9492-df91cfdec1f2.jpg?auto=format&ixlib=react-9.0.2&h=300&q=75&dpr=1"
                            alt="product display image"
                        />
                        <h3
                            style={{
                                textAlign: "center",
                            }}
                        >
                            [Next Day] Cured Sauce - Blueberry Oreo Cake (1g)
                        </h3>
                        <a
                            href="https://buzzdelivery.org/menu/brands/friendly-farms-29172/"
                            style={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                color: "black",
                                textShadow:
                                    "1px 1px 2px rgba(209, 184, 83, 0.4)",
                            }}
                        >
                            Friendly Farms
                        </a>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                textDecoration: "line-through",
                            }}
                        >
                            $29.95
                        </span>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                color: "red",
                            }}
                        >
                            $29.95
                        </span>
                        <a
                            href="google.com"
                            style={{
                                textTransform: "uppercase",
                                border: "1px solid rgba(209, 184, 83, 1)",
                                padding: "5px",
                                color: "white",
                                background: "black",
                                borderRadius: "3px",
                                boxShadow: "2px 2px 4px gray",
                            }}
                        >
                            View Product
                        </a>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            // border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                            borderRadius: "3px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "max-content",
                        }}
                    >
                        <img
                            style={{
                                height: "100px",
                                width: "100px",
                                margin: "10px",
                                border: "1px solid black",
                                borderRadius: "3px",
                            }}
                            src="https://tymber-blaze-products.imgix.net/4cb59957-b922-4b77-9492-df91cfdec1f2.jpg?auto=format&ixlib=react-9.0.2&h=300&q=75&dpr=1"
                            alt="product display image"
                        />
                        <h3
                            style={{
                                textAlign: "center",
                            }}
                        >
                            [Next Day] Cured Sauce - Blueberry Oreo Cake (1g)
                        </h3>
                        <a
                            href="https://buzzdelivery.org/menu/brands/friendly-farms-29172/"
                            style={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                color: "black",
                                textShadow:
                                    "1px 1px 2px rgba(209, 184, 83, 0.4)",
                            }}
                        >
                            Friendly Farms
                        </a>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                textDecoration: "line-through",
                            }}
                        >
                            $29.95
                        </span>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                padding: "10px",
                                color: "red",
                            }}
                        >
                            $29.95
                        </span>
                        <a
                            href="google.com"
                            style={{
                                // textTransform: "uppercase",
                                border: "1px solid rgba(209, 184, 83, 1)",
                                padding: "5px",
                                color: "white",
                                background: "black",
                                borderRadius: "3px",
                                boxShadow: "2px 2px 4px gray",
                            }}
                        >
                            View Product
                        </a>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            margin: "10px",
                            border: "1px solid black",
                            background: "white",
                            boxShadow: "1px 1px 4px black",
                            borderRadius: "3px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "max-content",
                        }}
                    >
                        <img
                            style={{
                                height: "100px",
                                width: "100px",
                                margin: "10px",
                                border: "1px solid black",
                                borderRadius: "3px",
                            }}
                            src="https://tymber-blaze-products.imgix.net/4cb59957-b922-4b77-9492-df91cfdec1f2.jpg?auto=format&ixlib=react-9.0.2&h=300&q=75&dpr=1"
                            alt="product display image"
                        />
                        <h3
                            style={{
                                textAlign: "center",
                            }}
                        >
                            [Next Day] Cured Sauce - Blueberry Oreo Cake (1g)
                        </h3>
                        <a
                            href="https://buzzdelivery.org/menu/brands/friendly-farms-29172/"
                            style={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                color: "black",
                                textShadow:
                                    "1px 1px 2px rgba(209, 184, 83, 0.4)",
                            }}
                        >
                            Friendly Farms
                        </a>
                        <span style={{ marginTop: "10px" }}>69.69% THC</span>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                paddingTop: "10px",
                                textDecoration: "line-through",
                            }}
                        >
                            $29.95
                        </span>
                        <span
                            style={{
                                fontSize: "1.15rem",
                                paddingBottom: "20px",
                                color: "red",
                            }}
                        >
                            $29.95
                        </span>
                        <a
                            href="google.com"
                            style={{
                                // textTransform: "uppercase",
                                border: "1px solid rgba(209, 184, 83, 1)",
                                padding: "5px",
                                color: "white",
                                background: "black",
                                borderRadius: "3px",
                                boxShadow: "2px 2px 4px gray",
                            }}
                        >
                            More/less
                        </a>
                    </div>
                </div> */}
                {/* end prottype */}
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
