
export default class StoryMgr {
    storys: {};
    Init(): void {
        this.storys = {};
    }
    Get(name: string): Function {
        return this.storys[name];
    }
    Register(name: string, callback: Function): void {
        this.storys[name] = callback;
    }
    Unregister(name: string): void {
        delete this.storys[name]
    }
}
