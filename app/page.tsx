import DashboardCard from "@/components/dashboard/DashboardCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";
import PostTable from "@/components/posts/PostTable";
import posts from "@/data/posts";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-4">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={145}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={567}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={12434}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable title="Latest Posts" posts={posts} limit={5} />
    </>
  );
}
