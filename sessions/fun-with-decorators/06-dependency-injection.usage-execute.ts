import { combineGreetings, ConsumingClass } from './06-dependency-injection.usage'
import { inject } from './06-dependency-injection'

console.log(combineGreetings())

let consumer = inject(ConsumingClass)
consumer.sayHi()