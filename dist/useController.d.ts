import { FieldPath, FieldValues, UseControllerProps, UseControllerReturn } from './types';
export declare function useController<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ name, rules, defaultValue, control, shouldUnregister, }: UseControllerProps<TFieldValues, TName>): UseControllerReturn<TFieldValues, TName>;
