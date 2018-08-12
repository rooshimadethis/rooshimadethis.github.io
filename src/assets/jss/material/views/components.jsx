import { container } from "assets/jss/material.jsx";

const componentsStyle = {
    container,
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        //fontSize: "7rem",
        display: "inline-block",
        position: "relative",
        color: "white"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px 0 0",
        color: "white"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    },
    centered: {
        display: "block",
    }
};

export default componentsStyle;
