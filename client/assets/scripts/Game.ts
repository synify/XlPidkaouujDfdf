import Engine from "./engine/Engine";
import Vector2 from "./engine/util/Vector2";
import EngineConst from "./engine/EngineConst";

export default class Game {
    static player: cc.Node;
    static player_pos: cc.Vec2;
    static key_down_handle: number;
    static key_up_handle: number;
    static key_code_map: {};
    static input_dir: Vector2;
    static player_speed: number = 500;
    static Init(): void {
        Engine.AddUpdate(Game.Update);
        Game.key_down_handle = Engine.EventMgr.BindEvent(EngineConst.KeyDown, KeyDown);
        Game.key_up_handle = Engine.EventMgr.BindEvent(EngineConst.KeyUp, KeyUp);
        Game.key_code_map = {};
        Game.input_dir = Vector2.Zero();
        Game.player = cc.find("Canvas/player");
        Game.player_pos = Game.player.getPosition();
    }
    static Update(dt: number): void {
        Game.player_pos = Game.player_pos.add(new cc.Vec2(
            Game.input_dir.X() * dt * Game.player_speed, 
            Game.input_dir.Y() * dt * Game.player_speed)
            )
        Game.player.setPosition(Game.player_pos);
    }
}

function KeyDown(data): void {
    switch(data.keyCode){
        case cc.macro.KEY.w:
        case cc.macro.KEY.s:
        case cc.macro.KEY.a:
        case cc.macro.KEY.d:
            Game.key_code_map[data.keyCode] = true;
            UpdateInput()
            break;
    }
}

function KeyUp(data): void {
    switch(data.keyCode){
        case cc.macro.KEY.w:
        case cc.macro.KEY.s:
        case cc.macro.KEY.a:
        case cc.macro.KEY.d:
            Game.key_code_map[data.keyCode] = false;
            UpdateInput()
            break;
    }
}

function UpdateInput(): void {
    Game.input_dir = Vector2.Zero();
    if (Game.key_code_map[cc.macro.KEY.w]){
        Game.input_dir = Game.input_dir.Add(Vector2.Forward());
    }
    if (Game.key_code_map[cc.macro.KEY.s]){
        Game.input_dir = Game.input_dir.Add(Vector2.Back());
    }
    if (Game.key_code_map[cc.macro.KEY.a]){
        Game.input_dir = Game.input_dir.Add(Vector2.Left());
    }
    if (Game.key_code_map[cc.macro.KEY.d]){
        Game.input_dir = Game.input_dir.Add(Vector2.Right());
    }
    Game.input_dir.Normalize();
}


