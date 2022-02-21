import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

const TextField = ({ ...props }: TextFieldProps) => { 
    return <MuiTextField
            variant="standard"
            {...props}
        />
}


export default TextField;