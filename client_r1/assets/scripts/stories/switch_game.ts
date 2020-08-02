import Engine from "../engine/Engine";
import EngineConst from "../engine/EngineConst";
import { find as ccFind, SystemEventType as ccSystemEventType } from "cc";

export function switch_game(): void{
    Engine.LoadScene("switch_game");
    let handle = Engine.EventMgr.BindEvent(EngineConst.SceneOnStart, function (data): void{
        if (data.name == "switch_game"){
            Engine.EventMgr.UnbindEvent(EngineConst.SceneOnStart, handle);

            let Button_1 = ccFind("Canvas/Button_1");
            Button_1.on(ccSystemEventType.TOUCH_END, (event)=>{
                Engine.StoryMgr.Get("story_load_scene_plane")();
            })

            let Button_2 = ccFind("Canvas/Button_2");
            Button_2.on(ccSystemEventType.TOUCH_END, (event)=>{
                Engine.StoryMgr.Get("story_load_scene_plane")();
            })
        }
    });
}

