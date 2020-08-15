
export class LogMgr {
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
    // log(message?: any, ...optionalParams: any[]): void;
    // info(message?: any, ...optionalParams: any[]): void;
    // debug(message?: any, ...optionalParams: any[]): void;
    // warn(message?: any, ...optionalParams: any[]): void;
    // error(message?: any, ...optionalParams: any[]): void;
}


export enum LogLevel
{
    Info = 0,
    Debug = 1,
    Warn = 2,
    Error = 3,
}