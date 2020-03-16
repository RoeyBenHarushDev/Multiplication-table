
 var row = parseInt(prompt('First Num'))
 var column = parseInt(prompt('Second Num'))

 createTable(row,column);

 function createTable(row = 1,column = 1)
{
   

    if (row > 0 && column > 0)
    {
        let TableHeader = '';
        TableHeader += '<tr>'
        for (i = 0; i <= row; i++)
        {
            TableHeader += '<td>' + i + '</td>'
        }
        TableHeader += '</tr>'
        
         let TableBody = '';

        for (r = 1; r <= column; r++)
        {
            TableBody += '<tr>'
            TableBody += '<td>' + r + '</td>'
            for (i=1; i<=row; i++)
            {
             TableBody += '<td>' + i*r + '</td>'
            }
           TableBody += '</tr>'
        }

        
        //document.write('<table border>' + TableHeader + TableBody + '</table>')

        document.write(`<table border> ${TableHeader} ${TableBody} </table>`)
    }  
     else
    {
        console.log(false);
        alert('Wrong input!!!\nPlease try again')
        var row = parseInt(prompt('First Num'))
        var column = parseInt(prompt('Second Num'))

        createTable(row,column);
    }
}
