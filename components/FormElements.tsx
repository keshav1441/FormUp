import React from "react"
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";
import { SubTitleFieldFormElement } from "./fields/SubTitleField";
import { ParagraphFieldFormElement } from "./fields/ParagraphField";
import { SeparatorFieldFormElement } from "./fields/SeparatorField";
import { SpaceFieldFormElement } from "./fields/SpaceField";

export type ElementsType = "TextField" | "SpaceField" | "TitleField" | "SubTitleField" | "ParagraphField" | "SeparatorField";
export type SubmitFunction = (key: string, value: string) => void

export type FormElement = {
    type: ElementsType

    construct: (id: string) => FormElementInstance

    designerBtnElement: {
        icon: React.ElementType
        label: string
    }
    designerComponent: React.FC<{
        elementInstance: FormElementInstance
    }>
    formComponent: React.FC<
        {
            elementInstance: FormElementInstance
            submitValue?: SubmitFunction
            isInvalid?: boolean
            defaultValue?: string
        }
        >
        propertiesComponent: React.FC<{
            elementInstance: FormElementInstance
        }>
        validate: (formElement: FormElementInstance, current: string) => boolean;
}

export type FormElementInstance = {
    id: string,
    type: ElementsType,
    extraAttributes?: {
        label?: string;
        helperText?: string;
        required?: boolean;
        placeHolder?: string;
    };
}

type FromElementsType = {
    [key in ElementsType]: FormElement
}

export const FormElements: FromElementsType = {
    TextField: TextFieldFormElement,
    TitleField: TitleFieldFormElement,
    SubTitleField: SubTitleFieldFormElement,
    ParagraphField: ParagraphFieldFormElement,
    SeparatorField: SeparatorFieldFormElement,
    SpaceField: SpaceFieldFormElement,
    
}