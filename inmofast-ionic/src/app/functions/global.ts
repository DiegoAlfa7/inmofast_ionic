

/**
 *
 *
 * @param {*} obj Cualquier objeto delque se quiera loggear recursivamoente sus campos
 */
export function parseObject(obj) {
    for (const key in obj) {
        console.log("key: " + key + ", value: " + obj[key]);
        if (obj[key] instanceof Object) {
            parseObject(obj[key]);
        }
    }
}