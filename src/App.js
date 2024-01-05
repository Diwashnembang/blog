import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/Blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
          {/*matches any things*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;
