import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

function SwipeSliderTabs() {
  const tabs = ["Home", "Trending", "Subscriptions", "Library","Home", "Trending", "Subscriptions", "Library","Home", "Trending", "Subscriptions", "Library","Home", "Trending", "Subscriptions", "Library","Home", "Trending", "Subscriptions", "Library","Home", "Trending", "Subscriptions", "Library"];
  const [activeTab, setActiveTab] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeTab < tabs.length - 1) {
        setActiveTab(activeTab + 1);
      }
    },
    onSwipedRight: () => {
      if (activeTab > 0) {
        setActiveTab(activeTab - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="px-4 py-4" style={{ overflowX: "scroll" }} {...handlers}>
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`${
              activeTab === index ? "bg-gray-100" : ""
            } flex-none text-center py-4 px-4`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Render content for the active tab here */}
    </div>
  );
}

export default SwipeSliderTabs;
