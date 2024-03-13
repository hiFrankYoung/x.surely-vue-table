import { setLicenseKey } from '@surely-vue/table';
import { MD5 as md5 } from 'crypto-js';
import { encode as encodeBase64 } from 'js-base64';

/**
 * 破解 \@surely-vue/table 授权。
 * @param {String} [hostname] 网站域名（默认值：`location.hostname`）。
 */
export const hackLicenseKey = (hostname?: string) => {
    const SURELY_LICENSE_KEY = encodeBase64(`ORDER:00001,EXPIRY=33227712000000,DOMAIN=${hostname || location.hostname},KEYVERSION=1`);
    const SURELY_LICENSE_SIGN = md5(SURELY_LICENSE_KEY).toString().toLowerCase();
    setLicenseKey(`${SURELY_LICENSE_SIGN}${SURELY_LICENSE_KEY}`);
}