"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("60604df7-cc93-4cbd-970c-87cf1b7473b3");
  });

  return null;
}

export default CrispChat;