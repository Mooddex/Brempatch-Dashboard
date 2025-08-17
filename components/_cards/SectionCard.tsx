import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionCard = ({ icon, title, subtitle, children }: SectionCardProps) => {
  return (
    <Card className="overflow-hidden ">
      <CardHeader className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 p-6">
        {icon}
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 cursor-pointer">{children}</CardContent>
    </Card>
  );
};

export default SectionCard;
