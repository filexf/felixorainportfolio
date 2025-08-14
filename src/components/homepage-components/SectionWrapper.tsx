import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
}

export default function SectionWrapper({ children, title }: SectionWrapperProps) {
  return (
    <section className="flex justify-center">
      <div className="flex w-4/5 flex-col justify-center gap-14">
        <h2 className="text-gradient text-center text-4xl md:text-6xl leading-[normal] font-semibold">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
