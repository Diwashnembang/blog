import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const renderComponent = () => (
    <>
      <BlogList blogs={blogs} title="All blogs " />
      <BlogList
        blogs={blogs.filter((blog) => blog.aurthor === "diwashh")}
        title="Diwash's Blog!"
      />
    </>
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && "Loading.....;"}
      {blogs && renderComponent()}
    </div>
  );
};

export default Home;
