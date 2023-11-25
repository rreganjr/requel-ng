export class Feature {
    id: string
    name: string
    description: string

    constructor(id: string|undefined, name: string|undefined, description: string|undefined) {
        this.id = id ?? 'feature-new'
        this.name = name ?? ''
        this.description = description ?? ''
    }

    public static fromRaw(rawData:Partial<Feature>): Feature {
        return new Feature(rawData.id, rawData.name, rawData.description)
    }

    public static fromRawArray(rawData:Partial<Feature>[]): Feature[] {
        return rawData.map<Feature>((rawMember:Partial<Feature>):Feature => {
            return Feature.fromRaw(rawMember)
        })
    }
}
