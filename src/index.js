import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {

    return (
        <div className="ui comments container">
            <ApprovalCard>
                <CommentDetail author="Sam" timestamp="Today at 4:00PM" avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" timestamp="Today at 1:00PM" avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bill" timestamp="Yesterday at 4:00PM" avatar={faker.image.avatar()} text={faker.hacker.phrase()}/>
            </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector("#root"));