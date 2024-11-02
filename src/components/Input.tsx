import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import { styled } from "@mui/system";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "300px",
  margin: "0 auto",
}));

interface InputFieldProps {
  onInputChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onInputChange }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // Validate input: Only allow 0 and 1
    if (/^[01]*$/.test(newValue)) {
      setValue(newValue); // Update state if valid
      setError(""); // Clear error if input is valid
      onInputChange(newValue); // Notify parent component of new value
    } else {
      setError("Only 0 and 1 are allowed."); // Set error message
    }
  };

  return (
    <StyledFormControl error={!!error}>
      <FormLabel>Enter digital data</FormLabel>
      <Input
        placeholder="Type in here and see magic happens..."
        variant="outlined"
        color="success"
        value={value}
        onChange={handleChange}
      />
      <FormHelperText>
        {error || "Enter values between 1 and 0 only."}
      </FormHelperText>
    </StyledFormControl>
  );
};

export default InputField;
