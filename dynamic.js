var choiceData; // JSON of all possible choices
var dataLength; // length of the objects in the JSON data for choices
var selections = [];
var propertys = [];
var x = document.cookie;

// Initialize a bunch of stuff
function init() 
{
    /*
    An enumerable is an object that may be enumerated.
    "Enumerated" means to count off the members of a set/collection/category one by one (usually in order, usually by name). 
	An enumerable then is an object that can step through a series of other objects one by one.
     In JavaScript "Object.keys(obj)" will return the members by name in the "set/collection/category" obj.
     */
    choiceData = choices.choices;

    console.log(choiceData);

    console.log("(Object.keys(choiceData): " + Object.keys(choiceData));

    console.log("Object.keys(choiceData).length: " + Object.keys(choiceData).length);

    // Gets the length of data from the JSON object
    dataLength = Object.keys(choiceData).length;

    createSelectElement("Main");
    function createSelectElement(dataKey) 
	{
			
        for (var i = 0; i < dataLength; i++) 
		{
            // If choice does not match key, skip this data point
            if (choiceData[i].key != dataKey)
			{   continue;				
		
			}
			else if(choiceData[i].endPoint == true)
			{
				propertys[choiceData[i].depth] = choiceData[i].property;
				selections[choiceData[i].depth] = dataKey;
					console.log("PROPERTYS" + propertys);
					console.log("SELECTIONS" + selections);
				for(var k = 1; k < selections.length; k++)
				{
					var para = document.createElement("p");	
					textNode = document.createTextNode("You Selected " + selections[k] + " as your " + propertys[k]);
					para.appendChild(textNode);
					imageDiv.appendChild(para);
				}	
				var result = document.createElement("h2");
				var textNode = document.createTextNode(choiceData[i].result);
				imageDivWrap.className = "sample-wrapper";
				result.appendChild(textNode);
				imageDiv.appendChild(result);	
				var img = document.createElement("img");
				img.src = choiceData[i].imageSrc;
				imageDiv.appendChild(img);
				console.log(selections);
				console.log(propertys);

			}
			else
			{	
				if(choiceData[i] != 0)
				{
					propertys[choiceData[i].depth] = choiceData[i].property;
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
			
				var values = Object.values(choiceData[i]);
				var keys = Object.keys(choiceData[i]);
				var oLength = Object.keys(choiceData[i]).length;
			
				for (var j = 0; j < oLength; j++)
				{	
					console.log("VALUE: " + values[j]);
					if(keys[j] != "key" && keys[j] != "description" && keys[j] != "property" && keys[j] != "depth" && keys[j] != "endPoint")
					{
						createOption(values[j],selectList);
					}
									
				}
				// Hooks up an event to reload the choices whenever the select value is changed
				selectList.onchange = reloadSelect;
			}
        }
    }
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
		
		clearImage();
		imageDivWrap.className = "";
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
	function clearImage() {

        // Checks if a firstChild exists, if so, remove that child
        while (imageDiv.firstChild) {
            imageDiv.removeChild(imageDiv.firstChild);
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
	function formReset()
	{
		document.getElementById("form").reset();
		
	}
}

window.onload = init;