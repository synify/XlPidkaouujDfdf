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

export default class CCAPI {
    // class
    static Node = Node; // cocos的基本单位，一个空节点
    static Component = Component; // 继承cocos的component组件，多了load，start，update接口
    static Vec2 = Vec2;
    static Vec3 = Vec3;
    static Vec4 = Vec4;
    // function
    static FindNode(path, referenceNode?) { // 通过路径找寻节点，比如find("Canvas/Player");
        return find(path, referenceNode);
    }
    static IsDisplayStats = isDisplayStats;
    static SetDisplayStats = setDisplayStats; // 开启或关闭游戏下方默认显示的FPS等数据
    static DontDestroyNode(node): void { // 设置节点不销毁
        game.addPersistRootNode(node);
    }
    static LoadScene(name): boolean { // 加载场景
        return director.loadScene(name);
    }
    static BindSystemEvent(event, callback): any{ // 绑定系统事件
        return systemEvent.on(event, callback);
    }
    static UnbindSystemEvent(event, callback): any{ // 解除绑定系统事件
        return systemEvent.off(event, callback);
    }
    // var
    static ccclass = _decorator.ccclass; // 用于装饰类，让这个类能显示在cocos的自定义组件里面
    static game = game;
    static director = director;
    static systemEvent = systemEvent;
    static macro = macro;
    // enum
    static SystemEventType = SystemEventType;
    // namespace
    static _decorator = _decorator;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
