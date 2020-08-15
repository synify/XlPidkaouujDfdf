import { Engine, CCAPI } from "../Engine";

export class CocosSetting {
    Init(): void {
        this.SetDisplayStats(false);
    }
    // 设置左下角隐藏
    SetDisplayStats(sw: boolean): void {
        CCAPI.SetDisplayStats(sw);
    }
    IsDisplayStats(): boolean {
        return CCAPI.IsDisplayStats();
    }
}
