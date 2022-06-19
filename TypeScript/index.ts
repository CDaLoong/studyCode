
// 装饰器工厂，返回结果是一个装饰器
// function test() {
//     return function (target: new (...args: any[]) => object) {
//         console(target)
//     }
// }
//
// @test()
// class A {}

// type constructor = new (...args: any[]) => object

// function test1() {
//     console.log('test1')
//     return function (target: constructor) {
//         console.log('装饰器test1')
//     }
// }
//
// function test2() {
//     console.log('test2')
//     return function (target: constructor) {
//         console.log('装饰器test2')
//     }
// }
//
// @test1()
// @test2()
// class A {}


// function test(target: any, key: string) {
//     console.log(target, key)
// }
//
// class A {
//     @test
//     prop1: string
//
//     @test
//     prop2: string
//
//     @test
//     static prop3: string
//
//     constructor() {
//         this.prop1 = '1'
//         this.prop2 = '2'
//     }
// }
//
// const a = new A()
// console.log(a)



// function test(target: any, key: string, descriptor: PropertyDescriptor) {
//     // console.log(target, key, descriptor)
//     // descriptor.enumerable = false
//     if (key === 'method3') {
//         descriptor.value = function () {
//             console.warn(key + '方法已过期')
//         }
//     }
// }
// class A {
//     @test
//     method1() {
//         console.log('method1')
//     }
//
//     @test
//     method2() {
//         console.log('method2')
//     }
//
//     @test
//     method3() {
//         console.log('method3')
//     }
// }
//
// const a = new A()
// a.method1()
// a.method2()
// a.method3()
// for (let prop in a) {
//     console.log(prop)
// }


// class MyMath {
//     sum(a: number, @test b: number) {
//         return a + b
//     }
// }
//
// function test(target: any, method: string, index: number) {
//     console.log(target, method, index)
// }
//
// const my_math = new MyMath()
// console.log(my_math.sum(2,3))


type G = '男' | '女'

const a:G = '男'

// const b: typeof a = '女'

console.log(typeof a)
