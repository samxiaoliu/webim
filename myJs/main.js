import { connect } from './common.js'

window.onload = function() {
    var nim = connect()
        // console.log(nim)

    // nim = NIM.getInstance({

    // })

    let current_user = document.querySelector('.username').innerText

    if (current_user == '') {
        setTimeout(() => {
            nim.getUser({
                account: 'samxiaoliu',
                done: getUserDone
            })
        }, 500)


        function getUserDone(error, user) {
            console.log('获取用户名片' + (!error ? '成功' : '失败'), error);
            if (!error && user) {
                console.log(user)
                document.querySelector('.username').innerText = user.nick
            }
        }

    }

    setTimeout(() => {
        nim.addFriend({
            account: 'sym',
            ps: 'test',
            done: addFriendDone
        });
    }, 500)

    function addFriendDone(error, obj) {
        console.log('直接加为好友' + (!error ? '成功' : '失败'), error, obj);
        if (!error) {
            setTimeout(() => {
                nim.getFriends({
                    done: getFriendsDone
                })
            }, 500)

            function getFriendsDone(error, friends) {
                console.log('获取好友列表' + (!error ? 'success' : 'fail'), error, friends);
                if (!error) {
                    let result = `<li><img src="./imgs/user_head.jpg" alt="">
                    <div>
                        <p class="contact_username">${friends[0].account}</p>
                    </div></li>`

                    document.querySelector('.contact_list ul').innerHTML = result
                }
            }
        }
    }



    // setTimeout(() => {
    //     var msg = nim.sendText({
    //         scene: 'p2p',
    //         to: 'sym',
    //         text: 'hello',
    //         done: sendMsgDone
    //     });
    //     console.log('正在发送p2p text消息, id=' + msg.idClient);
    // }, 500)

    // function sendMsgDone(error, msg) {
    //     if (error) { throw error }
    //     console.log(msg)
    //     console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient);
    // }

}