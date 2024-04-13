//js



//jquery

$(document).ready(function(){
    $( "#draggable" ).draggable();
  
 //droppable
        $( "#dragg" ).draggable();
    $( "#drop" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
//selectable
  
    $( "#selectable" ).selectable();

//sortable 
    $( "#sortable" ).sortable();

//accordian
    $( "#accordion" ).accordion({
      collapsible: true
    });

 //auto complete
     var availableTags = [
      "full stack web development",
      "graphics design",
      "digital marketting",
      "seo",
      
    ];
    $( "#tag" ).autocomplete({
      source: availableTags
    });

//date picker
$( "#datepicker" ).datepicker({
  changeMonth: true,
  changeYear: true
});

 //menu select
 $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu(); 
    
    

})