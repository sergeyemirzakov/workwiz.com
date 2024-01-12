import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

type Props<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  fieldName: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const Field = <T extends FieldValues>({
  fieldName,
  register,
  errors,
  placeholder,
}: Props<T>) => {
  return (
    <div className="mb-2">
      <label>
        First name:
        <input
          className={`${
            errors[fieldName] ? 'border-rose-500' : 'border-slate-100'
          } px-2 rounded-md border-2`}
          placeholder={placeholder}
          {...register(fieldName, { required: true })}
        />
      </label>
      {errors[fieldName] && (
        <div className="text-red-500 text-xs">This field is required</div>
      )}
    </div>
  );
};

export default Field;
