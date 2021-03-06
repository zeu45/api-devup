const MODULE_VERSION = "1.3.4";
const DEFAULT_API_URL = "https://api.dev-up.ru/method/";

type RequestParam = { key: string; value: number | string | boolean };

/**
 * Основной класс ошибок которые могут произойти в модуле
 * @hideconstructor
 */
class DevUpError extends Error {
	/**
	 * Код ошибки
	 */
	public code: string | number;

	/**
	 * Параметры запроса
	 */
	public params: RequestParam[];

	/**
	 * Уровень критичности ошибки
	 */
	public level: string;

	/**
	 * Стэк ошибки
	 */
	public stack!: string;

	public constructor(
		{
			err_code: code,
			err_critical_lvl: level,
			err_msg: message,
		}: {
			err_code: number;
			err_critical_lvl: string;
			err_msg: string;
		},
		params: RequestParam[],
	) {
		super(message);

		this.code = code;
		this.level = level;
		this.params = params;

		this.name = this.constructor.name;
	}

	public get [Symbol.toStringTag](): string {
		return this.constructor.name;
	}

	/**
	 * Возвращает содержимое ошибки в JSON
	 */
	public toJSON(): Pick<this, keyof this> {
		const json = {} as Pick<this, keyof this>;

		for (const key of Object.getOwnPropertyNames(this)) {
			json[key as keyof this] = this[key as keyof this];
		}

		return json;
	}
}

export default {
	version: MODULE_VERSION,
	url: DEFAULT_API_URL,
	error: DevUpError,
};
