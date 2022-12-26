
declare global {
    interface Console {
        everything: any[];
        defaultLog: any;
        defaultError: any;
        defaultWarn: any;
        defaultDebug: any;
    }
}

export default function patchConsole() {
    // TODO: fix me!!
    if (console.everything === undefined) {
        console.everything = [
            "there was a problem intercepting the console!"
        ];

        // console.defaultLog = console.log.bind(console);
        // console.log = function () {
        //     console.everything.push({ "type": "log", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
        //     console.defaultLog.apply(console, arguments);
        // }
        // console.defaultError = console.error.bind(console);
        // console.error = function () {
        //     console.everything.push({ "type": "error", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
        //     console.defaultError.apply(console, arguments);
        // }
        // console.defaultWarn = console.warn.bind(console);
        // console.warn = function () {
        //     console.everything.push({ "type": "warn", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
        //     console.defaultWarn.apply(console, arguments);
        // }
        // console.defaultDebug = console.debug.bind(console);
        // console.debug = function () {
        //     console.everything.push({ "type": "debug", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
        //     console.defaultDebug.apply(console, arguments);
        // }
    }
}