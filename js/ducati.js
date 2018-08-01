$(document).ready(function(){
    $.ajax({
      type: 'post',
      url: '../spec.json',
      success(data){        
       // console.log(typeof data)
        makeTable(data);
      },
      error(err){
        consol.log(err);
      }
    })   
  })
 function makeTable(data){
    var text='';
    text+='<table class="tableStill">'
        for (const key in data.motors[0].ducati) {
            text+='<tr >'
            text+='<td class="firstColumn" colspan="2" align="center">'+key +'</td>'
            text+='</tr>'
                for (const x in data.motors[0].ducati[key]) {
                    text+='<tr>'
                        text+='<td class="fontStil">'+x +'</td>'
                        text+='<td align="center">'+data.motors[0].ducati[key][x] +'</td>'
                    text+='</tr>'
                }
        }
    text+='</table>'
    $('#ducatiApnd').append(text);
}
 