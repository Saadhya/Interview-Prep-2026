import { useAppDispatch, useAppSelector } from '../../store'
import { loadPost } from './PostSlice'

const ThunkPosts = () => {
    const disptach= useAppDispatch()
    const posts= useAppSelector(state=>state.post)
    const fetchPosts = async () => {
        disptach(loadPost())
    }
    // console.log(posts);
    
  return (
    <div>
        <h1>Posts using redux with thunk</h1>
        <button onClick={()=>fetchPosts()}>Fetch Posts</button>
        {posts.status === 'loading' && <p>{posts.status}...</p>}
        {posts && posts.posts.length > 0 && posts.posts.map((post:any) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                {/* <p>{post.}</p> */}
            </div>
        ))}
        
    </div>
  )
}

export default ThunkPosts;