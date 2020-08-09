import Engine from "../Engine";

export default class InputMgr {
    Init(): void {
        Engine.CCAPI.BindSystemEvent(Engine.CCAPI.SystemEventType.KEY_DOWN, this.onKeyDown);
        Engine.CCAPI.BindSystemEvent(Engine.CCAPI.SystemEventType.KEY_UP, this.onKeyUp);
    }
    Uninit(): void {
        Engine.CCAPI.UnbindSystemEvent(Engine.CCAPI.SystemEventType.KEY_DOWN, this.onKeyDown);
        Engine.CCAPI.UnbindSystemEvent(Engine.CCAPI.SystemEventType.KEY_UP, this.onKeyUp);
    }
    onKeyDown(event): void {
        Engine.EmitEvent(Engine.Const.KeyDown, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('Press a key');
        //         break;
        // }
    }

    onKeyUp(event): void {
        Engine.EmitEvent(Engine.Const.KeyUp, {keyCode:event.keyCode});
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         console.log('release a key');
        //         break;
        // }
    }
}
