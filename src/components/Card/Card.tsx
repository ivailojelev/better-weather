import { ReactElement } from "react";

export interface CardProps {
    children: ReactElement | ReactElement[];
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return <div className={`rounded border p-4 ${className}`}>{children}</div>;
}
