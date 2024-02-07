'use client'

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>;
    disabled?: boolean;
}

const Input: React.FC<InputProps>  = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return ( 
        <div>
          <label 
            htmlFor={id} 
            className="
              block 
              text-sm 
              font-medium 
              leading-6 
              text-stone-900
            "
          >
            {label}
          </label>
          <div className="mt-2">
            <input
              id={id}
              type={type}
              autoComplete={id}
              disabled={disabled}
              {...register(id, { required })}
              className={clsx(`
                form-input
                block 
                w-full 
                rounded-md 
                py-1.5 
                text-stone-900 
                shadow-sm 
                ring-1 
                ring-inset 
                border
                border-stone-900
                ring-stone-300 
                placeholder:text-stone-900 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-stone-900 
                sm:text-sm 
                sm:leading-6`,
                errors[id] && 'focus:ring-red-900',
                disabled && 'opacity-50 cursor-default'
              )}
            />
          </div>
        </div>
       );
    }

 
export default Input;