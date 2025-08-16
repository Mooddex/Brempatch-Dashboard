import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react";
import { ReactElement, ReactNode } from "react";


interface DasboardCardProps {
  title: string;
  value: any| string | number;
  icon: ReactElement<LucideIcon>;
  trend?: string; // Optional trend text like "+12% from last month"
  trendUp?: boolean; // Optional trend direction
  subtitle?: string; // Optional subtitle or description
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'; // Theme colors
  onClick?: () => void; // Optional click handler
  loading?: boolean; // Loading state
  className?: string; // Additional CSS classes
  children?: ReactNode; // For custom content
}

const DasboardCard = ({title,value,icon}: DasboardCardProps ) => {
    return ( 
        <Card className='bg-slate-100 dark:bg-slate-800 p-4 pb-0'>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-5xl font-semibold text-slate-500 dark:text-slate-200'>
            {value}
          </h3>
        </div>
      </CardContent>
    </Card>
     );
}
 
export default DasboardCard;