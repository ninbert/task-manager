
notes = document.getElementById("notesArea");
theArray=JSON.parse(localStorage.theArray);

function loadLocalStorage()

{

    if(localStorage.theArray)


    {

        theArray=JSON.parse(localStorage.theArray);
        printNote();

    }

    else
    {
        theArray=[];
    }


}




function addNote() {
    console.log("works");
    text=document.getElementById("textArea").value;
    inputDate=document.getElementById("datepicker").value;
    inputTime=document.getElementById("timepicker").value;

    obj = {};
    obj.text = text;
    obj.date = inputDate;
    obj.time = inputTime;
    theArray.push(obj);
    //console.log(theArray);
    localStorage.theArray=JSON.stringify(theArray);


    printNote();


}


function printNote(){

    if(theArray.length==0)
    {
        notes.innerHTML = ""
    } else
    {
        var str = "";
        for (i=0; i<theArray.length; i++) {
            str += `<div class="noteDiv">
                            <div class="content">
                            <div class ="right" onclick="removeNote(${i})">
                            <a href="#" onclick="removeNote(${i})"><i class="fa fa-times" onclick="removeNote(${i})"></i></a>
                           </div>
                            <div class="paraDiv" >
                                <p class="paraGraph">${theArray[i].text}</p>
                            </div>

                            <p class="paraGraphDate">${theArray[i].date}
                            <br> ${theArray[i].time}</p>
                           </div>
                           </div>`;
            notes.innerHTML = str;
        }



    }
}

function removeNote(i)
{

    theArray.splice(i , 1);

    notes.innerHTML = "";
    localStorage.theArray=JSON.stringify(theArray);
    printNote();


}


function removeAllNotes()
{
    theArray = [];
    notes.innerHTML = "";
    localStorage.theArray=JSON.stringify(theArray);
}





$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#timepicker').timepicker({
    uiLibrary: 'bootstrap4'
});

