//>>>>>>>>>>>>STATE<<<<<<<<<<<<<<

var state = {
	items: [
	{name: 'apple', checked: false}, 
	{name: 'oranges', checked: false},
	{name: 'milk', checked: true},
	{name: 'bread', checked: false}
	]  //kept these guys in, normally would be empty, pre reqs did not change 
};

//>>>>>>>>>STATE MOD FUNCTIONS<<<<<<<<<<

var addItem = function(state, item) {
    state.items.push({name: item, checked: false}); 
};

//check off list items. w/ check button 
var checkItem = function (state, item) {
	console.log(state);
	for(i = 0; i < state.items.length; i++) {
		if(state.items[i].name === item){
			state.items[i].checked = !state.items[i].checked; 
		}
	}
};

//permanently remove items with delete button 
var deleteItem = function (state, item) {
		var index = -1; 
		for(i = 0; i < state.items.length; i++) {
		if(state.items[i].name === item){
			index = i; 
		} 
	}
	state.items.splice(index,1);
};

function deleteClick (event) {
	var item = $(event.currentTarget).parent().parent().find('.shopping-item').text();
	deleteItem(state, item); 
	renderItem(state, $('.shopping-list'));
	addEvents();
};

function checkClick (event) {
	var item = $(event.currentTarget).parent().parent().find('.shopping-item').text();
	console.log(item);
	checkItem(state, item); 
	renderItem(state, $('.shopping-list'));
	addEvents();
};

//merge above, if stmnt on which to call, wouldn't need to have addEvents(); at the bottom.  

//Not sure but might need to have funcs to render 
//del and check off 

//bring the box styling with me, store in var??
// var boxStyle =???


//>>>>>>>>>RENDER FUNCTIONS <<<<<<<<<<
var renderItem = function(state, event) {
	var itemsHtml = state.items.map(function(item) {
		return '<li>' +
        '<span '+(item.checked ? 'class="shopping-item shopping-item__checked"':'class="shopping-item"')+'>' + item.name +'</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            `<span class="button-label">delete</span> 
          </button>
        </div>
              </li>`; 
	});
	event.html(itemsHtml);
}; 

//alt sol using dhtml! 
 // '<button class="shopping-item-toggle" onclick = "checkClick(this)">'+
 // '<button class="shopping-item-delete" onclick = "deleteClick(this)">'+
//kip multi line string ` 
//want to target the ele that has the text in it,
//when user submits add item button.

//also need to be able to add by clicking submit or hitting return. 
//possible if statement? 

//>>>>>>>>>EVENTS<<<<<<<<<<
//testing submit button event listener 

$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault(); 
	addItem(state, $('#shopping-list-entry').val());
	renderItem(state, $('.shopping-list'));
	addEvents(); 
});

function addEvents () {
	$('.shopping-item-toggle').click(checkClick); 
	$('.shopping-item-delete').click(deleteClick);
};
addEvents(); 


//in event listen section worry about targeting html nodes
 //and in renderItem

//can add stuff to the page but for some reason I can't take all the styling with me! 
//would I put all of that into a var?? 
//test to
//CCC>>> changes all the list items, how to add them individually?  use toggleClass(), need to wipe a class! 





