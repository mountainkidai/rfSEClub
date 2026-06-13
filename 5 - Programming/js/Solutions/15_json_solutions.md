
## Convert a JavaScript object to JSON string

```js
function objectToJson(obj) {
    return JSON.stringify(obj);
}
console.log(objectToJson({ name: "John", age: 30 }));
```

## Parse a JSON string back to a JavaScript object

```js
function jsonToObject(json) {
    return JSON.parse(json);
}
console.log(jsonToObject('{"name":"John","age":30}'));
```

## Create a JSON object with nested properties

```js
let nestedJson = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
console.log(objectToJson(nestedJson));
```

## Access specific properties from a parsed JSON object

```js
function accessJsonProperty(json, property) {
    let obj = jsonToObject(json);
    return obj[property];
}
console.log(accessJsonProperty('{"name":"John","age":30}', "name"));
```

## Convert an array of objects to JSON string

```js
function arrayToJson(arr) {
    return JSON.stringify(arr);
}
console.log(arrayToJson([{ name: "John" }, { name: "Jane" }]));
```

## Parse JSON data from an API response

```js
function parseApiResponse(response) {
    return JSON.parse(response);
}
console.log(parseApiResponse('{"status":"success","data":[1,2,3]}'));
```

## Create a JSON object with different data types

```js
let mixedJson = {
    name: "John",
    age: 30,
    isActive: true,
    hobbies: ["reading", "gaming"],
    address: null
};
console.log(objectToJson(mixedJson));
```

## Validate if a string is valid JSON

```js
function isValidJson(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}
console.log(isValidJson('{"name":"John","age":30}'));
```

## Convert JSON data to a formatted string

```js
function formatJson(json) {
    return JSON.stringify(json, null, 2);
}
console.log(formatJson({ name: "John", age: 30 }));
```

## Extract specific values from a complex JSON structure

```js
function extractValues(json, keys) {
    let obj = jsonToObject(json);
    return keys.map(key => obj[key]);
}
console.log(extractValues('{"name":"John","age":30,"city":"New York"}', ["name", "city"]));
```

## Create a JSON object with arrays and objects

```js
let complexJson = {
    users: [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 }
    ],
    active: true,
    tags: ["developer", "designer"]
};
console.log(objectToJson(complexJson));
```

## Convert JSON data to a table format

```js
function jsonToTable(json) {
    let obj = jsonToObject(json);
    let table = "<table>";
    for (let key in obj) {
        table += `<tr><td>${key}</td><td>${obj[key]}</td></tr>`;
    }
    table += "</table>";
    return table;
}
console.log(jsonToTable('{"name":"John","age":30,"city":"New York"}'));
```

## Filter JSON data based on specific criteria

```js
function filterJsonData(json, criteria) {
    let obj = jsonToObject(json);
    return Object.keys(obj)
        .filter(key => obj[key] === criteria)
        .reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {});
}
console.log(filterJsonData('{"name":"John","age":30,"city":"New York"}', "John"));
```

## Sort JSON data by a specific property

```js
function sortJsonByProperty(json, property) {
    let arr = jsonToObject(json);
    return arr.sort((a, b) => a[property] > b[property] ? 1 : -1);
}
console.log(sortJsonByProperty('[{"name":"John","age":30},{"name":"Jane","age":25}]', "age"));
```

## Create a JSON object with boolean and null values

```js
let booleanJson = {
    isActive: true,
    isVerified: false,
    address: null
};
console.log(objectToJson(booleanJson)); 
```
