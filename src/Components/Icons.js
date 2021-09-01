import React from "react";
import { Correct } from "./Correct";
import { Wrong } from "./Wrong";
function Icons() {
  return (
    <>
      <div className="icons--section">
        <Wrong />
        <Correct />
      </div>
    </>
  );
}

export { Icons };
