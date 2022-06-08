let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            })
            n += 1;
        }
    }
    request.send()
}

getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response) //把符合json语法的字符串变成对象或其他东西
            console.log(object);
            myName.textContent = object.name
        }
    }
    request.send()
}

getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim() /*去掉空格和回车*/ );
        }
    }
    request.send()
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        console.log(request.response);

        const div = document.createElement('div') // 创建 div 标签
        div.innerHTML = request.response // 填写 div 内容
        document.body.appendChild(div) // 把标签插入到身体里面
    }
    request.onerror = () => {}
    request.send()
}

getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response);

        const script = document.createElement('script') // 创建 script 标签
        script.innerHTML = request.response // 填写 js 内容
        document.body.appendChild(script) // 把标签插入到身体里面
    }
    request.onerror = () => {}
    request.send()
}

getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        console.log(request.readyState);
        if (request.readyState === 4) { //下载完成了再做操作，因为没下载完做操作没有意义
            if (request.status >= 200 && request.status < 300) /* 以2开头的都表示成功 */ {
                const style = document.createElement('style') // 创建style 标签
                style.innerHTML = request.response // 填写 style 内容
                document.head.appendChild(style) // 把标签插入到头里面
            } else {
                alert('加载 CSS 失败')
            }

        }
    }
    request.send() // 发送请求 readyState = 2
}

// request.onerror = () => { }// 请求失败
// request.onload = () => { }// 请求成功 
// console.log('request.response');
// console.log(request.response) //请求的响应内容