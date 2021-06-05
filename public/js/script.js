const pokimon = require(`../../models/pokemon`);







// function flattenObject(oldObject) {
//     let newObject = {};
//     flattenHelper(oldObject, newObject, ``)
//     return newObject;

//     function flattenHelper(currentObject, newObject, previousKeyName) {
//         for (let key in currentObject) {
//             let value = currentObject[key];

//             if (value.constructor !== Object) {
//                 if (previousKeyName == null || previousKeyName == ``) {
//                     newObject[key] = value;
//                 }
//                 else {
//                     if (key == null || key == ``) {
//                         newObject[previousKeyName] = value;
//                     }
//                 }
//             } else {
//                 if (previousKeyName == null || previousKeyName == ``) {
//                     flattenHelper(value, newObject, key);
//                 }
//                 else {
//                     flattenHelper(value, newObject, previousKeyName + `.` + key)
//                 }
//             }
//         }
//     }
// }

