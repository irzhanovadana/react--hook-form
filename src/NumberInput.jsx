import styled from "@emotion/styled";

export const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <Input
      type="number"
      min={0}
      onChange={handleChange}
      value={value}
      {...rest}
    />
  );
};

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;
