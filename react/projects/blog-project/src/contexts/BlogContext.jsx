import { db } from "../helpers/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { ref, set, push, onValue, remove, update, getDatabase } from "firebase/database";
import { AuthContext } from "./AuthContext";
export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [blog, setBlog] = useState()
  //   {
  //   title: "",
  //   content: "",
  //   imgUrl: "",
  //   user: "",
  //   addDate: "",
  //   likeCount: "",
  //   commentCount: "",
  // });

  const addBlog = (posts) => {
    const db = getDatabase();
    const blogRef = ref(db, "db");
    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      title: posts.title,
      imgUrl: posts.imgUrl,
      content: posts.content,
      user: posts.email,
      addDate: new Date.now(),
      likeCount: 0,
      commentCount: 0,
    });
    console.log(newBlogRef);
  };

  const useFetch = () => {
    useEffect(() => {
      // const db = getDatabase(app);
      const blogRef = ref(db, "db");
      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];
        for (let id in data) {
          blogArray.push({
            id,
            ...data[id],
          });
        }
        setBlog(blogArray);
      });
    }, []);
    return { blog };
  };

  const deleteBlog = (id) => {
    remove(ref(db, "blogs/" + id));
  };

  const editBlog = (posts) => {
    const updates = {};
    updates["blogs/" + posts.id] = posts;
    return update(ref(db), updates);
  };

  return (
    <BlogContext.Provider value={{ addBlog, deleteBlog, editBlog, useFetch }}>
      {children}
    </BlogContext.Provider>
  );
};