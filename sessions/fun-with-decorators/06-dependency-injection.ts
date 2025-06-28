type Constructor<T = {}> = new (...args: any[]) => T;

const classConstructors: Map<any, Constructor<any>> = new Map<any, any>()

// Decorator factory
export function injectable(token?: string) {
    return <T, TBase extends Constructor<T>>(
        constructor: TBase,
        _context: ClassDecoratorContext
    ) => {
        classConstructors.set(token ?? constructor, constructor)
    }
}

export function inject<T>(token: Constructor<T> | string): T {
    const classConstructor = classConstructors.get(token)
    if (!classConstructor) {
        throw new Error('No constructor for this token found')
    }
    return new classConstructor() as T
}

// Decorator
export function injectionDecorator<T>(token: Constructor<T> | string) {
    return (
        _target: undefined,
        _context: ClassFieldDecoratorContext
    ) => () => inject(token)
}