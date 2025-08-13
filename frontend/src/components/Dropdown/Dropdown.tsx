import { Dropdown as PrimeDropdown } from 'primereact/dropdown';
import './dropdown.scss';

export interface DropdownProps {
  className?: string;
  handleChangeValue: (value: string) => void;
  value: string;
  options: string[];
  placeholder: string;
  optionLabel?: string;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="card flex justify-content-center">
      <PrimeDropdown
        value={props.value}
        onChange={(e) => props.handleChangeValue(e.value)}
        options={props.options}
        optionLabel={props.optionLabel}
        placeholder={props.placeholder}
        className={props.className}
      />
    </div>
  );
}
