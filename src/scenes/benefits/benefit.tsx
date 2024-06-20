import React from "react";
import { SelectedPage } from "src/shared/types";
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};
function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h1 className="text-center font-bold">{title}</h1>
      <p className="my-3">{description}</p>
    </div>
  );
}

export default Benefit;
