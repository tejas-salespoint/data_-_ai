import React, { useEffect, useState } from "react";
import IndustryDyanmicContent from "../IndustryDyanmicContent/IndustryDyanmicContent";

const IndustryRowTabs = () => {
  const [tabActive, setTabActive] = useState(1);

  const tabActiveHandler = (id) => {
    setTabActive(id);
  };

  useEffect(() => {
    tabActiveHandler(tabActive);
  },);

  const rows = [
    {
      id: "1",
      title: "Accelerated Innovations",
    },
    {
      id: "2",
      title: "Deliver Differentiated CX",
    },
    {
      id: "3",
      title: "Emerging Mobility Services",
    },
    {
      id: "4",
      title: "Resilient Operations",
    },
    
    
    
  ];
  return (
    <>
      <section className="mx-10 my-10  md:mx-32 md:my-10">
        <ul className="flex gap-5  flex-nowrap relative overflow-hidden">
          {rows.map((item) => (
            <li
              onClick={() => tabActiveHandler(item.id)}
              key={item.id}
              className={`flex items-center  whitespace-nowrap  cursor-pointer text-2xl font-medium text-blue bg-light-blue  px-3 py-2 ${
                tabActive == item?.id ? "border-4 border-blue-500" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
   
      </section>

      <IndustryDyanmicContent activeId={tabActive} />
    </>
  );
};

export default IndustryRowTabs;
