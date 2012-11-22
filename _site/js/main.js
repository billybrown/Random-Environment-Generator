var stage = 1;
var theinput = "Frank";
var spokenWord = "";

function answerQuestion() { 

   theinput = document.firstQuestion.wandererName.value;

	if (stage == 1) {
		$("#spokenword").addClass("hide");  
		setTimeout(function(){
    		document.getElementById("spokenword").innerHTML = 'Ah...Hello ' + theinput + '.';
    	    $("#spokenword").removeClass("hide");
    	}, 500);
    	setTimeout(function(){
    		$("#spokenword").addClass("hide");  
    	}, 1500);
		setTimeout(function(){
    		document.getElementById("spokenword").innerHTML = 'Do you feel prepared?';
    	    $("#spokenword").removeClass("hide");
    	}, 2200);
    	stage = 2;
    }

    if (stage == 2) {
    		if (theinput == 'yes') {
    			$("#spokenword").addClass("hide");  
    			setTimeout(function(){
    				document.getElementById("spokenword").innerHTML = 'Good.';
    				$("#spokenword").removeClass("hide");
    			}, 500);
    		}
    		else if (theinput == 'no') {
    			$("#spokenword").addClass("hide");  
    			setTimeout(function(){
    				document.getElementById("spokenword").innerHTML = 'That is not good.';
    				$("#spokenword").removeClass("hide");
    			}, 500);
       		}
    }


}


$(document).ready(function(){


});



$(window).load(function() {


    var window_height = $(window).height();
    var window_width = $(window).width();
    
    
    var window_height_grid = (window_height/25) - 1;
    var window_width_grid = (window_width/25) - 1;
    var window_area_grid = window_height_grid * window_width_grid;




    discoverbackground = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'tl';
        if (tile_background_number == 0 || tile_background_number == 1) {
            tile_background = 'tl';
        }
        else if (tile_background_number == 2 || tile_background_number == 3) {
            tile_background = 't';
        }
        else if (tile_background_number == 4 || tile_background_number == 5 ) {
            tile_background = 'tr';
        }
        else if (tile_background_number == 6 || tile_background_number == 7) {
            tile_background = 'm';
        }
        else if (tile_background_number == 8 || tile_background_number == 9 ) {
            tile_background = 'mr';
        }
        else {
            tile_background = 'sky';
        }
        return tile_background;
    }

    discoverbackground_firstrow = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number == 0 || tile_background_number == 1) {
            tile_background = 'bl';
        }
        else if (tile_background_number == 2 || tile_background_number == 3) {
            tile_background = 'b';
        }
        else if (tile_background_number == 4 || tile_background_number == 5 ) {
            tile_background = 'br';
        }
        else {
            tile_background = 'sky';
        }
        return tile_background
    }

    discoverbackground_firstrow_outside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 5 ) {
            tile_background = 'bl';
        }
        else {
            tile_background = 'sky';
        }
        return tile_background
    }

    discoverbackground_firstrow_inside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'b';
        if (tile_background_number > 5 ) {
            tile_background = 'br';
        }
        else {
            tile_background = 'b';
        }
        return tile_background
    }

    discoverbackground_top_outside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 5 ) {
            tile_background = 'tl';
        }
        else {
            tile_background = 'sky';
        }
        return tile_background
    }

    discoverbackground_top_inside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 't';
        if (tile_background_number > 5 ) {
            tile_background = 'tr';
        }
        else {
            tile_background = 't';
        }
        return tile_background
    }

    discoverbackground_middle_outside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 5 ) {
            tile_background = 'ml';
        }
        else {
            tile_background = 'sky';
        }
        return tile_background
    }

    discoverbackground_middle_inside = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'm';
        if (tile_background_number > 5 ) {
            tile_background = 'mr';
        }
        else {
            tile_background = 'm';
        }
        return tile_background
    }

