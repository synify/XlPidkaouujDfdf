import { Engine } from "../../engine/Engine";
import { story_test } from "./story_test";
import { story_load_scene_plane } from "./story_load_scene_plane";
import { switch_game } from "./switch_game";
import { load_scene_snake } from "./load_scene_snake";

export function Init(): void{
    Engine.RegisterStory("story_test", story_test);
    Engine.RegisterStory("switch_game", switch_game);
    Engine.RegisterStory("story_load_scene_plane", story_load_scene_plane);
    Engine.RegisterStory("load_scene_snake", load_scene_snake);
}