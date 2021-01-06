import {useFormikContext} from "formik";

type Return<T> = (val: T  | null | undefined) => void;

export const useSetFormikField = <T>(name: string): Return<T> => {
    const { setFieldTouched, setFieldValue } = useFormikContext();

    return (value: T | null | undefined) => {
        setFieldValue(name, value);
        setFieldTouched(name);
    }
}