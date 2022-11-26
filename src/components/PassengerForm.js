import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("Please, enter your First Name")
    .min(2),
});

const PassengerForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="outlined"
            label="First Name*"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="middleName"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Middle"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default PassengerForm;
