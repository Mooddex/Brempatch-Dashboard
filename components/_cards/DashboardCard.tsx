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

const DasboardCard = ({title,value,icon,className}: DasboardCardProps ) => {
    return ( 
      <div className="transform hover:scale-105 transition-transform duration-300">
        <Card   className={`bg-gradient-to-r from-blue-600 to-indigo-600 
              text-white rounded-t-lg cursor-pointer h-full ${className}`}>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-bold text-white-500 dark:text-slate-200'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-2xl font-semibold text-white-500 dark:text-slate-200'>
            {value}
          </h3>
        </div>
      </CardContent>
    </Card> 
    </div>
     );
}
 
export default DasboardCard;

