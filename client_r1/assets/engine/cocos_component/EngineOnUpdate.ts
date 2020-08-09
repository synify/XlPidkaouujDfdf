
import Engine from "../Engine";

@Engine.CCAPI.ccclass('EngineOnUpdate')
export class EngineOnUpdate extends Engine.CCAPI.Component {
    update (deltaTime: number) {
        Engine.OnUpdate(deltaTime);
    }
}

