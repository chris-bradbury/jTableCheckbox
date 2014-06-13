(function($) {

    $.fn.jTableCheckbox = function(options){

        //-- set up the defaults --//
        var defaults = { 
            checkboxName : 'check',         //-- the name given to the checkboxes ie name="check[]"
            showCheckboxes : false,         //-- show the checkboxes or not
            showTicks: true,                //-- show ticks in the far right column
            showTickValue: '&#10003;',      //-- value for the ticks default is html tick
            showTickHeader: '&nbsp;',       //-- heading for the ticks column
            showTickWidth: 30               //-- width of the column for ticks
        };

        //-- merge the options --//
        var options = $.extend({}, defaults, options);

        //-- header ticks --//
        $hticks = '';
        if(options.showTicks){

            $hticks = '<th>'+ options.showTickHeader +'</th>';

        }

        //-- add a column to header row --//
        $('thead > tr',this).prepend($hticks + '<th class="jTable-checkboxes">PreCol</th>');

        //-- for each row --//
        $('tbody > tr',this).each(function(index,value){

            //-- the value --//
            $value = $(this).children('td').eq(0).attr('data-jtable');

            //-- setup the checkboxes --//
            $checkboxes = '<input type="checkbox" name="'+options.checkboxName+'[]" value="'+$value+'"/>';

            //-- the ticks --//
            $ticks = '';
            if(options.showTicks){

                $ticks = '<td class="jTable-ticks" width="'+options.showTickWidth+'">&nbsp;</td>';

            }

            //-- the prepend --//
            $prepend = $ticks + '<td class="jTable-checkboxes">'+$checkboxes+'</td>';

            //-- add a column to the start of each row --//
            $(this).prepend($prepend);

        });

        //-- if we've set showCheckboxes = false --//
        if(!options.showCheckboxes){

            $('.jTable-checkboxes').css('display','none');

        }

        //-- capture the click of each row --//
        $('tr',this).on('click',function(event){
            
            //-- if it wasn't a checkbox click --//
            if(event.target.type !== 'checkbox'){

                //-- change the checkbox in this row --//
                $(':checkbox', this).trigger('click');

                //-- if we clicked on a row not a heading --//
                if( $(this).parent().get(0).tagName == 'TBODY' ){

                    //-- add a class of 'active' to the row --//
                    $(this).toggleClass('active');

                }

                //-- are we after ticks? --//
                if(options.showTicks){

                    //-- is the checkbox checked? --/
                    if($('input[type=checkbox]',this).is(':checked')){

                        //-- show a tick --//
                        $('.jTable-ticks',this).html(options.showTickValue);

                    }else{

                        //-- hide the tick --//
                        $('.jTable-ticks',this).html('');

                    }

                }

            }

        });

    }

}(jQuery));