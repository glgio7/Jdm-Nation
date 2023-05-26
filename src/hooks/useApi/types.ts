import React, { SetStateAction } from "react";

export type SignInProps = {
	email: string;
	password: string;
	setLoading: React.Dispatch<SetStateAction<boolean>>;
};
