
import Engine from "../Engine";

import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('EngineOnUpdate')
export class EngineOnUpdate extends Component {
    update (deltaTime: number) {
        Engine.OnUpdate(deltaTime);
    }
}

