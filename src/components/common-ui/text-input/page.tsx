import React from 'react'

interface TextInputProps {
  label?: string;
  type?: string;
  description?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
  minLength?: number;
  name?: string;
  disabled?: boolean;
  min?: number;
  maxLength?: number;
  required?: boolean;
  id?: string;
  className?: string;
  autofocus?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
}

const TextInput = ({
    label = "",
    id = "",
    name = "",
    type = "text",
    description = '',
    placeholder = "",
    value,
    onChange,
    onKeyDown,
    error = "",
    minLength,
    disabled = false,
    min,
    maxLength,
    required = false,
    className = "",
    autofocus = false,
    autoComplete = '',
    inputMode = "text"
}: TextInputProps) => {


    return (
        <div className='flex flex-col w-full'>
            {label && <label htmlFor={id} className='text-primary-dark text-[14px] sm:text-[16px] leading-[25px] mb-[10px] font-[600] capitalize font-opensans'>
                {label.split('*').map((part, index, arr) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < arr.length - 1 && (
                            <span className="text-red-600">*</span>
                        )}
                    </React.Fragment>
                ))}
            </label>}
            {description && <p className='text-gray-300 text-[16px] mb-[14px] font-epilogue font-[500] leading-[25px] '>
                {description}
            </p>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className={`${className} w-full h-[40px] sm:h-[48px] bg-white text-black text-[16px] leading-[20px] font-[400]  placeholder-text px-[12px] lg:px-[24px] rounded-[6px] border border-gray-200 !outline-none !ring-none`}
                minLength={minLength && minLength}
                name={name}
                disabled={disabled}
                min={min}
                maxLength={maxLength}
                required={required}
                autoComplete={autoComplete ? autoComplete : 'none'}
                autoFocus={autofocus}
                inputMode={inputMode}
            />
            {error && <small className='text-left mt-[5px] mx-[5px] text-red-500 text-xs'>{error}</small>}
        </div>
    )
}

export default TextInput
