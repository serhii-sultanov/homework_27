import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import PhoneMaskCustom from "./PhoneMask";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const phoneRegExp = /^\(\d{3}\)\s\d{3}-\d{4}/;

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("Please, enter your First Name")
    .min(2),
  middleName: yup.string(),
  lastName: yup.string().trim().required("Please, enter your Last Name").min(2),
  email: yup.string().email().required("Please, enter your email"),
  phoneNumber: yup
    .string()
    .required("Please, enter your phone number")
    .matches(phoneRegExp, "Please, enter a valid phone number"),
  suffix: yup.string().trim(),
  dateOfBirth: yup.date().required("Please, enter a date"),
  travellerNumber: yup
    .string()
    .required("Please,fill this field")
    .min(3, "This field should contains 3 or more symbols"),
});

const PassengerForm = () => {
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: 675,
        margin: "50px auto",
      }}
    >
      <Typography variant="h2" color="primary" mb={2}>
        Passenger information
      </Typography>
      <Typography variant="body1" color="secondary" mb={4.5}>
        Enter the required information for each traveler and be sure that it
        exactly matches the government-issued ID presented at the airport.
      </Typography>
      <Typography variant="h3" mb={3}>
        Passenger 1 (Adult)
      </Typography>
      <Grid container spacing={3} mb={6}>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="lastName"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Last Name*"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="suffix"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Suffix"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={5}>
          <Controller
            control={control}
            name="dateOfBirth"
            defaultValue={null}
            render={({ field, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of birth*"
                  maxDate={new Date()}
                  {...field}
                  error={!!error}
                  renderInput={(params) => (
                    <TextField {...params} helperText={error?.message} />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type="email"
                variant="outlined"
                label="Email adress*"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Phone number*"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                InputProps={{
                  inputComponent: PhoneMaskCustom,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="redressNumber"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Redress number"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="travellerNumber"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Known traveller number*"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Button
          type="reset"
          onClick={onReset}
          variant="outlined"
          startIcon={<DeleteIcon />}
          size="large"
          color="secondary"
        >
          Delete
        </Button>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default PassengerForm;
