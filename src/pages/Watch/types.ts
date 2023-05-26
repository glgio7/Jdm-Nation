export interface IVideoItem {
	id: string;
	snippet: {
		thumbnails: {
			medium: {
				url: string;
			};
		};
		title: string;
		resourceId: {
			videoId: string;
		};
	};
}
