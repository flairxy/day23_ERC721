import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";
import LoadingComponent from "./loadingComponent";
import TokenMetadata from "./TokenMetadata";
import TokenWallet from "./TokenWallet";
import Admin from "./Admin";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  return (
    <div className="container">
      <h1>ERC20 Token</h1>
      <DrizzleProvider drizzle={drizzle}>
        <LoadingComponent>
          <TokenMetadata />
          <TokenWallet />
          <Admin />
        </LoadingComponent>
      </DrizzleProvider>
    </div>
  );
};

export default App;
