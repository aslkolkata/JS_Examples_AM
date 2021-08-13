// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// global.XMLHttpRequest = require('xhr2');
var assert = require('assert');
// assert.match({ a: { n: 0 } },{ a: { n: 0 } });
assert.deepStrictEqual({ a: [{ n: 0 }] },{ a: [{ n: 0 }] }, "True")
// console.log(a)
let json = JSON.stringify({
    "appliance":[
        {"serial_number":"aabcnc",
        "pid": 9}
    ]
});
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const alt_ztp_url='http://127.0.0.1:8000/api_north/v1.0/appliance';
const primary_ztp_url='http://192.168.7.130:8002/api_north/v1.0/appliance';
Http.open("POST", alt_ztp_url, false, 'administrator', 'admin');
Http.setDisableHeaderCheck(true);
Http.setRequestHeader('Accept', 'application/json');
Http.setRequestHeader('Content-Type', 'application/json');
// Http.setRequestHeader('Accept-Encoding', 'identity');
Http.setRequestHeader('Content-Encoding', 'identity');

Http.send(json);
console.log(Http.status)
console.log(Http.responseText)
var alt_json_data = JSON.parse(Http.responseText);
Http.open("GET", primary_ztp_url + "?" + "serial_number=" + alt_json_data['appliance'][0]['serial_number'], false, 'administrator', 'admin');
Http.setDisableHeaderCheck(true);
Http.setRequestHeader('Accept', 'application/json');
Http.setRequestHeader('Content-Type', 'application/json');
// Http.setRequestHeader('Accept-Encoding', 'identity');
Http.setRequestHeader('Content-Encoding', 'identity');
Http.send();
console.log(Http.status)
console.log(Http.responseText)
var primary_json_data = JSON.parse(Http.responseText);

// console.log(deepEqual(primary_json_data, alt_json_data))
// // console.log(jsonData['appliance'][0]['aid'])
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
  
// }
