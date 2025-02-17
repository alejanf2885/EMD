import React from 'react';

type Variant = "primary" | "secondary" | "details";

interface ButtonProps {
  text?: string;
  variant?: Variant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text = "Click me!", variant = "primary", onClick }) => {
  const variants: Record<Variant, string> = {
    primary: "bg-primary text-white hover:bg-primaryhover",
    secondary: "bg-secondary text-white hover:bg-secondaryhover",
    details: "bg-details text-dark hover:text-white hover:bg-detailshover"
  };

  return (
    <button 
      className={`${variants[variant]} rounded-3xl py-2 px-6 m-1 cursor-pointer`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
