import { setDisplayStats as ccSetDisplayStats, isDisplayStats as ccIsDisplayStats } from "cc";

export default class CocosSetting {
    Init(): void {
        this.SetDisplayStats(false);
    }
    // 设置左下角隐藏
    SetDisplayStats(sw: boolean): void {
        ccSetDisplayStats(sw);
    }
    IsDisplayStats(): boolean {
        return ccIsDisplayStats();
    }
}
