$(document).ready(function(){
    $.ajax({
      type: 'post',
      url: '../spec.json',
      success(data){      
       
        makeTable(data);
      },
      error(err){
        console.log(err);
      }
    })   
  })
 function makeTable(data){
    var text='';
    text+='<table class="tableStill">'
        for (const key in data.motors[1].kawasaki) {
            text+='<tr>'
            text+='<td class="firstColumn" colspan="2" align="center">'+key +'</td>'
            text+='</tr>'
                for (const x in data.motors[1].kawasaki[key]) {
                    text+='<tr>'
                        text+='<td class="fontStil">'+x +'</td>'
                        text+='<td align="center">'+data.motors[1].kawasaki[key][x] +'</td>'
                    text+='</tr>'
                }
        }
    text+='</table>'
    $('#kawaApnd').append(text);
}
 