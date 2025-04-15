
$(function () {
    /********************* フィルター（デザイン作品用） *********************/
    let $filteringBtn = $(".filter_buttons_design button"),
        $image = $(".filter_gallery_design li");
    // フィルタリングボタンがクリックされた時の処理
    $filteringBtn.click(function(){
        let target = $(this).attr("value");
        // フィルタータブボタン押下時のタブ装飾変更 
        $(".filter_buttons_design button").addClass('unselected');
        $(".filter_buttons_design button").removeClass('selected');
        $(this).addClass('selected');
        // 各画像に対する処理
        $image.each(function(){
            // 初期値として全てを非表示にする
            $(this).animate({
                "opacity": 0
            }, 200, function(){
                $(this).hide();
                /* 
                指定の画像要素にクリックされたボタンのvalueのクラスが入っていれば表示
                value属性がallの場合も表示する
                */
                if($(this).hasClass(target) || target == "all") {
                    $(this).show();
                    $(this).animate({
                        "opacity": 1
                    }, 200);
                }
            });
        });
    });
})
$(function () { /* デザインと写真で function から分けないとエラーになる。後で統合したい */
    /********************* フィルター（写真作品用） *********************/
    let $filteringBtn = $(".filter_buttons_photo button"),
        $image = $(".filter_gallery_photo li");
    // フィルタリングボタンがクリックされた時の処理
    $filteringBtn.click(function(){
        let target = $(this).attr("value");
        // フィルタータブボタン押下時のタブ装飾変更 
        $(".filter_buttons_photo button").addClass('unselected');
        $(".filter_buttons_photo button").removeClass('selected');
        $(this).addClass('selected');
        // 各画像に対する処理
        $image.each(function(){
            // 初期値として全てを非表示にする
            $(this).animate({
                "opacity": 0
            }, 200, function(){
                $(this).hide();
                /* 
                指定の画像要素にクリックされたボタンのvalueのクラスが入っていれば表示
                value属性がallの場合も表示する
                */
                if($(this).hasClass(target) || target == "all") {
                    $(this).show();
                    $(this).animate({
                        "opacity": 1
                    }, 200);
                    /********************************/
                    /*   $(this).setAttribute("data-lightbox", "show"); "li"の下の"a"のattributeを変更しないといけない */
                /*}
                else {
                        $(this).setAttribute("data-lightbox", "noshow"); "li"の下の"a"のattributeを変更しないといけない */
                /********************************/
                }
            });
        });
    });
});

// 写真の表示を絞り込む処理(最初の画面表示時は「filter_a」の画像のみ表示する)
let $filteringBtn = $(".filter_buttons_photo button"),
        $image = $(".filter_gallery_photo li");
let target = "filter_a";
$image.each(function(){
    // 初期値として全てを非表示にする
    $(this).animate({
        "opacity": 0
    }, 200, function(){
        $(this).hide();
        /* 
        指定の画像要素にクリックされたボタンのvalueのクラスが入っていれば表示
        value属性がallの場合も表示する
        */
        if($(this).hasClass(target) || target == "all") {
            $(this).show();
            $(this).animate({
                "opacity": 1
            }, 200);
        }
    });
});
