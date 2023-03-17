import Header from "./header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

import './App.css';

function App() {
  return (
    <div>
     <Helmet>
      <meta name="description" content="your text goes here"/>
      <meta name="og:title" content=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>

            </Helmet>
    <Header />
    <Nav />
    <Main />
    <Footer />
    </div>

      );
}

export default App;
