import React from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";

export const StartPage = () => {
    return <div>
        <p>Hi! Welcome to my website, I am Arthur front end developer</p>
        <Button>
            <Link to={"/contact"}>Contact me</Link>
        </Button>
    </div>;
};