import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(11);
  // console.log("Response info", responseInfo);
  // const responseInfo = useGetPostByLimitQuery(5);

  // const [deletePost, responseInfo] = useDeletePostMutation();

  // const [createPost, responseInfo] = useCreatePostMutation();

  // const newPost = {
  //   title: "darsheel",
  //   body: "Darsheel is a node js developer",
  //   userId: 1,
  // };

  const [updatePost, responseInfo] = useUpdatePostMutation();

  const updatePostData = {
    id: 1,
    title: "Darsheel updated",
    body: "Darsheel's body section is updated",
    userId: 1,
  };

  console.log("Response information", responseInfo);

  console.log("Data", responseInfo.data);

  console.log("Success", responseInfo.isSuccess);

  if (responseInfo.isLoading) {
    return <div>Loading...</div>;
  }
  if (responseInfo.isError) {
    return <h1>An error occured {responseInfo.error.error}</h1>;
  }
  return (
    <>
      {/* //Get all data */}
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

      {/* Get single data */}
      {/* <div className="App">
        <h1>Redux toolkit - RTK Query (Get single data)</h1>
        <h2>
          {" "}
          {responseInfo.data.id} -{responseInfo.data.title}
        </h2>
        <p>{responseInfo.data.body}</p>
      </div> */}

      {/* Get limited data */}
      {/* <div className="App">
        <h1>Redux toolkit - RTK Query (Get Limited data)</h1>=
        {responseInfo.data.map((post, i) => (
          <div key={i}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div> */}

      {/* //Delete data */}
      {/* <div className="app">
          <button
            onClick={() => {
              deletePost(2);
            }}
          >
            Delete post
          </button>
        </div> */}

      {/* Create Post */}
      {/* <div className="app">
        <button
          onClick={() => {
            createPost(newPost);
          }}
        >
          Add/Create post
        </button>
      </div> */}

      {/* Update post */}
      <div className="app">
        <button
          onClick={() => {
            updatePost(updatePostData);
          }}
        >
          Update Post
        </button>
      </div>
    </>
  );
}

export default App;
