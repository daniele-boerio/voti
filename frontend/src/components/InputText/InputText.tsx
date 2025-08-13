import { InputText as PrimeInputText } from 'primereact/Inputtext';
import './inputtext.scss';

export interface InputTextProps {
  className?: string;
  handleChangeValue: (value: string) => void;
  value: string;
  placeholder: string;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="card flex justify-content-center">
      <PrimeInputText
        value={props.value}
        onChange={(e) => props.handleChangeValue(e.target.value)}
        placeholder={props.placeholder}
        className={props.className}
      />
    </div>
  );
}
