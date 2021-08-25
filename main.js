menu_list_array = ["Veg Margherita Pizza", "Double Cheese Margherita", "Farm House", "Peppy Paneer",
"Mexican Green Wave", "Deluxe Veggie", "Veg Extravaganza", "Cheese in corn" ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  (added)
}

function add_item(){
var htmldata;
var imagetags='<img id="im1" src="pizza1.jpg">';
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort() (added);
        htmldata="menu_list_array.sort()"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

function add_toppings(){
    var htmldata;
    menu_list_array.sort();
            for(var i=0;i<menu_list_array.length;i++){
                htmldata=htmldata+ menu_list_array[i] + '<br>'
            }
            document.getElementById("menu_list_array").innerHTML = htmldata;
    }