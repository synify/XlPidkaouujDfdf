import { Engine, CCAPI, EngineConst, Vector2 } from "../engine/Engine";

export class Game {
    static player = new CCAPI.Node();
    static player_pos: CCAPI.Vec3;
    static key_down_handle: number;
    static key_up_handle: number;
    static key_code_map: {};
    static input_dir;
    static player_speed: number = 5;
    static Init(): void {
        Engine.AddUpdate(Game.Update);
        Game.key_down_handle = Engine.BindEvent(EngineConst.KeyDown, KeyDown);
        Game.key_up_handle = Engine.BindEvent(EngineConst.KeyUp, KeyUp);
        Game.key_code_map = {};
        Game.input_dir = Vector2.Zero();
        Game.player = CCAPI.FindNode("player");
        Game.player_pos = Game.player.getPosition();
    }
    static Update(dt: number): void {
        Game.player_pos = Game.player_pos.add(new CCAPI.Vec3(
            Game.input_dir.X() * dt * Game.player_speed,
            0, 
            -Game.input_dir.Y() * dt * Game.player_speed)
            )
        Game.player.setPosition(Game.player_pos);
    }
}

function KeyDown(data): void {
    switch(data.keyCode){
        case CCAPI.macro.KEY.w:
        case CCAPI.macro.KEY.s:
        case CCAPI.macro.KEY.a:
        case CCAPI.macro.KEY.d:
            Game.key_code_map[data.keyCode] = true;
            UpdateInput()
            break;
    }
}

function KeyUp(data): void {
    switch(data.keyCode){
        case CCAPI.macro.KEY.w:
        case CCAPI.macro.KEY.s:
        case CCAPI.macro.KEY.a:
        case CCAPI.macro.KEY.d:
            Game.key_code_map[data.keyCode] = false;
            UpdateInput()
            break;
    }
}

function UpdateInput(): void {
    Game.input_dir = Vector2.Zero();
    if (Game.key_code_map[CCAPI.macro.KEY.w]){
        Game.input_dir = Game.input_dir.Add(Vector2.Up());
    }
    if (Game.key_code_map[CCAPI.macro.KEY.s]){
        Game.input_dir = Game.input_dir.Add(Vector2.Down());
    }
    if (Game.key_code_map[CCAPI.macro.KEY.a]){
        Game.input_dir = Game.input_dir.Add(Vector2.Left());
    }
    if (Game.key_code_map[CCAPI.macro.KEY.d]){
        Game.input_dir = Game.input_dir.Add(Vector2.Right());
    }
    Game.input_dir.Normalize();
}


