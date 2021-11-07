import { orange } from "@material-ui/core/colors";
import React from "react";

const Errormsg = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        textTransform: "capitalize",
        padding: "10px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "4px",
        marginTop: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default Errormsg;
