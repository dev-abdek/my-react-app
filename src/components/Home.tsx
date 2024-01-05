import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
