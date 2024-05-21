import "./App.css";
import { useGetAllPostQuery } from "./services/post";

function App() {
  const responseInfo = useGetAllPostQuery();
  // console.log("Response info", responseInfo);
  console.log("Data", responseInfo.data);

  console.log("Success", responseInfo.isSuccess);

  if (responseInfo.isLoading) {
    return <div>Loading...</div>;
  }
  if (responseInfo.isError) {
    return <h1>An error occured {responseInfo.error.error}</h1>;
  }
  return (
    //Get all data
    <>
      <div className="App">
        <h1>Redux Toolkit - RTK Query (Get all Data)</h1>
        {responseInfo.data.map((post, i) => (
          <div key={i}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
