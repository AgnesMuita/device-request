var tableLink=document.querySelector("#tablesss");
var tbody = document.querySelector(".tbody");
var submitted = document.querySelector(".submitted");
// var salesDms = document.querySelector("#sales-DMS");

window.addEventListener('DOMContentLoaded', (function(){

    $(document).ready(function(){
        if ($("#sales-DMS").click()){
            $("#signatures").hide(); 
            $("#departures").hide();
            $("#returns").hide();
            $("#requests").hide();
            $("#destinations").hide();
            $("#phones").hide();
            $("#leave").hide();
            $("#Businesses").hide();
            $("#functionals").hide();
        }
        else if($("#roaming-activation").click()){
            $("#department-name").hide();
            $("#designations").hide();
            $("#signatures").show();
            $("#departures").show();
            $("#returns").show();
            $("#destinations").show();
            $("#phones").show();
            $("#business-reasons").show();
            $("#models").hide();
            $("#business-reasons").hide();
            $("#Businesses").show();
            $("#type").hide();
            $("#leave").show();
            $("#functionals").show();
            $("#business-partner").hide();
        }   
        else if($("#laptop-link").click()){
            $("#department-name").show(); 
            $("#signatures").hide();
            $("#departures").hide();
            $("#returns").hide();
            $("#destinations").hide();
            $("#phones").hide();  
            $("#requests").show(); 
            $("#business-reasons").show();  
            $("#leave").hide();  
            $("#Businesses").hide(); 
        }
    });
   
tableLink.addEventListener('click', function(event){
    (".submitted").style.display="block";
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "https://recruitmentfiles.blob.core.windows.net/practicals/index-json.json", false);
ourRequest.onLoad=function(){
    var myData = JSON.parse(ourRequest.responseText);
    for(var i=0;i<myData.requesters.length; i++){
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${myData.requesters[i].name}</td>
        <td>${myData.requesters[i].role}</td>
        <td>${myData.requesters[i].education}</td>
        <td>${myData.requesters[i].email_address}</td>
        `;
        tbody.append(row);
    
    }
};
ourRequest.send();
});

$(document).ready(function(){
    function staticUpdate(oldId, newId, clickedName){
        $oldId=$('.active');
        $(oldId).removeClass("active");
        $(newId).addClass("active");
        $(oldId).html(`<a href="">${$(oldId).text()}</a>`);
        $(newId).html(`${clickedName}`);
        $(newId).show()
    }
    staticUpdate();
});

}));
