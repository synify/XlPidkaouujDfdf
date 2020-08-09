import Engine from "../Engine";

@Engine.CCAPI.ccclass('EngineOnStart')
export class EngineOnStart extends Engine.CCAPI.Component {
    start () {
        Engine.OnStart();
    }
}
