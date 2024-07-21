import { FormFieldProps } from "../../global/types/form/types";
import { TextField } from "@mui/material";

const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    placeholder,
    register,
    error,
    valueAsNumber,
}) => (
    <TextField
        type={type}
        label={placeholder}
        error={!!error}
        helperText={error?.message ? error.message : ''}
        {...register(name, { valueAsNumber })}
    />
);
export default FormField;