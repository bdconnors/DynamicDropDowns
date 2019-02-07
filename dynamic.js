var choiceData; // JSON of all possible choices
var dataLength; // length of the objects in the JSON data for choices
var selections = [];//User Selections	
var propertys = []; //Propertys of User Selections

// Initialize a bunch of stuff
function init() 
{
    choiceData = choices.choices; //Initialize JSON of possible choices
    // Gets the length of data from the JSON object
    dataLength = Object.keys(choiceData).length;
	//calls createSelectElement with "Main" key from JSON Array
    createSelectElement("Main");	
	//creates a selection drop down with a supplied key from JSON array
    function createSelectElement(dataKey){	
	
        for (var i = 0; i < dataLength; i++){
            // If choice does not match key, skip this data point 
            if (choiceData[i].key != dataKey){   
			continue;				
		
			}//If choice is an endPoint
			else if(choiceData[i].endPoint == true){
				
				//add choice property to propertys array
				propertys[choiceData[i].depth] = choiceData[i].property;
				//add choice selection to selections array
				selections[choiceData[i].depth] = dataKey;
				
				//for each choice selection add a <p> that displays users choice selections and their propertys
				for(var k = 1; k < selections.length; k++){
					var para = document.createElement("p");	
					textNode = document.createTextNode("You Selected " + selections[k] + " as your " + propertys[k]);
					para.appendChild(textNode);
					resultDiv.appendChild(para);
				}	
				//create a <h2> that displays the endPoints resultText and add it to resultDiv
				var textNode = document.createTextNode(choiceData[i].result);
				var result = document.createElement("h2");	
				result.appendChild(textNode);
				resultDiv.appendChild(result);
				
				//create <img> element that will contain results image and add it to resultDiv
				var img = document.createElement("img");
				img.src = choiceData[i].imageSrc;
				resultDiv.appendChild(img);
				resultDivWrap.className = "sample-wrapper";
			}//else continue creating selection drop downs
			else
			{	//if the choice is not the "Main" key
				if(choiceData[i] != 0)
				{
					//add choice property to propertys array
					propertys[choiceData[i].depth] = choiceData[i].property;
					//add choice selection to selections array
					selections[choiceData[i].depth] = dataKey;
				}
				// Creates a header to label the specific select menu
				var h2 = document.createElement('h2');
				var textNode = document.createTextNode(choiceData[i].description);
				h2.className = choiceData[i].depth;
				h2.appendChild(textNode);
				selectDiv.appendChild(h2);

				// Creates the select list element
				var selectList = document.createElement('select');
				selectList.id = choiceData[i].key;
				selectList.name = choiceData[i].description;
				selectList.className = choiceData[i].depth;
				selectDiv.appendChild(selectList);

				// Creates null Select option
				var nullOption = document.createElement('option');
				nullOption.text = "Select an Option";
				nullOption.selected = this;
				nullOption.disabled = true;
				selectList.appendChild(nullOption);
				
				//initialize key and value data for choice selection
				var values = Object.values(choiceData[i]);
				var keys = Object.keys(choiceData[i]);
				var oLength = Object.keys(choiceData[i]).length;
			
				//for each key-value pair in choice selection
				for (var j = 0; j < oLength; j++)
				{	
					//if the key-value pair is an "option"
					if(keys[j] != "key" && keys[j] != "description" && keys[j] != "property" && keys[j] != "depth" && keys[j] != "endPoint")
					{	
						//add the option to the selection dropdown
						createOption(values[j],selectList);
					}						
				}
				// Hooks up an event to reload the choices whenever the select value is changed
				selectList.onchange = reloadSelect;
			}
        }
    }
	//creates and adds an option to the current selectList
	function createOption(value,selectList)
	{
		var newOption = document.createElement('option');
		newOption.value = value;
		newOption.text = value;
		selectList.appendChild(newOption);
	}
    // Re-creates the select elements based on previous choice
    // Accessing the element: this
    // The value of "this" inside a handler is the element. The one which has the handler on it.
    function reloadSelect() {
        console.log(this);
        console.log("this.className: " + this.className);
        console.log("this.value: " + this.value);
		
		clearResult();
		resultDivWrap.className = "";
        // removes any elements if necessary
        removeElements(this.className);

        // creates new select elements
        createSelectElement(this.value);

        // assigns the most recent selection value
        recentSelection = this;
		
    };
    // Removes all child elements from the select div
    function clearSelect() {

        // Checks if a firstChild exists, if so, remove that child
        while (selectDiv.firstChild) {
            selectDiv.removeChild(selectDiv.firstChild);
        }
    };
	function clearResult() {

        // Checks if a firstChild exists, if so, remove that child
        while (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild);
        }
    };
    // Removes elements based on the depth of the question
    function removeElements(elementDepth) {

        // gets the current depth from the parameter
        var currentDepth = parseInt(elementDepth);
		console.log("DEPTH:" + elementDepth);
        // Loops through any elements that have a depth deeper than the previously changed select option
        for (var i = 4; i > currentDepth; i--) {

            // Gets all elements of a given depth
            var elementsToDelete = document.getElementsByClassName(i);

            // Deletes all elements that are the targeted depth
            while (elementsToDelete.length > 0) {
                elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
            }
        }
    };
}

window.onload = init;