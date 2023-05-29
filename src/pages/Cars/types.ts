export interface ICar {
	id?: string;
	name: string;
	image_path: string;
	power?: string;
	vel_max?: string;
	zero_to_100?: string;
	modifiedBy?: string;
}

export interface ICarDetailed extends ICar {
	readonly: boolean;
}
