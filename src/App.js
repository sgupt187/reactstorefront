import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { apolloClient } from "./apollo";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  );
}

export default App;
