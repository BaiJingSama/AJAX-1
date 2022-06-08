console.log('我是2.js');

let object
try {
    object = JSON.parse(`{'name':'jackey'}`)
} catch (error) {
    console.log('出错了，错误详情是')
    console.log(error);
    object = {
        'name': 'no name'
    }
}

// try catch 捕获错误
console.log(object);