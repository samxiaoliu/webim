var data = {};

function connect() {
    var nim = NIM.getInstance({
        // 初始化SDK
        // debug: true,
        appKey: 'dfaaeb36d6b631c34784af861749f2a7',
        account: localStorage.getItem('username'),
        token: localStorage.getItem('password'),
        onconnect: onConnect
            // onroamingmsgs: onRoamingmsgs,
    });
    return nim
}

function onConnect() {
    console.log('连接了')
}

export {
    connect
}