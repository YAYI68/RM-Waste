import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./components/Header"
import SkipPage from "./components/skip/SkipPage"

function App() {
 const queryClient = new QueryClient();

  return (
      <main className="w-screen flex flex-col items-center bg-gray-100 min-h-screen">
        <QueryClientProvider client={queryClient}>
        <div className="w-[90%] lg:w-[80%]">
         <Header/>
         <SkipPage />
        </div>
        </QueryClientProvider>
       </main>
  )
}

export default App
