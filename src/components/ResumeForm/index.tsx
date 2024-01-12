import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { defaultValues } from 'components/ResumeForm/utils/defaultValues';
import { FormData } from 'components/ResumeForm/types';
import Field from 'components/ResumeForm/components/Field';

const ResumeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues });

  const [defaultFormValues, setDefaultFormValues] = useState<FormData>(defaultValues);

  const onAddDescription = () => {
    setDefaultFormValues((prevState) => ({
      ...prevState,
      description: [...prevState.description, { text: String(Math.random()) }],
    }));
  };

  const onSubmit: SubmitHandler<FormData> = (data) => console.log('data: ', data);

  return (
    <>
      <form id="myPersonalData" onSubmit={handleSubmit(onSubmit)}>
        <Field
          register={register}
          fieldName="firstName"
          errors={errors}
          placeholder="First name"
        />
        {/*<div className="mb-2">*/}
        {/*  <label>*/}
        {/*    First name:*/}
        {/*    <input*/}
        {/*      className={`${*/}
        {/*        errors.firstName ? 'border-rose-500' : 'border-slate-100'*/}
        {/*      } px-2 rounded-md border-2`}*/}
        {/*      placeholder="First name"*/}
        {/*      {...register('firstName', { required: true })}*/}
        {/*    />*/}
        {/*  </label>*/}
        {/*  {errors.firstName && (*/}
        {/*    <div className="text-red-500 text-xs">This field is required</div>*/}
        {/*  )}*/}
        {/*</div>*/}

        <div className="mb-2">
          <label>
            Last name:
            <input
              className={`${
                errors.lastName ? 'border-rose-500' : 'border-slate-100'
              } px-2 rounded-md border-2`}
              placeholder="Last name"
              {...register('lastName', { required: true })}
            />
          </label>
          {errors.lastName && (
            <div className="text-red-500 text-xs">This field is required</div>
          )}
        </div>

        {defaultFormValues.description.map((field, index) => {
          console.log(`description.${index}.text`);
          return (
            <div key={index} className="mb-2">
              <label>
                Description:
                <textarea
                  className={`${
                    errors.description?.[index] ? 'border-rose-500' : 'border-slate-100'
                  } px-2 rounded-md border-2`}
                  placeholder={field.text}
                  {...register(`description.${index}.text`, { required: true })}
                />
              </label>
              {errors.description?.[index] && (
                <div className="text-red-500 text-xs">This field is required</div>
              )}
            </div>
          );
        })}
      </form>

      <input
        className="bg-indigo-600 text-white px-4 py-2 rounded-md cursor-pointer"
        type="submit"
        form="myPersonalData"
      />

      <button onClick={onAddDescription} className="bg-rose-400">
        Add more:
      </button>
    </>
  );
};

export default ResumeForm;
