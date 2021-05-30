import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { TextFieldProps } from "@material-ui/core/TextField";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { defaultDateFormat } from "../lib/utils/date";
import TextField from "./_TextField";

interface Props {
  name?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  format?: string;
  disabled?: boolean;
  required?: boolean;
  markedByEditor?: boolean;
  disablePast?: boolean;
  readOnly?: boolean;
  singleColumn?: boolean;
  onChange?: Function;
  onBlur?: Function;
}

const DatePicker: React.FC<
  {
    value: MaterialUiPickersDate;
  } & KeyboardDatePickerProps &
    Props
> = ({
  value,
  name,
  error,
  disablePast = false,
  format = defaultDateFormat,
  readOnly = false,
  singleColumn = false,
  onChange,
  onBlur,
  // control,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleFocus = () => (readOnly ? null : setOpen(true));
  const handleClose = () => (readOnly ? null : setOpen(false));

  const renderInput = ({
    value,
    onChange,
    onClick,
    ...props
  }: TextFieldProps) => (
    <TextField
      {...props}
      value={value || null}
      onChange={onChange}
      placeholder={props.placeholder}
      name={name}
      onFocus={handleFocus}
      InputProps={{ disableUnderline: true }}
      style={{ padding: "0 15px" }}
      helperText={null}
    />
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        open={open}
        value={moment(value) || ""}
        format={format}
        disablePast={disablePast}
        onChange={onChange}
        onClose={handleClose}
        TextFieldComponent={renderInput}
        {...props}
      />
    </MuiPickersUtilsProvider>

    //     <KeyboardDatePicker
    //         autoOk
    //         variant="inline"
    //         // inputVariant="outlined"
    //         // label="With keyboard"
    //         format="MM/dd/yyyy"
    //         value={value}
    //         InputAdornmentProps={{ position: "start" }}
    //         onChange={date => handleChange(date)}
    //         KeyboardButtonProps={{
    //             'aria-label': 'change date',
    //         }}
    //         TextFieldComponent={renderInput}
    //         {...props}
    //     />
    //     {/*<KeyboardDatePicker*/}
    //     {/*    disableToolbar*/}
    //     {/*    variant="inline"*/}
    //     {/*    format="MM/dd/yyyy"*/}
    //     {/*    margin="normal"*/}
    //     {/*    id="date-picker-inline"*/}
    //     {/*    value={value}*/}
    //     {/*    onChange={handleChange}*/}
    //     {/*    {...props}*/}
    //     {/*   */}
    //     {/*    */}
    //
    //     {/*/>*/}
    // </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
