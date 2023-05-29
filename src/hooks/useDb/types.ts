import React, { ChangeEvent, SetStateAction } from "react";

export type UploadImageProps = {
	e: ChangeEvent<HTMLInputElement>;
	setImageUrl: React.Dispatch<SetStateAction<string>>;
	setError: React.Dispatch<SetStateAction<string>>;
};
