import { Button } from "@/components/ui/button";
import FormIcon from "@/components/ui/formIcon";
import React from "react";
import { FormItem } from "../interface";

const Dashboard = () => {
  return (
    <div className="py-16 px-24">
      <div className="flex justify-between pb-8">
        <h1 className="text-3xl">Your Forms</h1>
        <Button>New Form</Button>
      </div>
      {/* {dummyData.map((ele: FormItem) => {
        return <FormIcon formData={ele} />;
      })} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {dummyData.map((formData, index) => (
          <FormIcon key={formData.id} formData={formData} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

const dummyData: FormItem[] = [
  {
    id: "1",
    name: "First Form",
    responses: 0,
  },
  {
    id: "2",
    name: "Second Form",
    responses: 0,
  },
  {
    id: "3",
    name: "Third Form",
    responses: 0,
  },
  {
    id: "4",
    name: "Fourth Form",
    responses: 0,
  },
  {
    id: "5",
    name: "Fifth Form",
    responses: 0,
  },
];
