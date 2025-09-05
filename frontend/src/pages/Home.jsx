import React from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Schemes from "../components/Schemes";

export default function Home() {
  return (
    <BackgroundWrapper>
      <div>
        <h1 style={{ padding: "20px", color: "white" }}>Welcome Farmers 🌿</h1>
      </div>
      <Schemes />
    </BackgroundWrapper>
  );
}
