import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post } from "@/types/posts";
import Link from "next/link";

const PostTable = ({
  title = "Posts",
  posts,
  limit,
}: {
  title?: string;
  posts: Post[];
  limit?: number;
}) => {
  // sort posts
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // filter posts
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold ">{title}</h3>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded text-xs">
                  <Link href={`/posts/edit/${post.id}`}>edit</Link>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
};

export default PostTable;
