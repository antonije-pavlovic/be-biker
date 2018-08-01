var pictures = [
	{
		src: '../images/author/1.png',
        alt:'author1',
        height:'300px'
	},
	{
		src: '../images/author/2.png',
        alt:'author2',
        height:'300px'
	},
	{
		src: '../images/author/3.png',
        alt:'author3',	
        height:'300px'
	}
];
$(document).ready(function(){
    var text='';
    for(var i=0;i<pictures.length;i++){
        console.log("usao")
        text+='<img src="'+ pictures[i].src+'" alt="'+pictures[i].alt+'" height="'+pictures[i].height+'" />'
    }
    $("#photos").append(text);
})