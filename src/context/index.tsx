import * as React from 'react';

export interface HttpClientContextType {
  [name: string]: any
}

export interface HttpClientContextProps {
  children?: React.ReactNode;
}


export const HttpClientContext = React.createContext<HttpClientContextType | null>(null);

export function HttpClientContextProvider() {}

export function useHttpClient() {
  
}
