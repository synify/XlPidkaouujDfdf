import Engine from "../Engine";


export default class CocosSetting {
    Init(): void {
        this.SetDisplayStats(false);
    }
    // 设置左下角隐藏
    SetDisplayStats(sw: boolean): void {
        Engine.CCAPI.SetDisplayStats(sw);
    }
    IsDisplayStats(): boolean {
        return Engine.CCAPI.IsDisplayStats();
    }
}
