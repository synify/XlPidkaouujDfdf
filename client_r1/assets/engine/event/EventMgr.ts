
export default class EventMgr {
    event_listener: {};
    event_mgr_uuid: number;
    Init() {
        this.event_mgr_uuid = 0;
        this.event_listener = {};
    }
    GenUUID(): number {
        return ++ this.event_mgr_uuid;
    }
    Emit(event: any, data: any): void {
        let listener = this.event_listener[event];
        if(!listener) return;
        for (let i in listener) {
            listener[i](data);
        }
    }

    BindEvent(event: any, callback: Function): number {
        let listener = this.event_listener[event];
        if(!listener) {
            listener = {};
            this.event_listener[event] = listener;
        }
        let uuid = this.GenUUID();
        listener[uuid] = callback;
        return uuid;
    }

    UnbindEvent(event: any, uuid: number): void {
        let listener = this.event_listener[event];
        if(listener && listener[uuid]) {
            delete listener[uuid];
        }
    }
    Clear(): void {
        this.event_mgr_uuid = 0;
        this.event_listener = null;
    }
}
