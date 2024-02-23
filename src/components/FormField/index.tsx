"use client";

interface FormFieldProps {
    setObject: any,
    object: any,
    fieldName: string
    fieldLabel: string
}

export default function FormField(props: FormFieldProps) {
    function handleFormFieldChange(e: any) {
        const field = e.target.id;
        props.setObject({
            ...props.object,
            [field]: e.target.value,
            });
        }

    return (
    <div>
        <input id={props.fieldName}
            value={props.object?.fieldName}
            onChange= {handleFormFieldChange}
            className="text-black">
        </input>
        <label htmlFor={props.fieldName}>{props.fieldLabel}</label>
    </div>
    )
}