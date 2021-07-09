import { FieldValues, FormProviderProps, UseFormReturn } from './types';
export declare const useFormContext: <TFieldValues extends FieldValues>() => UseFormReturn<TFieldValues>;
export declare const FormProvider: <TFieldValues extends FieldValues>(props: FormProviderProps<TFieldValues>) => JSX.Element;