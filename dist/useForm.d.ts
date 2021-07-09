import { FieldValues, UseFormProps, UseFormReturn } from './types';
export declare function useForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>({ mode, reValidateMode, resolver, context, defaultValues, shouldFocusError, shouldUseNativeValidation, shouldUnregister, criteriaMode, }?: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues>;
