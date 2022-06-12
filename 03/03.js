const validateJSON = arg => {
    try {
        JSON.parse(arg); 
        return `${arg} is valid Json String.`;

    } catch (error) {
        return `It's not valid JSON String.`;
    }
}
const Product = JSON.stringify({ title: "book1", Price: 79 });
console.log(validateJSON(Product));
console.log(validateJSON('["foo","bar",{"foo":"bar"}]'));    //typeof(...) === String but not object
console.log(validateJSON('This is not a JSON string.'));    //typeof(...) === String 
console.log(validateJSON({}));                             //typeof({}) === Object
console.log(validateJSON(Boolean));                       //typeof(Boolean) === function
console.log(validateJSON(null));                          // typeof(null) === function
console.log(validateJSON(false));                        // is valid JSON String
console.log(validateJSON([]));                          

/*JSON.parse(arg); 
Converts a JavaScript Object Notation (JSON) string into an object.
input:A valid JSON string.
for example object that write into string*/

/*
One of the changes in RFC 7159 (The JavaScript Object Notation (JSON) Data Interchange Format.)is that a
 JSON text is not defined as being an object or an array anymore but
 rather as being a serialized value.
This means that with RFC 7159, “null” (as well as “true” and “false”) becomes a valid JSON text.
 So the JSON text serialized value of a null object is indeed “null”.

*/

