declare const _default: <T extends Partial<{
    required: string | import("../types").ValidationRule<boolean>;
    min: import("../types").ValidationRule<string | number>;
    max: import("../types").ValidationRule<string | number>;
    maxLength: import("../types").ValidationRule<string | number>;
    minLength: import("../types").ValidationRule<string | number>;
    pattern: import("../types").ValidationRule<RegExp>;
    validate: import("../types").Validate<any> | Record<string, import("../types").Validate<any>>;
    valueAsNumber: boolean;
    valueAsDate: boolean;
    value: any;
    setValueAs: (value: any) => any;
    shouldUnregister?: boolean | undefined;
}>>(options?: T | undefined, mounted?: boolean | undefined) => boolean | import("../types").ValidationValueMessage<boolean> | import("../types").ValidationRule<string | number> | import("../types").ValidationRule<RegExp> | import("../types").Validate<any> | Record<string, import("../types").Validate<any>> | undefined;
export default _default;