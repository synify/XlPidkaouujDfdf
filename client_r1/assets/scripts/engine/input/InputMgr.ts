import Engine from "../Engine";
import EngineConst from "../EngineConst";
import { systemEvent as ccSystemEvent, SystemEventType as ccSystemEventType } from "cc";

export default class InputMgr {
    Init(): void {
        ccSystemEvent.on(ccSystemEventType.KEY_DOWN, this.onKeyDown);
        ccSystemEvent.on(ccSystemEventType.KEY_UP, this.onKeyUp);
    }
    Uninit(): void {
        ccSystemEvent.off(ccSystemEventType.KEY_DOWN, this.onKeyDown);
        ccSystemEvent.off(ccSystemEventType.KEY_UP, this.onKeyUp);
    }
    onKeyDown(event): void {
        Engine.EventMgr.Emit(EngineConst.KeyDown, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('Press a key');
        //         break;
        // }
    }

    onKeyUp(event): void {
        Engine.EventMgr.Emit(EngineConst.KeyUp, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('release a key');
        //         break;
        // }
    }
}
