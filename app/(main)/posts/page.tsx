import PostTable from "@/components/posts/PostTable";
import Postpagination from "@/components/posts/Postpagination";
import posts from "@/data/posts";
import BackButton from "@/components/back-button/BackButton";

const Posts = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable title="All Posts" posts={posts} />
      <Postpagination />
    </>
  );
};

export default Posts;
