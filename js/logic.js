
//event listener to call removeText and delete text inside of search box
document.getElementById("search-input").addEventListener("focusout", removeText);

//function to delete search box content
function removeText(){
	if(this.value !== '') 
		{ this.value = ''; } 
}
