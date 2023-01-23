function butotnClick(){

    function dateToStr24HPad0(date, format) {
        
        if (!format) {
            // デフォルト値
            format = 'YYYY/MM/DD hh:mm:ss'
        }
        
        // フォーマット文字列内のキーワードを日付に置換する
        format = format.replace(/YYYY/g, date.getFullYear());
        format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
        format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
        format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
        format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
        
        return format;
    }

    var dateObj = new Date(),
    hour24  = dateObj.getHours();

    // 午前か午後を判定
    var hourStr = hour24 < 13 ? 'AM' : 'PM';

 
    

    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSfvoMhjwyC02EsKKA_g48VEgavlxXhiPZL0JRy2aMFeWrMbRQ/viewform?usp=pp_url&'
    var whatscorse = '週３'
    var name = nameText.value
    var today = dateToStr24HPad0(new Date(), 'YYYY-MM-DD')
    var pmoram = hourStr
    var whatscoma = ""

    if (pmoram == "AM"){
        whatscoma = "３コマ目"
    }else{
        whatscoma = "４コマ目"
    }
        

    var thiscomaworks = "理科"
    var usesubjectbook = "N予備校以外のオンラインツール"
    var result_url = (url
                +'entry.359334629='+ today
                +'&entry.462491324='+ whatscorse
                +'&entry.393516013='+ name
                +'&entry.1432336039='+ whatscoma
                +'&entry.807152118='+ thiscomaworks
                +'&entry.583983869='+ usesubjectbook
                )

    window.open(result_url)
  }

  
