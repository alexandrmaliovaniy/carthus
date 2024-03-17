import AppService, { IAppServiceProps } from './App.service';
import React, { FC, ReactNode, useContext } from 'react';
import AppContext from './App.context'

export const AppProvider: FC<IAppServiceProps> = ({children, ...props}: { children?: ReactNode } & IAppServiceProps) => {
	const service = AppService(props);
	return <AppContext.Provider value={service}>{children}</AppContext.Provider>
}

export const useApp = (): ReturnType<typeof AppService> => useContext(AppContext) as ReturnType<typeof AppService>;
export type { IAppServiceProps };