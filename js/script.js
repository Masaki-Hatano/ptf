
//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {
    //id名を指定
    strokeWidth: 0,//進捗ゲージの太さ
    duration: 1000,//時間指定(1000＝1秒)
    trailWidth: 0,//線の太さ
    text: {//テキストの形状を直接指定	
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '0',
            transform: 'translate(-50%,-50%)',
            'font-size': '48px',
            color: '#7E7EE0',
            'font-weight': '700',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});







jQuery.scrollify({
    section: ".main",//1ページスクロールさせたいエリアクラス名
    scrollbars: "false",//スクロールバー表示・非表示設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 300, // スクロール時の速度
});


jQuery('a[href^="#"]').on('click', function () {

    var id = jQuery(this).attr('href');
    var position = 0;
    if (id != '#') {
        var position = jQuery(id).offset().top;
    }

    jQuery('html,body').animate({
        scrollTop: position
    },
        300);
});






$(function () {
    var set = 200;//ウインドウ上部からどれぐらいの位置で変化させるか
    var boxTop = new Array;
    var current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける
    $('.position-now').each(function (i) {
        boxTop[i] = $(this).offset().top;
    });
    //最初の要素にclass="positiion-now"をつける
    changeBox(0);
    //スクロールした時の処理
    $(window).scroll(function () {
        scrollPosition = $(window).scrollTop();
        for (var i = boxTop.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };
    });
    //ナビの処理
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
            $('.nav__item').removeClass('link-current');

            //位置によって個別に処理をしたい場合　
            if (current == 0) {
                $('#im_link_js').addClass('link-current');
                // 現在地がsection1の場合の処理
            } else if (current == 1) {
                $('#service_link_js').addClass('link-current');
                // 現在地がsection2の場合の処理
            } else if (current == 2) {
                // 現在地がsection3の場合の処理
                $('#works_link_js').addClass('link-current');
            }
            else if (current == 3) {
                // 現在地がsection4の場合の処理
                $('#contact_link_js').addClass('link-current');
            }
        }
    };
});



// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// チェックした時の挙動
btn.addEventListener("change", () => {
    if (btn.checked == true) {
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});