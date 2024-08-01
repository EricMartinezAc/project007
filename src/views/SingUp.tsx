import { TextInput } from "evergreen-ui";
import React from "react";

function SingUp() {
  return (
    <div className="SingUp">
      <form className="SingUp-form">
        <TextInput
          name="text-input-name"
          placeholder="Text input placeholder..."
        />
      </form>
    </div>
  );
}

export default SingUp;
