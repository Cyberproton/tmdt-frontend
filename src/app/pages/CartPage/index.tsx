/* eslint-disable prettier/prettier */
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import AppCart from "./AppCart";

const client = new QueryClient();

const rootElement = document.getElementById("root");


export default function DesignPage() {
return (    
    <QueryClientProvider client={client}>
        <AppCart />
    </QueryClientProvider>
    ) 
  }
  