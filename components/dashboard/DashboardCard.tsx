import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: CardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 text-slate-500 dark:text-slate-200 font-bold">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
