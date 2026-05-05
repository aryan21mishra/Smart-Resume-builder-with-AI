import React, { useState } from "react";
import { Input, Label } from "../ui";
import { RiEyeLine, RiEyeOffLine, RiAlertLine } from "@remixicon/react";

const FormField = ({ label, name, errors = {}, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = label === "Password";
  const fieldError = errors[name];

  const inputBase = `text-white
    outline-none!
    focus-visible:outline-none! focus-visible:ring-0!
    ${fieldError ? "border-red-500/50 focus-visible:ring-red-500/30 focus-visible:border-red-500/60" : ""}
  `;

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500">
        {label}
      </Label>

      {isPassword ? (
        <div className="relative flex items-center">
          <Input
            type={showPassword ? "text" : "password"}
            className={`${inputBase} pr-11`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 text-zinc-600 hover:text-zinc-300 active:text-zinc-100
                       transition-colors duration-150 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? (
              <RiEyeOffLine size={17} />
            ) : (
              <RiEyeLine size={17} />
            )}
          </button>
        </div>
      ) : (
        <Input {...props} className={inputBase} />
      )}

      {fieldError && (
        <div className="flex items-center gap-1.5 mt-0.5">
          <RiAlertLine size={12} className="text-red-400 shrink-0" />
          <p className="text-[11px] text-red-400 leading-none">
            {fieldError.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormField;
