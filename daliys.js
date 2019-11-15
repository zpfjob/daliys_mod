function dailys_mod(data){

    var week_arr = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")

    var fisrt_data = 1 - data.now_index

    var d_obj = new Date();
    now_time = d_obj.getTime();
    now_day = d_obj.getDate();
    now_riqi = d_obj.getDay();


    cha_time = 24*60*60*1000

    var n_html = "<ul>"
    for(let i=fisrt_data;i<data.day_count+fisrt_data;i++){

        n_obj = new Date();
        n_obj.setTime(n_obj.getTime() + i*cha_time)
        day = n_obj.getDate();
        riqi = n_obj.getDay()

        if(i == 0){
            n_html += "<li class='rili on'><span>"+day+"</span><i>"+week_arr[riqi]+"</i></li>"
        }else{
            n_html += "<li class='rili'><span>"+day+"</span><i>"+week_arr[riqi]+"</i></li>"
        }

    }
    n_html +='<ul>'
    document.getElementById(data.id_name).innerHTML = n_html

}