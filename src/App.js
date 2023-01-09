import Header from "./components/Header/Header";
import News from "./components/News/News";
import Property from "./components/Propertys/Propertys";
import Provide from "./components/Provide/Provide";
import Reference from "./components/Reference/Reference";
import Footer from "./Footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <div className="overflow-hidden">
        <Header />
        <Property />
        <Provide />
        <News />
        <Reference />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
