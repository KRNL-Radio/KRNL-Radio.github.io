export class Emitter {
    private _events: Record<string, Function[]> = {};
    debug_events: boolean = false;

    on(event: string, callback: Function) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event].push(callback);
        if (this.debug_events) {
            console.log(`[EVENTS] Bound ${event} to ${callback.name}`);
        }
    }

    emit(event: string, ...args: any[]) {
        if (this._events[event]) {
            this._events[event].forEach((callback) => callback(...args));
        }
        if (this.debug_events) {
            console.log(`[EVENTS] Emitted ${event} with args ${args}`);
        }
    }

    unbind(event: string, callback: Function) {
        if (this._events[event]) {
            this._events[event] = this._events[event].filter((cb) => cb !== callback);
        }
        if (this.debug_events) {
            console.log(`[EVENTS] Unbound ${event} from ${callback.name}`);
        }
    }
}
