import React, { useState } from "react";
import Accordion from "./accordion/Accordion";

const Review = () => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "Maruti Baleno Review",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
    {
      title: "Interior",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
    {
      title: "Safety",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
    {
      title: "Performance",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
    {
      title: "Ride and Handling",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
    {
      title: "Verdict",
      des1: "With more features and an extensive redesign, the new Baleno has created a lot of excitement. But does it live up to the promise?",
      img: "https://cdn.discordapp.com/attachments/1149991717647421440/1149991752460152852/Rectangle_246.png",
      des: "Which was the last Maruti Suzuki car that got you excited? Not many, right? The new Baleno however has definitely created a lot of excitement right from the moment Maruti Suzuki started releasing details of it well before its launch. But will this excitement last even after we have experienced it and driven it? More importantly,f does the new Baleno feel like a proper upgrade as compared to the old one? ",
    },
  ];

  return (
    <div>
      <div className="px-5 flex flex-col gap-10">
        {accordionData.map((data, index) => {
          return (
            <Accordion
              key={index}
              open={index === open}
              title={data.title}
              des={data.des}
              des1={data.des1}
              img={data.img}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
