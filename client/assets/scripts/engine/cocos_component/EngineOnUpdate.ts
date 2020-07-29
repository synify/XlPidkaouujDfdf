import Engine from "../Engine";

const {ccclass} = cc._decorator;

@ccclass
export default class EngineOnUpdate extends cc.Component {
    update (dt) {
        Engine.OnUpdate(dt);
    }
}
