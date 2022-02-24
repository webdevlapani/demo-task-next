import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

const TextField = ({ ...props }: TextFieldProps) => {
  return <MuiTextField variant="standard" {...props} />;
};

export default TextField;
