import { Engine, CCAPI } from "../Engine";

@CCAPI.ccclass('EngineOnStart')
export class EngineOnStart extends CCAPI.Component {
    start () {
        Engine.OnStart();
    }
}
