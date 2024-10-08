import { cnMerge } from "@/utils/cnMerge";
import React from "react";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => (
      <label
        ref={ref}
        className={cnMerge(className, 'text-neutral-300 font-medium')}
        {...props}
      />
    )
  );
  
  Label.displayName = 'Label';
  
  export { Label };
