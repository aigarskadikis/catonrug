
var req = new CurlHttpRequest();

var lld = [];
var url = "";
var resp = "";

// loop starts
for (var step = 1; step < 9; step++) {

// define an empty roe
var row = {};

// define url to fetch
url = "https://catonrug.blogspot.com/feeds/posts/default/?atom.xml?redirect=false&start-index="+step+"&max-results=1"

var resp = "";

// fetch data. multiple variables will be fed later
resp = req.Get(url);

// post identification. analyze incomming data for the first time
row["{#ENTRY}"] = resp.match(/(blog-[0-9]+\.post-[0-9]+)/)[0];

// add this to array
lld.push(row);

}

return JSON.stringify(lld);
