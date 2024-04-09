import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form  from './Form'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Form />
      </div>
    </QueryClientProvider>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);