// TOP level tree
    discover_empty_empty = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 0 ) {
            tile_background = 'sky';
        }
        else {
            tile_background = 'tl';
        }
        return tile_background
    }

    discover_empty_bottom = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 0 ) {
            tile_background = 'tr';
        }
        else {
            tile_background = 't';
        }
        return tile_background
    }

    discover_full_full = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
            tile_background = 'm';
        return tile_background
    }

    discover_full_top = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'bu';
        if (tile_background_number > 8 ) {
            tile_background = 'bu';
        }
        else {
            tile_background = 'cornerlb';
        }
        return tile_background
    }

    discover_right_empty = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 0 ) {
            tile_background = 'ml';
        }
        else {
            tile_background = 'bul';
        }
        return tile_background
    }

    discover_right_bottom = function(){
        var tile_background = 'cornerl';
        return tile_background
    }

    discover_left_full = function(){
        var tile_background_number = Math.floor(Math.random() * 10);
        var tile_background = 'sky';
        if (tile_background_number > 2 ) {
            tile_background = 'mr';
        }
        else {
            tile_background = 'cornerr';
        }
        return tile_background
    }

    discover_left_top = function(){
        var tile_background = 'bur';
        return tile_background
    }

    var window_height_grid_lastrow = window_height_grid - 1;
    var rows = [];

    for(i=0; i<window_height_grid; i++){

        var grid_row = $('<div id="row_' + i + '" class="row">');


        if (i == 0) {                        //this is for the very first row to populate it with sky tiles only
            var tiles = [];
            for(x=0; x<window_width_grid; x++){
                    var tile = '<div id="' + i + '_' + x +'" class="sky"></div>';
                    grid_row.append(tile);
                    tiles[x] = 'sky';
            }
            rows[i] = tiles;
        } else {                                    // this is where the real shit happens
            var tiles = [];
            for(x=0; x<window_width_grid; x++){
                if (x == 0) {                       // this makes the far left tile identical to the tile above it. TEMPORARY!!!!!!
                    var tile = '<div id="' + i + '_' + x +'" class="' + rows[i-1][x] + '"></div>';
                    grid_row.append(tile);
                    tiles[x] = rows[i-1][x];
                } else {
                    var up_empty = false;
                    var up_full = false;
                    var up_right = false;
                    var up_left = false;
                    if (        rows[i-1][x] == 'sky' || 
                                rows[i-1][x] == 'bu' || 
                                rows[i-1][x] == 'bur' || 
                                rows[i-1][x] == 'bul' ) {
                        up_empty = true;
                    }
                    else if (   rows[i-1][x] == 'cornerrb' || 
                                rows[i-1][x] == 'mr' || 
                                rows[i-1][x] == 'tr' ) {
                        up_left = true;
                    }
                    else if (   rows[i-1][x] == 'cornerlb' || 
                                rows[i-1][x] == 'tl' || 
                                rows[i-1][x] == 'ml' ) {
                        up_right = true;
                    }
                    else if (   rows[i-1][x] == 'cornerl' || 
                                rows[i-1][x] == 'cornerr' || 
                                rows[i-1][x] == 't' || 
                                rows[i-1][x] == 'm' ) {
                        up_full = true;
                    }
                    var side_empty = false;
                    var side_full = false;
                    var side_bottom = false;
                    var side_top = false;
                    if (        tiles[x - 1] == 'sky' || 
                                tiles[x - 1] == 'tr' || 
                                tiles[x - 1] == 'mr' || 
                                tiles[x - 1] == 'bur' ) {
                        side_empty = true;
                    }
                    else if (   tiles[x - 1] == 'ml' || 
                                tiles[x - 1] == 'm' || 
                                tiles[x - 1] == 'm2' ||
                                tiles[x - 1] == 'cornerlb' || 
                                tiles[x-1] == 'cornerl') {
                        side_full = true;
                    }
                    else if (   tiles[x - 1] == 'tl' || 
                                tiles[x - 1] == 't' || 
                                tiles[x - 1] == 'cornerr' ) {
                        side_bottom = true;
                    }
                    else if (   tiles[x - 1] == 'bul' || 
                                tiles[x - 1] == 'cornerrb' || 
                                tiles[x - 1] == 'bu'   ) {
                        side_top = true;
                    }

                    if (i > window_height_grid_lastrow){            // this is a special loop for the last row. (the tree trunks)
                        var side_trunk_middle = false;
                        var side_trunk_right = false;
                        var side_trunk_left = false;
                        if (    tiles[x - 1] == 'b') {
                            side_trunk_middle = true;
                        }
                        else if (    tiles[x - 1] == 'bl') {
                            side_trunk_left = true;
                        }
                        else if (    tiles[x - 1] == 'br') {
                            side_trunk_right = true;
                        }

                        if ( up_empty && side_empty){
                            var this_tile = "sky";
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_empty ){
                            var this_tile = 'bl';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_trunk_middle ){
                            var this_tile = 'bl';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_trunk_left ){
                            var this_tile = 'bm';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_left &&  side_trunk_left ){
                            var this_tile = 'br';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_left &&  side_trunk_middle ){
                            var this_tile = 'br';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_trunk_right ){
                            var this_tile = 'bl';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_full &&  side_trunk_left ){
                            var this_tile = 'b';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_full &&  side_trunk_middle ){
                            var this_tile = 'b';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_empty &&  side_trunk_right ){
                            var this_tile = 'sky';
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 

                    }
                    else {                              // this is for the bulk of the tree
                        if ( up_empty && side_empty){
                            var this_tile = discover_empty_empty();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_empty &&  side_bottom ){
                            var this_tile = discover_empty_bottom();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                         else if ( up_full &&  side_full ){
                            var this_tile = discover_full_full();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        }                   
                        else if ( up_full &&  side_top ){
                            var this_tile = discover_full_top();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_empty ){
                            var this_tile = discover_right_empty();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_right &&  side_bottom ){
                            var this_tile = discover_right_bottom();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_left &&  side_full ){
                            var this_tile = discover_left_full();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                        else if ( up_left &&  side_top ){
                            var this_tile = discover_left_top();
                            var tile = '<div id="' + i + '_' + x +'" class="' + this_tile + '"></div>';
                            grid_row.append(tile);
                            tiles[x] = this_tile;
                        } 
                    }
                }
            }
            rows[i] = tiles;
        }

        $('#grid').append(grid_row);

    }

});
