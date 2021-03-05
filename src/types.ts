export interface IOptions {
	token: string;
	/**
	 * @defaultValue `{User-Agent: "api-devup@${Core.version}"}`
	 */
	apiHeaders: Record<string, string>;
	apiBaseUrl: string;
}

export type API_Response<MethodResponse> = Promise<{
	response: MethodResponse;
}>;