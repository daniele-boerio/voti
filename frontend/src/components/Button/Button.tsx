import { Button as PrimeButton } from 'primereact/Button';
import './button.scss';

export interface ButtonProps {
  label?: string;
  icon?: string;
  handleClick: () => void;
  iconPos?: 'top' | 'bottom' | 'left' | 'right' | undefined;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <PrimeButton
        label={props.label}
        icon={props.icon}
        onClick={props.handleClick}
        iconPos={props.iconPos}
        loading={props.loading}
        disabled={props.disabled}
      />
    </>
  );
}
