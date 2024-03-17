import FormService, { IFormServiceProps } from './Form.service';
import React, { FC, ReactNode, useContext } from 'react';
import FormContext from './Form.context'

export const FormProvider: FC<IFormServiceProps> = ({children, ...props}: { children?: ReactNode } & IFormServiceProps) => {
	const service = FormService(props);
	return <FormContext.Provider value={service}>{children}</FormContext.Provider>
}

export const useForm = (): ReturnType<typeof FormService> => useContext(FormContext) as ReturnType<typeof FormService>;
export type { IFormServiceProps };