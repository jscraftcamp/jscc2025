function validate(option: { maxLength: number }) {
    return function (orig: (val: string) => void, context: ClassSetterDecoratorContext) {
        return (val: string) => {
            if (val.length > option.maxLength) {
                throw new Error('too long')
            }
            orig(val)
        }
    }
}

class Person {
    @validate({maxLength: 6})
    set name(val: any) {
        console.log(val)
    }
}

const person = new Person()
person.name = '1234567'