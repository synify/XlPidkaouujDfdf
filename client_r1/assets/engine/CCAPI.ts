///////////////////////////////////////////////////////////////////////////////////////////////////////
// cocos creator 3D
import { 
    // class
    Node,
    Component,
    Vec2,
    Vec3,
    Vec4,
    // function
    find,
    isDisplayStats,
    setDisplayStats,
    // var
    game,
    director,
    systemEvent,
    macro,
    // enum
    SystemEventType,
    // namespace
    _decorator,
} from 'cc';

export {
    // class
    Node, // cocos的基本单位，一个空节点
    Component,  // 继承cocos的component组件，多了load，start，update接口
    Vec2,
    Vec3,
    Vec4,
    // function
    find,
    isDisplayStats as IsDisplayStats,
    setDisplayStats as SetDisplayStats, // 开启或关闭游戏下方默认显示的FPS等数据
    // var
    // ccclass,
    game,
    director,
    systemEvent,
    macro,
    // enum
    SystemEventType,
    // namespace
    _decorator,
 };

export function FindNode(path) { // 通过路径找寻节点，比如find("Canvas/Player");
    return cc.find(path);
}
export function DontDestroyNode(node): void { // 设置节点不销毁
    cc.game.addPersistRootNode(node);
}
export function LoadScene(name): boolean { // 加载场景
    return director.loadScene(name);
}
export function BindSystemEvent(event, callback): any{ // 绑定系统事件
    return systemEvent.on(event, callback);
}
export function UnbindSystemEvent(event, callback): any{ // 解除绑定系统事件
    return systemEvent.off(event, callback);
}
export var ccclass = _decorator.ccclass; // 用于装饰类，让这个类能显示在cocos的自定义组件里面
