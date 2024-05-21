import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
} from "./services/post";

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(11);
  // console.log("Response info", responseInfo);
  const responseInfo = useGetPostByLimitQuery(5);
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
      {/* <div className="App">
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
      </div> */}
      {/* <div className="App">
        <h1>Redux toolkit - RTK Query (Get single data)</h1>
        <h2>
          {" "}
          {responseInfo.data.id} -{responseInfo.data.title}
        </h2>
        <p>{responseInfo.data.body}</p>
      </div> */}

      {/* Get limited data */}
      <div className="App">
        <h1>Redux toolkit - RTK Query (Get Limited data)</h1>=
        {responseInfo.data.map((post, i) => (
          <div key={i}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
