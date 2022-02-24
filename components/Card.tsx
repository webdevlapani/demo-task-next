import { Card as MCard } from "@mui/material";
import { FC } from "react";

import styles from "styles/Card.module.css";

interface CardProps {
  className?: string | undefined;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return <MCard className={`${className} ${styles.card}`}>{children}</MCard>;
};

export default Card;
