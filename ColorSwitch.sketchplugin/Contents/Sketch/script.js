@import 'colors.js'; 

var fill1 = function(c) {
    colorFill(c, palette.c1);
};
var fill2 = function(c) {
    colorFill(c, palette.c2);
};
var fill3 = function(c) {
    colorFill(c, palette.c3);
};
var fill4 = function(c) {
    colorFill(c, palette.c4);
};
var fill5 = function(c) {
    colorFill(c, palette.c5);
};
var fill6 = function(c) {
    colorFill(c, palette.c6);
};
var fill7 = function(c) {
    colorFill(c, palette.c7);
};
var fill8 = function(c) {
    colorFill(c, palette.c8);
};
var fill9 = function(c) {
    colorFill(c, palette.c9);
};

var border1 = function(c) {
    colorBorder(c, palette.c1);
};
var border2 = function(c) {
    colorBorder(c, palette.c2);
};
var border3 = function(c) {
    colorBorder(c, palette.c3);
};
var border4 = function(c) {
    colorBorder(c, palette.c4);
};
var border5 = function(c) {
    colorBorder(c, palette.c5);
};
var border6 = function(c) {
    colorBorder(c, palette.c6);
};
var border7 = function(c) {
    colorBorder(c, palette.c7);
};
var border8 = function(c) {
    colorBorder(c, palette.c8);
};
var border9 = function(c) {
    colorBorder(c, palette.c9);
};

var legend = function(c) {
    paletteLegend();
};

function paletteLegend(){
    var app = NSApplication.sharedApplication();
    var i=0;
    var msg = '';
    for(var prop in palette){
        i++;
        msg += "ctrl + "+i+" = "+palette[prop]+"\n";
    }
    msg += '\n Note: ctrl + cmd + # for border colors';
    [app displayDialog:msg withTitle:'ColorSwitch Shortcuts'];
}

function colorBorder(cont,color){
   var selection = cont.selection;

    //iterate layers
    for(var i=0; i<selection.count(); i++){
        var layer = selection[i];

        if (layer.class() === MSShapeGroup) {
           var layer = selection[i];  
           var styles = layer.style();
           var border = styles.border();
           [border setColor:[MSColor colorWithSVGString: color]];
        }
    }
}

function colorFill(cont,color){
    var selection = cont.selection;
    
    //iterate layers
    for(var i=0; i<selection.count(); i++){
        var layer = selection[i];

        if (layer.class() === MSTextLayer) {
            [layer setTextColor:[MSColor colorWithSVGString: color]];
        }
        if (layer.class() === MSShapeGroup) {

            //get layer style
            var shapeStyle = layer.style();

            //get layer style fills array
            var fills = shapeStyle.fills();

            //set fill style if not created
            if(fills.count() <= 0){ 
                fills.addNewStylePart();
            }

            //get first fill layer style
            var fill = fills.firstObject();

            //set color to first fill layer style
            [fill setColor:[MSColor colorWithSVGString: color]];

            log(fills.firstObject());
       }
    }
}
