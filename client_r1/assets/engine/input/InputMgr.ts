import { Engine, CCAPI, Const } from "../Engine";

export class InputMgr {
    Init(): void {
        CCAPI.BindSystemEvent(CCAPI.SystemEventType.KEY_DOWN, this.onKeyDown);
        CCAPI.BindSystemEvent(CCAPI.SystemEventType.KEY_UP, this.onKeyUp);
    }
    Uninit(): void {
        CCAPI.UnbindSystemEvent(CCAPI.SystemEventType.KEY_DOWN, this.onKeyDown);
        CCAPI.UnbindSystemEvent(CCAPI.SystemEventType.KEY_UP, this.onKeyUp);
    }
    onKeyDown(event): void {
        Engine.EmitEvent(Const.KeyDown, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('Press a key');
        //         break;
        // }
    }

    onKeyUp(event): void {
        Engine.EmitEvent(Const.KeyUp, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('release a key');
        //         break;
        // }
    }
}
