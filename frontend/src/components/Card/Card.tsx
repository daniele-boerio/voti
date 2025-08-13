import { Card as PrimeCard } from 'primereact/card';
import './card.scss';

export interface CardProps {
  title: string;
  subTitle?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <>
      <PrimeCard
        title={props.title}
        subTitle={props.subTitle}
        header={props.header}
        footer={props.footer}
        className={props.className}
      >
        {props.children}
      </PrimeCard>
    </>
  );
}
