import { Input as InputField } from "@/components/ui/input";
import { type InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../form";

interface Props {
  label: string;
  name: string;
  description?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function Input({ label, name, description, inputProps }: Props) {
  const form = useFormContext();
  const error = form.formState.errors[name];

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <InputField
              {...field}
              {...inputProps}
              className={`${inputProps?.className} ${error && "border-destructive border"}`}
              onChange={field.onChange}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
