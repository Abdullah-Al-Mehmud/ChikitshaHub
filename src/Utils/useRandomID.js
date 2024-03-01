/* eslint-disable no-unused-vars */
import React from "react";

import { useState } from "react";

const useRandomID = () => {
  const generateId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };

  const [randomID, setRandomID] = useState(generateId());

  const regenerateID = () => {
    setRandomID(generateId());
  };

  return [randomID, regenerateID];
};

export default useRandomID;
