# Fun with Decorators

## Decorators in TypeScript
- Stage 3 proposal for ECMAScript => Probable native in JavaScript soon™
- Support in TypeScript since TypeScript 5.0
- Support for Metadata added in 5.2

## Types of Decorators
- Class method decorators
- Class decorators
- Class getter/setter decorators
- Class field decorators
- Class auto-accessor decorators

## Interfaces
```
type ClassMethodDecorator = (
  value: Function,
  context: {
    kind: 'method';
    name: string | symbol;
    metadata: object;
    static: boolean;
    private: boolean;
    access: { get: () => unknown };
    addInitializer(initializer: () => void): void;
  }
) => Function | void;
```
```
type ClassDecorator = (
  value: Function,
  context: {
    kind: 'class';
    name: string | undefined;
    metadata: object;
    addInitializer(initializer: () => void): void;
  }
) => Function | void;
```

## Examples
See other files

## Further ideas
- Serialization
- Event driven communication
- Express controller
- Runtime validation of fields
- Permission system
- Retry/Circuit breaker
