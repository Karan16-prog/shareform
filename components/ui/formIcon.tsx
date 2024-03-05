import { FormItem } from "@/app/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FormIcon = ({ formData }: { formData: FormItem }) => {
  return (
    <Card className="bg-white rounded-lg mx-4 md:mx-0 shadow-md col-span-12 md:col-span-6 lg:col-span-2">
      <CardHeader className="border-b flex items-center justify-center h-40">
        <CardTitle className="text-xl">{formData.name}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="flex justify-between items-center py-4 px-4">
        <p>Responses: {formData.responses}</p>
        <span>...</span>
      </CardFooter>
    </Card>
  );
};

export default FormIcon;
