

export type CategoryGroup = 'Function'|'Quality'|'Constraint'

export class GoalCategory {
    static readonly DEFAULT_CATEGORY = new GoalCategory('Function', '')
    categoryGroup: CategoryGroup
    categoryName: string

    constructor(categoryGroup:CategoryGroup|undefined, categoryName: string|undefined) {
        this.categoryGroup = categoryGroup ?? 'Function'
        this.categoryName = categoryName ?? ''
    }

    public get label (): string {
        return `${this.categoryGroup}: ${this.categoryName}`
    }

    public static fromRaw(rawData:Partial<GoalCategory>): GoalCategory {
        return new GoalCategory(rawData.categoryGroup, rawData.categoryName)
    }

    public static fromRawArray(rawData:Partial<GoalCategory>[]): GoalCategory[] {
        return rawData.map<GoalCategory>((rawMember:Partial<GoalCategory>):GoalCategory => {
            return GoalCategory.fromRaw(rawMember)
        })
    }

}

export class Goal {
    id: string
    goalCategory: GoalCategory
    text: string

    constructor(id: string|undefined, goalCategory:GoalCategory|undefined, text: string|undefined) {
        this.id = 'goal-new'
        this.goalCategory = goalCategory ?? GoalCategory.DEFAULT_CATEGORY
        this.text = text ?? ''
    }

    public static fromRaw(rawData:unknown): Goal {
        const _rawData: Partial<Goal> = (rawData as Partial<Goal>)
        return new Goal(_rawData.id, GoalCategory.fromRaw(_rawData.goalCategory as Partial<GoalCategory>), _rawData.text)
    }

    public static fromRawArray(rawData:unknown[]): Goal[] {
        return (rawData as Array<Partial<Goal>>).map<Goal>((rawMember:Partial<Goal>):Goal => {
            return Goal.fromRaw(rawMember)
        })
    }
}
