import { Password as PrimePassword } from 'primereact/Password';
import './password.scss';

export interface PasswordProps {
  className?: string;
  handleChangeValue: (value: string) => void;
  value: string;
  placeholder: string;
  feedback?: boolean;
  tabIndex?: number;
  toggleMask?: boolean;
}

export default function Password(props: PasswordProps) {
  return (
    <div className="card flex justify-content-center">
      <PrimePassword
        value={props.value}
        onChange={(e) => props.handleChangeValue(e.target.value)}
        placeholder={props.placeholder}
        className={props.className}
        feedback={props.feedback}
        tabIndex={props.tabIndex}
        toggleMask={props.toggleMask}
      />
    </div>
  );
}
