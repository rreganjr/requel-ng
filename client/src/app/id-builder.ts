
export function makeGroupId(...args: string[]): string {
    return args.join('__')
}