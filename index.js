/**
* Log to the console with style
* @param obj caller (this)
* @param argObj arguments
* @param style style to apply
* @param level level of the console log
*/
function apply(obj, argObj, style, level) {
    var args = Array.prototype.slice.call(argObj);
	if (style.prefix) {
        let prefix = style.prefix.repeat(level) + style.icon
        args.unshift(prefix)
    }
	if (style.suffix) args.push(style.suffix);
	console.log.apply(obj, 
		args.map((v, k) => k === 0 ? v : colorize(style.color, v)
	));
}

/**
 * Unicode colors map
 */
const colors = {
    black: {
        light: 90,
        dark: 30
    },
    red: {
        light: 91,
        dark: 31
    },
    green: {
        light: 92,
        dark: 32
    },
    yellow: {
        light: 93,
        dark: 33
    },
    blue: {
        light: 94,
        dark: 34
    },
    purple: {
        light: 95,
        dark: 35
    },
    cyan: {
        light: 96,
        dark: 36
    },
}
/**
 * 
 * @param type Unicode color
 * @param str string to apply the color to
 */
var colorize = function(type, str) {
  return '\u001b[' + type + 'm' + str + '\u001b[0m';
}

/**
 * styles map
 * sets the text color, prefix, icon, suffix for each console output type
 */
var styles = {
	log: {
		color: colors.black.light,
		prefix: '  ',
        icon: colorize(colors.black.light, '-'),
		suffix: null,
    },
    info: {
        color: colors.blue.dark,
        prefix: '  ',
        icon: colorize(colors.blue.light, '➤'),
        suffix: null,
    },
	pending: {
		color: colors.cyan.dark,
		prefix: '  ',
        icon: colorize(colors.cyan.light, '⧗'),
		suffix: null,
	},
	warning: {
		color: colors.yellow.dark,
		prefix: '  ',
        icon: colorize(colors.yellow.light,'⚠'),
		suffix: null,
	},
	success: {
		color: colors.green.dark,
		prefix: '  ',
        icon: colorize(colors.green.light, '✔'),
		suffix: null,
	},
	error: {
		color: colors.red.dark,
		prefix: '  ',
        icon: colorize(colors.red.light, '✖'),
		suffix: null,
	},
};

/**
 * Logger class
 */
class Logger {
    constructor(level=2) {
        this.level=level
        return this
    }
    
    /**
     * Specifies the depth of the console log line
     */
    static level(n) {
        return new Logger(n)
    }
    
    //#region log
    log() {
        apply(this, arguments, styles.log, this.level)
    }
    static log() {
        return new Logger().log(...arguments)
    }
    //#endregion
    
    //#region info
    info() {
        apply(this, arguments, styles.info, this.level)
    }
    static info() {
        return new Logger().info(...arguments)
    }
    //#endregion

    //#region pending
    pending() {
        apply(this, arguments, styles.pending, this.level)
    }
    static pending() {
        return new Logger().pending(...arguments)
    }
    //#endregion

    //#region success
    success() {
        apply(this, arguments, styles.success, this.level)
    }
    static success() {
        return new Logger().success(...arguments)
    }
    //#endregion

    //#region warn
    warn() {
        apply(this, arguments, styles.warning, this.level)
    }
    static warn() {
        return new Logger().warn(...arguments)
    }
    warning() {
        apply(this, arguments, styles.warning, this.level)
    }
    static warning() {
        return new Logger().warning(...arguments)
    }
    //#endregion

    //#region error
    error() {
        apply(this, arguments, styles.error, this.level)
    }
    static error() {
        return new Logger().error(...arguments)
    }
    //#endregion
}

module.exports = Logger