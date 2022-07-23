import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./routes/Main/MainPage";
import AuthPage from "./routes/Auth/AuthPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //api 재시도 요청 횟수 설정
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/auth/*" element={<AuthPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === "development"} />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
