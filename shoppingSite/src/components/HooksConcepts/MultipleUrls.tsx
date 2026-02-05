import { useEffect, useState } from "react";


const MultipleUrls = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);

  const fetchProducts = async (url: string) => {
    const response = await fetch(url);
    // setPosts(await response.json());
    return await response.json();
  };

  const fetchAllProducts= async () => {
    const urls = [
      "https://jsonplaceholder.typicode.com/todos",
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/albums",
    ];
    try {
      const requests = urls.map((url) => fetchProducts(url));
      const [todosData, postsData, albumsData] = await Promise.all(requests);
      setTodos(todosData);
      setPosts(postsData);
      setAlbums(albumsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchAllProducts();
  },[]);
  return (
    <div className="container">
      <h1>JSConcept</h1>
      <div className="todos-table">
        <ul>
        <h3>Todos</h3>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      </div>
      <div className="posts-table">
        <ul>
        <h3>Posts</h3>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      </div>
      <div className="albums-table">
        <ul>
        <h3>Albums</h3>
        {albums.map((album: any) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default MultipleUrls;
