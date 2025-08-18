import { BarChart3, Package, Activity, TrendingUp } from "lucide-react"
import { ChartLineInteractive } from "./ChartLine"
import { ChartTooltipDefault } from "./ChartTooltip"
import { ChartPieLabel } from "./CircleChart"
import SectionCard from "../_cards/SectionCard"

export const ChartsCard = () => {
return(
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          icon={<BarChart3 className="text-blue-600" />}
          title="Sales Trends"
          subtitle="Monthly performance"
        >
          <ChartLineInteractive />
        </SectionCard>

        <SectionCard
          icon={<Package className="text-green-600" />}
          title="Category Distribution"
          subtitle="Product breakdown"
        >
          <ChartPieLabel title="Category Distribution" discription="Products across categories" />
        </SectionCard>

        <SectionCard
          icon={<Activity className="text-purple-600" />}
          title="Order Status"
          subtitle="Current breakdown"
        >
          <ChartPieLabel title="Order Status" discription="Real-time tracking" />
        </SectionCard>

        <SectionCard
          icon={<TrendingUp className="text-orange-600" />}
          title="Performance Analytics"
          subtitle="Detailed metrics"
        >
          <ChartTooltipDefault />
        </SectionCard>
      </div>
)

}