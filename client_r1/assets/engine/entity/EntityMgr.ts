
export default class EntityMgr {
    entities: {};
    entity_mgr_uuid: number;
    Init(): void {
        this.entities = {}
        this.entity_mgr_uuid = 0;
    }
    GenUUID(): number {
        return ++ this.entity_mgr_uuid;
    }
    CreateEntity(): {} {
        let entity = {}
        let uuid = this.GenUUID();
        entity["uuid"] = uuid;
        this.entities[uuid] = entity;
        return entity
    }
    RemoveEntity(uuid: number): void {
        delete this.entities[uuid]
    }
    GetEntity(uuid: number): {} {
        return this.entities[uuid];
    }

}
