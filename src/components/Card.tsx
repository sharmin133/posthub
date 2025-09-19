import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={` bg-gradient-to-r from-orange-50 to-purple-100 rounded shadow p-4 border border-gray-200 hover:shadow-lg transition ${className}`}
    >
      {/* Optional title */}
      {title && (
        <h3 className="font-semibold text-xl mb-4 text-center text-purple-900">{title}</h3>
      )}

      {/* Card content */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Card;
