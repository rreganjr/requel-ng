
class ProjectType {
    static readonly DEFAULT:ProjectType = {name: "Default"}

    name: string|undefined
}

class Project {
    id: string|undefined
    type: ProjectType|undefined
    name: string|undefined
    vision: string|undefined

    constructor(id: string|undefined, type: ProjectType|undefined, name: string|undefined, vision: string|undefined) {
        this.id = id
        this.type = type
        this.name = name
        this.vision = vision
    }

    public static fromRaw(rawData:Partial<Project>): Project {
        return new Project(rawData.id, rawData.type, rawData.name, rawData.vision)
    }

    public static fromRawArray(rawData:Partial<Project>[]): Project[] {
        return rawData.map<Project>((rawMember:Partial<Project>):Project => {
            return Project.fromRaw(rawMember)
        })
    }
}

class ProjectStore {
    private data: Project[] = Project.fromRawArray([
        {id: '1', type: ProjectType.DEFAULT, name: 'Sample Project', vision: 'new Requel design'}
    ])

    public getProject(projectId: string): Project {
        return this.data.filter((project:Project):boolean => {
            return project.id === projectId
        })[0]
    }    
}