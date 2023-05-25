import React, { SetStateAction } from "react";

export interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
	username: string;
	setUsername: React.Dispatch<SetStateAction<string>>;
}

export type AuthProviderProps = {
	children: React.ReactNode;
};
