import React, { SetStateAction } from "react";

export interface IUser {
	displayName: string;
	email: string;
	photoURL?: string;
}

export interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
	user: IUser | null;
	setUser: React.Dispatch<SetStateAction<IUser | null>>;
}

export type AuthProviderProps = {
	children: React.ReactNode;
};
