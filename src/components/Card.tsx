import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded shadow p-4 border border-gray-200">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;