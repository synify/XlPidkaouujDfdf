import { Engine, EngineConst } from "../../engine/Engine";

export function load_scene_snake(): void{
    Engine.LoadScene("snake");
    let handle = Engine.BindEvent(EngineConst.SceneOnStart, function (data): void{
        if (data.name == "snake"){
            Engine.UnbindEvent(EngineConst.SceneOnStart, handle);
            // Game.Init();
        }
    });
}

