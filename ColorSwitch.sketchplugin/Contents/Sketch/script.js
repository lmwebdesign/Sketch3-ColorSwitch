@import 'colors.js'; 

var color1 = function(context) {
    colorFill(context, c1);
};
var color2 = function(context) {
    colorFill(context, c2);
};
var color3 = function(context) {
    colorFill(context, c3);
};
var color4 = function(context) {
    colorFill(context, c4);
};
var color5 = function(context) {
    colorFill(context, c5);
};
var color6 = function(context) {
    colorFill(context, c6);
};
var color7 = function(context) {
    colorFill(context, c7);
};
var colorb1 = function(context) {
    colorBorder(context, c1);
};
var colorb2 = function(context) {
    colorBorder(context, c2);
};
var colorb3 = function(context) {
    colorBorder(context, c3);
};
var colorb4 = function(context) {
    colorBorder(context, c4);
};
var colorb5 = function(context) {
    colorBorder(context, c5);
};
var colorb6 = function(context) {
    colorBorder(context, c6);
};
var colorb7 = function(context) {
    colorBorder(context, c7);
};


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
