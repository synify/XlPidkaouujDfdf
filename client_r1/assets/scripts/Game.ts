import Engine from "../engine/Engine";

export default class Game {
    static player = new Engine.CCAPI.Node();
    static player_pos;
    static key_down_handle: number;
    static key_up_handle: number;
    static key_code_map: {};
    static input_dir;
    static player_speed: number = 5;
    static Init(): void {
        Engine.AddUpdate(Game.Update);
        Game.key_down_handle = Engine.BindEvent(Engine.Const.KeyDown, KeyDown);
        Game.key_up_handle = Engine.BindEvent(Engine.Const.KeyUp, KeyUp);
        Game.key_code_map = {};
        Game.input_dir = Engine.Vector2.Zero();
        Game.player = Engine.CCAPI.FindNode("player");
        Game.player_pos = Game.player.getPosition();
    }
    static Update(dt: number): void {
        Game.player_pos = Game.player_pos.add(new Engine.CCAPI.Vec3(
            Game.input_dir.X() * dt * Game.player_speed,
            0, 
            -Game.input_dir.Y() * dt * Game.player_speed)
            )
        Game.player.setPosition(Game.player_pos);
    }
}

function KeyDown(data): void {
    switch(data.keyCode){
        case Engine.CCAPI.macro.KEY.w:
        case Engine.CCAPI.macro.KEY.s:
        case Engine.CCAPI.macro.KEY.a:
        case Engine.CCAPI.macro.KEY.d:
            Game.key_code_map[data.keyCode] = true;
            UpdateInput()
            break;
    }
}

function KeyUp(data): void {
    switch(data.keyCode){
        case Engine.CCAPI.macro.KEY.w:
        case Engine.CCAPI.macro.KEY.s:
        case Engine.CCAPI.macro.KEY.a:
        case Engine.CCAPI.macro.KEY.d:
            Game.key_code_map[data.keyCode] = false;
            UpdateInput()
            break;
    }
}

function UpdateInput(): void {
    Game.input_dir = Engine.Vector2.Zero();
    if (Game.key_code_map[Engine.CCAPI.macro.KEY.w]){
        Game.input_dir = Game.input_dir.Add(Engine.Vector2.Up());
    }
    if (Game.key_code_map[Engine.CCAPI.macro.KEY.s]){
        Game.input_dir = Game.input_dir.Add(Engine.Vector2.Down());
    }
    if (Game.key_code_map[Engine.CCAPI.macro.KEY.a]){
        Game.input_dir = Game.input_dir.Add(Engine.Vector2.Left());
    }
    if (Game.key_code_map[Engine.CCAPI.macro.KEY.d]){
        Game.input_dir = Game.input_dir.Add(Engine.Vector2.Right());
    }
    Game.input_dir.Normalize();
}


