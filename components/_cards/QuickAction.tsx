import { Users, Package, BarChart3, Activity } from "lucide-react";

const QuickActionSection = () => {
    return ( 
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 text-blue-600 hover:scale-105 transition cursor-pointer">
            <Users />
            <span>Add Client</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-600 hover:scale-105 transition cursor-pointer">
            <Package />
            <span>Add Product</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-purple-50 text-purple-600 hover:scale-105 transition cursor-pointer">
            <BarChart3 />
            <span>View Reports</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-orange-50 text-orange-600 hover:scale-105 transition cursor-pointer">
            <Activity />
            <span>Activity Log</span>
          </button>
        </div>
      </div>
     );
}
 
export default QuickActionSection;