import { Engine, EngineConst } from "../../engine/Engine";
import { Game } from "../Game";

export function story_load_scene_plane(): void{
    Engine.LoadScene("test_plane");
    let handle = Engine.BindEvent(EngineConst.SceneOnStart, function (data): void{
        if (data.name == "test_plane"){
            Engine.UnbindEvent(EngineConst.SceneOnStart, handle);
            Game.Init();
        }
    });
}

