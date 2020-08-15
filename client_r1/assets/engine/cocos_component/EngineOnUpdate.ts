
import { Engine, CCAPI } from "../Engine";

@CCAPI.ccclass('EngineOnUpdate')
export class EngineOnUpdate extends CCAPI.Component {
    update (deltaTime: number) {
        Engine.OnUpdate(deltaTime);
    }
}

