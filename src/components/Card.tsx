import React, { ReactNode } from "react";

interface CardProps {
   title?: string;
  children: ReactNode;
  className?: string; // ✅ className optional
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-white rounded shadow p-4 border border-gray-200 ${className}`}
    >
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
