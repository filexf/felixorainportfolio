import React from "react";

export default function SectionWrapper({ children, title }) {
  return (
    <section className="flex justify-center">
      <div className="flex w-4/5 flex-col justify-center gap-14">
        <h2 className="text-gradient text-center text-6xl leading-[normal] font-semibold">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
