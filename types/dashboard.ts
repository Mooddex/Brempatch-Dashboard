// types/dashboard.ts
export interface SalesOverview {
  labels: string[];
  values: number[];
}

export interface Distribution {
  label: string;
  percentage: number;
}

export interface ProductPerformance {
  name: string;
  revenue: number;
  sales: number;
  profit: number;
}

export interface DashboardData {
  salesOverview: SalesOverview;
  categoryDistribution: Distribution[];
  orderStatusDistribution: Distribution[];
  productPerformance: ProductPerformance[];
}
