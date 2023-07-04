import { useContext } from "react";
import { DropDownContext } from "../context/dropdown";

export function useDropdown() {
const context = useContext(DropDownContext);

if(context === undefined) {
  throw new Error('useDropdown must be used within a FormProvider');
}

return [context.optionsCategory,context.optionsState,context.loading];
}
