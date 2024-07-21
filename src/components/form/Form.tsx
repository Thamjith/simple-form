import { Button, Stack, Typography } from "@mui/material";
import { FormData, UserSchema } from "../../global/types/form/types";

import FormField from "../formField/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} gap="1rem" sx={{ px: '1rem' }}>
                <Stack alignItems="center">
                    <Typography variant="h3">
                        Zod & React-Hook-Form
                    </Typography>
                    <Typography variant="body2">
                        (There is no backend to this, so no data is being send or stored)
                    </Typography>
                </Stack>
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                />

                <FormField
                    type="text"
                    placeholder="GitHub URL"
                    name="githubUrl"
                    register={register}
                    error={errors.githubUrl}
                />

                <FormField
                    type="number"
                    placeholder="Years of Experience (1 - 10)"
                    name="yearsOfExperience"
                    register={register}
                    error={errors.yearsOfExperience}
                    valueAsNumber
                />

                <FormField
                    type="password"
                    placeholder="Password"
                    name="password"
                    register={register}
                    error={errors.password}
                />

                <FormField
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword}
                />
                <Button variant="outlined" type="submit">
                    Check
                </Button>
            </Stack>
        </form>
    );
}

export default Form;