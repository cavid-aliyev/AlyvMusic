import { Button } from "@material-ui/core";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome!</h1>
        <h3>All best hits here now!</h3>
      </div>

      <style jsx>
        {`
                .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
            `}
      </style>
    </>
  );
};

export default Index;
