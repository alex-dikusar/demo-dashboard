import { Select } from 'antd';

interface PlotDropdownProps {
  options: Array<{ value: string; label: string }>;
  defaultValue: string;
}

const PlotDropdown = ({ options, defaultValue }: PlotDropdownProps) => {
  return (
    <div id="plot-select">
      <Select
        options={options}
        defaultValue={defaultValue}
        style={{
          width: 200,
          borderRadius: '20px',
          border: '1px solid #d9d9d9',
          padding: '2px 8px',
          display: 'inline-block',
          color: 'white',
          backgroundColor: 'lightGray',
        }}
        dropdownStyle={{
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default PlotDropdown;
