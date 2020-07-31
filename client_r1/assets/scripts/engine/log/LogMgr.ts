
export default class LogMgr {
    logs: {};

    Init(): void {
        this.logs = {};
        this.logs[LogLevel.Info] = new Array<string>();
        this.logs[LogLevel.Debug] = new Array<string>();
        this.logs[LogLevel.Warn] = new Array<string>();
        this.logs[LogLevel.Error] = new Array<string>();
    }

    Log(lv: LogLevel, info: string): void {
        this.logs[lv].push(info);
        console.log(info);
        //cc.log(info);
    }
    LogInfo(info: string): void {
        this.Log(LogLevel.Info, info);
    }
    LogDebug(info: string): void {
        this.Log(LogLevel.Debug, info);
    }
    LogWarn(info: string): void {
        this.Log(LogLevel.Warn, info);
    }
    LogError(info: string): void {
        this.Log(LogLevel.Error, info);
    }
}


export enum LogLevel
{
    Info = 0,
    Debug = 1,
    Warn = 2,
    Error = 3,
}