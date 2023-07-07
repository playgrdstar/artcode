var imgName = "randomness.png";
var img;
var toDraw;
var circleArr = [];
var numCircles = 10000;
var frameArr = []; 

function preload() {
    img = loadImage(imgName);
}

function setup() {

    img.loadPixels();

    toDraw = new Array(img.width/5);
    for (var i=0; i<img.width; i+=5) {
        toDraw[i] = new Array(img.height/5);
    }
        

    for (var x=0; x<img.width; x+=5) {
        for (var y=0; y<img.height; y+=5) {
            var c = img.get(x, y);
            var t = ceil(map(c[3], 0, 255, 1, 5));
                toDraw[x][y] = t;
                console.log(t);
        }
    }

    table = new p5.Table;
    table.addColumn('x');
    table.addColumn('y');
    table.addColumn('v');

    var i = 0;
    //var newRow = table.addRow();

    for (var x=0; x<img.width; x+=5) {
        for (var y=0; y<img.height; y+=5) {
            var newRow = table.addRow();
            newRow.setNum('x', x);
            newRow.setNum('y', y);
            newRow.setNum('v', toDraw[x][y]);
        }
    }

    saveTable(table, 'randomness.csv')

    console.log("Done");

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOAD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var imgtable;

// function preload() {
//   //my table is comma separated value "csv"
//   //and has a header specifying the columns labels
//   table = loadTable("image.csv", "csv", "header");
//   //the file can be remote
//   //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
//   //                  "csv", "header");
// }

// function setup() {
//   //count the columns
//   createCanvas(500, 500);
//   print(table.getRowCount() + " total rows in table");
//   print(table.getColumnCount() + " total columns in table");

//   print(table.getColumn("name"));
//   //["Goat", "Leopard", "Zebra"]

//   //cycle through the table
//   for (var r = 0; r < table.getRowCount(); r++)
//     for (var c = 2; c < table.getColumnCount(); c+=3) {
//       // print(table.getNum(r, c-2));
//       // print(table.getNum(r, c-1));
//       // print(table.getNum(r, c));
//       x = table.getNum(r, c-2);
//       y = table.getNum(r, c-1);
//       value = table.getNum(r, c);
//       noStroke();
//       fill(value);
//       ellipse(x, y, 5, 5);
//     }
// }