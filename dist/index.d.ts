// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../gremlin

import { driver } from "gremlin";
import { GraphSchema } from "janusgraphmanager/types/GraphSchema";
declare type ManagerState = "NEW" | "READY" | "ERROR" | "CLOSED";
export declare type JanusGraphMangerOptions = {
    graphName?: string;
    useConfiguredGraphFactory?: boolean;
    configPath?: string;
};
export declare class JanusGraphManager {
    constructor(client: driver.Client, options: JanusGraphMangerOptions);
    init(): Promise<ManagerState>;
    createIndices(schema: GraphSchema, commit?: boolean): Promise<number>;
    enableIndices(schema: GraphSchema, commit?: boolean): Promise<number>;
    createSchema(schema: GraphSchema, indices?: boolean): Promise<number>;
    commit(message?: string): Promise<unknown>;
    close(): Promise<void>;
}
export {};

declare module 'janusgraphmanager/types/GraphSchema' {
    import { Edge } from "janusgraphmanager/types/Edge";
    import { Vertex } from "janusgraphmanager/types/Vertex";
    import { GraphIndex } from "janusgraphmanager/types/GraphIndex";
    import { VertexCentricIndex } from "janusgraphmanager/types/VertexCentricIndex";
    export type GraphSchema = {
        name: string;
        vertices: Vertex[];
        edges: Edge[];
        graphIndices: GraphIndex[];
        vcIndices: VertexCentricIndex[];
    };
}

declare module 'janusgraphmanager/types/Edge' {
    import { Property } from "janusgraphmanager/types/Property";
    export type Edge = {
        label: string;
        multiplicity: EdgeMultiplicity;
        properties: Property[];
    };
    export type EdgeMultiplicity = "MULTI" | "SIMPLE" | "MANY2ONE" | "ONE2MANY" | "ONE2ONE";
}

declare module 'janusgraphmanager/types/Vertex' {
    import { Property } from "janusgraphmanager/types/Property";
    export type Vertex = {
        label: string;
        properties: Property[];
    };
}

declare module 'janusgraphmanager/types/GraphIndex' {
    export type GraphIndex = {
        name: string;
        keys: IndexKey[];
        type: CompositeOrMixedIndexType;
        unique?: boolean;
        label?: string;
    };
    export type IndexKey = {
        field: string;
        mapping: IndexKeyMapping;
    };
    export type IndexKeyMapping = "STRING" | "TEXT" | "TEXTSTRING" | "PREFIX_TREE";
    export type CompositeOrMixedIndexType = "Composite" | "Mixed";
    export type VertexCentricIndexType = "VertexCentric";
    export type IndexType = CompositeOrMixedIndexType | VertexCentricIndexType;
}

declare module 'janusgraphmanager/types/VertexCentricIndex' {
    export type VertexCentricIndex = {
        name: string;
        keys: Set<string>;
        direction: Direction;
        order: Order;
        edgelabel: string;
    };
    export type Direction = "IN" | "OUT" | "BOTH";
    export type Order = "desc" | "asc";
}

declare module 'janusgraphmanager/types/Property' {
    export type Property = {
        key: string;
        datatype: PropertyType;
        cardinality: PropertyCardinality;
    };
    export type PropertyType = "String" | "Character" | "Boolean" | "Byte" | "Short" | "Integer" | "Long" | "Float" | "Double" | "Date" | "Geoshape" | "UUID";
    export type PropertyCardinality = "SINGLE" | "SET" | "LIST";
}

