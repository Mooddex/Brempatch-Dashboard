// E:/D/me/My projects/Front-End/dashboard/Data/json.ts

export const dashboardData = {
  salesOverview: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [4000, 5500, 5000, 7000, 8000, 4000, 7500, 5000, 6800, 7200, 7000, 7600],
  },
  categoryDistribution: [
    { label: "Smartphones", percentage: 30 },
    { label: "Laptops", percentage: 23 },
    { label: "Furniture", percentage: 18 },
    { label: "Beauty & Personal Care", percentage: 13 },
    { label: "Gaming Accessories", percentage: 13 },
  ],
  orderStatusDistribution: [
    { label: "Pending", percentage: 24 },
    { label: "Processing", percentage: 18 },
    { label: "Canceled", percentage: 12 },
    { label: "Delivered", percentage: 47 },
  ],
  productPerformance: [
    {
      name: "Smartphone",
      revenue: 5000,
      sales: 3000,
      profit: 2000,
    },
    {
      name: "Laptop",
      revenue: 8000,
      sales: 5000,
      profit: 3000,
    },
    {
      name: "Coffee Table",
      revenue: 7000,
      sales: 4500,
      profit: 2500,
    },
    {
      name: "Mouse",
      revenue: 4000,
      sales: 2500,
      profit: 1500,
    },
    {
      name: "Running Shoes",
      revenue: 6000,
      sales: 3500,
      profit: 2500,
    },
  ],
};
