import { setLicenseKey } from '@surely-vue/table';
import { MD5 as md5 } from 'crypto-js';
import { encode as encodeBase64 } from 'js-base64';

interface HackLicenseKeyOptions {
    hostname?: string;
}

/**
 * 破解 \@surely-vue/table 授权。
 * @param {HackLicenseKeyOptions} [options] 配置项。
 * @param {String} [options.hostname] 授权域名（默认值：`location.hostname`）。
 */
export const hackLicenseKey = (options?: HackLicenseKeyOptions) => {
    const domain = options?.hostname ?? location.hostname;
    const key = encodeBase64(`ORDER:00001,EXPIRY=33227712000000,DOMAIN=${domain},KEYVERSION=1`);
    const sign = md5(key).toString().toLowerCase();
    setLicenseKey(`${sign}${key}`);
};
