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
        for (const key in data.motors[2].yamaha) {
            text+='<tr >'
            text+='<td class="firstColumn" colspan="2" align="center">'+key +'</td>'
            text+='</tr>'
                for (const x in data.motors[2].yamaha[key]) {
                    text+='<tr>'
                        text+='<td class="fontStil">'+x +'</td>'
                        text+='<td align="center">'+data.motors[2].yamaha[key][x] +'</td>'
                    text+='</tr>'
                }
        }
    text+='</table>'
    $('#yamahaApnd').append(text);
}
 