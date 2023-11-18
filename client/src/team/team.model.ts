
type ContactInfoType = 'phone'|'email'

class ContactInfo {
    type: ContactInfoType = 'email'
    details: string|undefined
}

class Organization {
    name: string|undefined
}

class TeamMember {
    name: string|undefined
    role: string|undefined
    organization: Organization|undefined
    contactInfo: ContactInfo[] = []

    constructor(name:string|undefined, role: string|undefined, organization: Organization|undefined, contactInfo: ContactInfo[]|undefined) {
        this.name = name
        this.role = role
        this.organization = organization
        this.contactInfo = contactInfo ?? []
    }

    public static fromRaw(rawData:Partial<TeamMember>): TeamMember {
        return new TeamMember(rawData.name, rawData.role, rawData.organization, rawData.contactInfo)
    }

    public static fromRawArray(rawData:Partial<TeamMember>[]): TeamMember[] {
        return rawData.map<TeamMember>((rawMember:Partial<TeamMember>):TeamMember => {
            return TeamMember.fromRaw(rawMember)
        })
    }
}

class TeamStore {
    private data: TeamMember[] = TeamMember.fromRawArray([
        {name: 'Ron Regan', role: 'Project Lead', organization: {name: 'Ron Regan Consulting'}, contactInfo: [{type: 'email', details: undefined}]}
      ])

    public getTeam(projectId: string): TeamMember[] {
        return this.data
    }
}