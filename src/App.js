import React from "react";
import PriceCard from "./PriceCard";

const App = () => {
  let data = [
    {
      name: "FREE",
      currency: "$",
      price: "0",
      period: "month",
      feature: [
        {
          title: "Single User",
          isEnable: true,
        },
        {
          title: "5GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false,
        },
        {
          title: "Free Subdomain",
          isEnable: false,
        },
        {
          title: "Monthly Status ReportsMonthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      name: "PLUS",
      currency: "$",
      price: "9",
      period: "month",
      feature: [
        {
          title: "5 User",
          isEnable: true,
          isBold: true,
        },
        {
          title: "50GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status ReportsMonthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      name: "PRO",
      currency: "$",
      price: "49",
      period: "month",
      feature: [
        {
          title: "Unlimited Users",
          isEnable: true,
          isBold: true,
        },
        {
          title: "150GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Unlimited Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status ReportsMonthly Status Reports",
          isEnable: true,
        },
      ],
    },
  ];
  return (
    <div className="fa-ra">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((item) => {
              return <PriceCard item={item}></PriceCard>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
