import * as React from 'react';
import { SubjectType, Subscription } from '../utils/Subject';
import { ErrorOption, FieldErrors } from './errors';
import { EventType } from './events';
import { FieldArrayDefaultValues } from './fieldArray';
import { FieldRefs, FieldValue, FieldValues, InternalFieldName } from './fields';
import { Resolver } from './resolvers';
import { DeepMap, DeepPartial, FieldPath, FieldPathValue, FieldPathValues } from './utils';
import { RegisterOptions } from './validator';
declare const $NestedValue: unique symbol;
export declare type NestedValue<TValue extends unknown[] | Record<string, unknown> | Map<unknown, unknown> = unknown[] | Record<string, unknown>> = {
    [$NestedValue]: never;
} & TValue;
export declare type UnpackNestedValue<T> = T extends NestedValue<infer U> ? U : T extends Date | FileList ? T : T extends Record<string, unknown> ? {
    [K in keyof T]: UnpackNestedValue<T[K]>;
} : T;
export declare type DefaultValues<TFieldValues> = UnpackNestedValue<DeepPartial<TFieldValues>>;
export declare type InternalNameSet = Set<InternalFieldName>;
export declare type ValidationMode = {
    onBlur: 'onBlur';
    onChange: 'onChange';
    onSubmit: 'onSubmit';
    onTouched: 'onTouched';
    all: 'all';
};
export declare type Mode = keyof ValidationMode;
export declare type CriteriaMode = 'firstError' | 'all';
export declare type SubmitHandler<TFieldValues extends FieldValues> = (data: UnpackNestedValue<TFieldValues>, event?: React.BaseSyntheticEvent) => any | Promise<any>;
export declare type SubmitErrorHandler<TFieldValues extends FieldValues> = (errors: FieldErrors<TFieldValues>, event?: React.BaseSyntheticEvent) => any | Promise<any>;
export declare type SetValueConfig = Partial<{
    shouldValidate: boolean;
    shouldDirty: boolean;
    shouldTouch: boolean;
}>;
export declare type TriggerConfig = Partial<{
    shouldFocus: boolean;
}>;
export declare type ChangeHandler = (event: any) => Promise<void | boolean>;
export declare type UseFormProps<TFieldValues extends FieldValues = FieldValues, TContext extends object = object> = Partial<{
    mode: Mode;
    reValidateMode: Exclude<Mode, 'onTouched' | 'all'>;
    defaultValues: DefaultValues<TFieldValues>;
    resolver: Resolver<TFieldValues, TContext>;
    context: TContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    criteriaMode: CriteriaMode;
}>;
export declare type FieldNamesMarkedBoolean<TFieldValues extends FieldValues> = DeepMap<TFieldValues, true>;
export declare type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
    isDirty: boolean;
    isValidating: boolean;
    dirtyFields: FieldNamesMarkedBoolean<TFieldValues>;
    touchedFields: FieldNamesMarkedBoolean<TFieldValues>;
    errors: boolean;
    isValid: boolean;
};
export declare type ReadFormState = {
    [K in keyof FormStateProxy]: boolean | 'all';
};
export declare type FormState<TFieldValues> = {
    isDirty: boolean;
    dirtyFields: FieldNamesMarkedBoolean<TFieldValues>;
    isSubmitted: boolean;
    isSubmitSuccessful: boolean;
    submitCount: number;
    touchedFields: FieldNamesMarkedBoolean<TFieldValues>;
    isSubmitting: boolean;
    isValidating: boolean;
    isValid: boolean;
    errors: FieldErrors<TFieldValues>;
};
export declare type KeepStateOptions = Partial<{
    keepErrors: boolean;
    keepDirty: boolean;
    keepValues: boolean;
    keepDefaultValues: boolean;
    keepIsSubmitted: boolean;
    keepTouched: boolean;
    keepIsValid: boolean;
    keepSubmitCount: boolean;
}>;
export declare type SetFieldValue<TFieldValues> = FieldValue<TFieldValues>;
export declare type RefCallBack = (instance: any) => void;
export declare type UseFormRegisterReturn = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: InternalFieldName;
};
export declare type UseFormRegister<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>) => UseFormRegisterReturn;
export declare type UseFormSetFocus<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName) => void;
export declare type UseFormGetValues<TFieldValues extends FieldValues> = {
    (): UnpackNestedValue<TFieldValues>;
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName): FieldPathValue<TFieldValues, TFieldName>;
    <TFieldNames extends FieldPath<TFieldValues>[]>(fieldNames: readonly [...TFieldNames]): [...FieldPathValues<TFieldValues, TFieldNames>];
    <TFieldNames extends readonly FieldPath<TFieldValues>[]>(fieldNames: readonly [...TFieldNames]): [...FieldPathValues<TFieldValues, TFieldNames>];
};
export declare type UseFormWatch<TFieldValues extends FieldValues> = {
    (): UnpackNestedValue<TFieldValues>;
    <TFieldNames extends FieldPath<TFieldValues>[]>(fieldNames: readonly [...TFieldNames], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [...FieldPathValues<TFieldValues, TFieldNames>];
    <TFieldNames extends readonly FieldPath<TFieldValues>[]>(fieldNames: readonly [...TFieldNames], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [...FieldPathValues<TFieldValues, TFieldNames>];
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>, T6 extends FieldPath<TFieldValues>, T7 extends FieldPath<TFieldValues>, T8 extends FieldPath<TFieldValues>, T9 extends FieldPath<TFieldValues>, T10 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>,
        FieldPathValue<TFieldValues, T6>,
        FieldPathValue<TFieldValues, T7>,
        FieldPathValue<TFieldValues, T8>,
        FieldPathValue<TFieldValues, T9>,
        FieldPathValue<TFieldValues, T10>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>, T6 extends FieldPath<TFieldValues>, T7 extends FieldPath<TFieldValues>, T8 extends FieldPath<TFieldValues>, T9 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>,
        FieldPathValue<TFieldValues, T6>,
        FieldPathValue<TFieldValues, T7>,
        FieldPathValue<TFieldValues, T8>,
        FieldPathValue<TFieldValues, T9>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>, T6 extends FieldPath<TFieldValues>, T7 extends FieldPath<TFieldValues>, T8 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5, T6, T7, T8], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>,
        FieldPathValue<TFieldValues, T6>,
        FieldPathValue<TFieldValues, T7>,
        FieldPathValue<TFieldValues, T8>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>, T6 extends FieldPath<TFieldValues>, T7 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5, T6, T7], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>,
        FieldPathValue<TFieldValues, T6>,
        FieldPathValue<TFieldValues, T7>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>, T6 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5, T6], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>,
        FieldPathValue<TFieldValues, T6>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>, T5 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4, T5], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>,
        FieldPathValue<TFieldValues, T5>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>, T4 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3, T4], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>,
        FieldPathValue<TFieldValues, T4>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>, T3 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2, T3], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [
        FieldPathValue<TFieldValues, T1>,
        FieldPathValue<TFieldValues, T2>,
        FieldPathValue<TFieldValues, T3>
    ];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <T1 extends FieldPath<TFieldValues>, T2 extends FieldPath<TFieldValues>>(fieldNames: readonly [T1, T2], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): [FieldPathValue<TFieldValues, T1>, FieldPathValue<TFieldValues, T2>];
    <TFieldName extends FieldPath<TFieldValues>>(fieldName: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    <TFieldNames extends FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[]>(fieldNames: TFieldNames, defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>): FieldPathValues<TFieldValues, TFieldNames>;
    (callback: WatchObserver<TFieldValues>, defaultValues?: UnpackNestedValue<DeepPartial<TFieldValues>>): Subscription;
};
export declare type UseFormTrigger<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[], options?: TriggerConfig) => Promise<boolean>;
export declare type UseFormClearErrors<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[]) => void;
export declare type UseFormSetValue<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, value: UnpackNestedValue<FieldPathValue<TFieldValues, TFieldName>>, options?: SetValueConfig) => void;
export declare type UseFormSetError<TFieldValues extends FieldValues> = (name: FieldPath<TFieldValues>, error: ErrorOption, options?: {
    shouldFocus: boolean;
}) => void;
export declare type UseFormUnregister<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[], options?: Omit<KeepStateOptions, 'keepIsSubmitted' | 'keepSubmitCount' | 'keepValues' | 'keepDefaultValues' | 'keepErrors'> & {
    keepValue?: boolean;
    keepDefaultValue?: boolean;
    keepError?: boolean;
}) => void;
export declare type UseFormInternalUnregister<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[], options?: Omit<KeepStateOptions, 'keepIsSubmitted' | 'keepSubmitCount' | 'keepValues' | 'keepDefaultValues' | 'keepErrors'> & {
    keepValue?: boolean;
    keepDefaultValue?: boolean;
    keepError?: boolean;
}, notify?: boolean) => void;
export declare type UseFormHandleSubmit<TFieldValues extends FieldValues> = <TSubmitFieldValues extends FieldValues = TFieldValues>(onValid: SubmitHandler<TSubmitFieldValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
export declare type UseFormReset<TFieldValues extends FieldValues> = (values?: DefaultValues<TFieldValues>, keepStateOptions?: KeepStateOptions) => void;
export declare type WatchInternal<TFieldValues> = (fieldNames?: InternalFieldName | InternalFieldName[], defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>, isGlobal?: boolean, formValues?: unknown) => FieldPathValue<FieldValues, InternalFieldName> | FieldPathValues<FieldValues, InternalFieldName[]>;
export declare type GetIsDirty = <TName extends InternalFieldName, TData>(name?: TName, data?: TData) => boolean;
export declare type FormStateSubjectRef<TFieldValues> = SubjectType<Partial<FormState<TFieldValues>> & {
    name?: InternalFieldName;
}>;
export declare type Subjects<TFieldValues extends FieldValues = FieldValues> = React.MutableRefObject<{
    watch: SubjectType<{
        name?: InternalFieldName;
        type?: EventType;
        values?: FieldValues;
    }>;
    control: SubjectType<{
        name?: InternalFieldName;
        values?: FieldValues;
    }>;
    array: SubjectType<{
        name?: InternalFieldName;
        values?: FieldValues;
        isReset?: boolean;
    }>;
    state: FormStateSubjectRef<TFieldValues>;
}>;
export declare type Names = {
    mount: InternalNameSet;
    unMount: InternalNameSet;
    array: InternalNameSet;
    watch: InternalNameSet;
    watchAll: boolean;
};
export declare type Control<TFieldValues extends FieldValues = FieldValues> = {
    shouldUnmount?: boolean;
    subjectsRef: Subjects<TFieldValues>;
    namesRef: React.MutableRefObject<Names>;
    inFieldArrayActionRef: React.MutableRefObject<boolean>;
    getIsDirty: GetIsDirty;
    fieldArrayDefaultValuesRef: FieldArrayDefaultValues;
    formStateRef: React.MutableRefObject<FormState<TFieldValues>>;
    updateIsValid: <T extends FieldValues>(payload?: T) => void;
    fieldsRef: React.MutableRefObject<FieldRefs>;
    readFormStateRef: React.MutableRefObject<ReadFormState>;
    defaultValuesRef: React.MutableRefObject<DefaultValues<TFieldValues>>;
    watchInternal: WatchInternal<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
    unregister: UseFormUnregister<TFieldValues>;
};
export declare type WatchObserver<TFieldValues> = (value: UnpackNestedValue<TFieldValues>, info: {
    name?: string;
    type?: EventType;
    value?: unknown;
}) => void;
export declare type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
    watch: UseFormWatch<TFieldValues>;
    getValues: UseFormGetValues<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    clearErrors: UseFormClearErrors<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    trigger: UseFormTrigger<TFieldValues>;
    formState: FormState<TFieldValues>;
    reset: UseFormReset<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues>;
    unregister: UseFormUnregister<TFieldValues>;
    control: Control<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
    setFocus: UseFormSetFocus<TFieldValues>;
};
export declare type UseFormStateProps<TFieldValues> = Partial<{
    control?: Control<TFieldValues>;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
}>;
export declare type UseFormStateReturn<TFieldValues> = FormState<TFieldValues>;
export declare type UseWatchProps<TFieldValues extends FieldValues = FieldValues> = {
    defaultValue?: unknown;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
    control?: Control<TFieldValues>;
};
export declare type FormProviderProps<TFieldValues extends FieldValues = FieldValues> = {
    children: React.ReactNode;
} & UseFormReturn<TFieldValues>;
export {};