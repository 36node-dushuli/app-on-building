/**
 * init dotenv
 *
 * .env: Default.
 * .env.local: Local overrides. This file is loaded for all environments except test.
 * .env.development, .env.test, .env.production: Environment-specific settings.
 * .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.
 *
 * Available settings from baseimage
 *
 * APP_PORT=9527
 * APP_BASE_PATH=/v1
 * APP_JWT_PUBLIC_KEY=`a public key string`
 */

/**
 *
 * @param {string} name envrionment name
 * @param {string} init default value
 * @returns {string} value
 */
function env(name, init) {
  const key = `REACT_APP_${name.toUpperCase()}`;
  const buildtimeValue = process?.env?.[key];

  const runtimeValue = window?._runtime_?.[key]; // eslint-disable-line
  const value = runtimeValue || buildtimeValue || init;

  return value;
}

/**
 * chore
 */
export const ECHO = env("ECHO", "true").toLocaleLowerCase() === "true";
export const VERSION = env("VERSION", "0.0");
export const BUILD = env("BUILD", "20210712-000000");
export const COPYRIGHT = env("COPYRIGHT", "36node 出品");
export const BEIAN = env("BEIAN", "京ICP备09053658号 ");
export const XUKEZHENG = env("XUKEZHENG", "经营许可证编号:京ICP证080192号");

/**
 * app
 */
export const TITLE = env("TITLE", "xxxx网站");
export const SCOPE = env("SCOPE", "lecha_uat");
