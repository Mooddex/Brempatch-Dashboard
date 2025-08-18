"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ResponsiveCardProps {
  title: string;
  children: React.ReactNode; // This will be your table or any content
}

const ResponsiveCard = ({ title, children }: ResponsiveCardProps) => {
  return (
    <div className="block md:hidden"> 
      {/* Only show on small screens */}
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Tap to view details</p>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="max-w-[90vw] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResponsiveCard;
