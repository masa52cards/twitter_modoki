// ツイート保存用（グローバル変数）
var tweet = [];
var num_feed = 0;
//var tweetDiv = [];

function getObjTextArea() {
    return document.getElementById('tweet');
}

function objTweet(value) {
    return {
        date: Date.now(),
        tweet: value,
    }
}

function post(obj_textarea) {
    tweet.push(objTweet(obj_textarea.value))
}

function clear(obj_textarea) {
    obj_textarea.value = '';
}

function clearTextArea() {
    var obj_textarea = getObjTextArea();
    clear(obj_textarea)
}

function makeFeed() {
    // 
    // すべてのツイートのdivインスタンスを作成
    // 
    // この辺が怪しい

    // divインスタンスを格納する配列
    var tweetDiv = [];

    for (var i = 0; i < tweet.length; i++) {

        // Divインスタンス作成
        var div = document.createElement('div')
        div.name = "feed" + String(num_feed);
        // インスタンスの完成
        div.textContent = tweet[tweet.length - i - 1].tweet;

        // 配列に格納
        tweetDiv.push(div);

    }

    // 返す
    return tweetDiv
}

function clearFeed(feed_list) {
    feed_list.textContent = null;
}



function showFeed(feed_list, div) {
    for (var i = 0; i < div.length; i++) {
        console.log(typeof div[i]);
        var username = document.createElement('h3');
        username.textContent = "千明牧場";
        var del = document.createElement('button');
        del.onclick = function (i) {
            var target = document.getElementsByName("feed" + String(i));
            console.log(target.text);
            while (target.firstChild) element.removeChild(target.firstChild);
            //target.textContent = null;
            console.log(i);
            //target.parentNode.removeChild(target);
        }
        //del.name = ""+i;
        del.textContent = "削除";
        div[i].insertBefore(username, div[i].firstChild)
        div[i].appendChild(del);
        div[i].appendChild(document.createElement("HR"));
        feed_list.appendChild(div[i]);
    }
}

function main() {

    // インスタンスの取得
    var obj_textarea = getObjTextArea()

    // フィードのDIV要素
    var feed_list = document.getElementById('feed_list');

    // ツイート
    post(obj_textarea);

    // テキストエリアをクリア
    clear(obj_textarea);

    // すべてのツイートのdivインスタンスを生成
    var div = makeFeed();

    // フィードをクリア
    clearFeed(feed_list);

    // 新しいツイートを描画
    showFeed(feed_list, div);

    num_feed++;
    return true
}
