jTableCheckbox
==============

jQuery Plugin for Table rows acting as Checkboxes.
#### What is it?
jTableCheckbox turns each table row into a large checkbox.  
  
[Demo](http://jtablecheckbox.chrisbradbury.net "jTableCheckbox Demo")
#### How do I use it?
1. Include [jQuery](http://jquery.com/ "jQuery") followed by `jQuery.jTableCheckbox.js`. There is also a minified script included.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jQuery.jTableCheckbox.min.js"></script>
```
2. Add `data-jtable="xx"` to the first `td` of each row in your table. jTableCheckbox uses the `data-jtable` attribute in the checkbox for form submission.
```html
<table><tbody><tr>
        <td data-jtable="row-1"></td>
    </tr><tr>
        <td data-jtable="row-2"></td>
</tr></tbody></table>
```
3. jTableCheckbox adds a class of `active` to a row that has been checked. So probably best to include some css for this class. Nice to include a hover on the row too. And a pointer cursor.
```css
table tbody tr.active{
    background-color: #123456;
    color: #d6e6f6;
}
table tbody tr:hover{
    background-color: #091b2c;
    color: #d6e6f6;
}
table tbody{
    cursor: pointer;
}
```
4. Finally, apply jTableCheckbox to your table.
```javascript
$('table').jTableCheckbox();
```
#### Are there any options?
Yes, there are. These are the default options.
```javascript
$('table').jTableCheckbox({
    checkBoxName: 'check',            //-- name given to the checkboxes ie name="check[]"
    showCheckboxes: false,            //-- do you want to show the checkboxes in the table?
    showTicks: true,                  //-- do you want to display ticks in a far left column for selected rows?
    showTickValue: '&#10003;',        //-- html of the tick. can also accept <i class="icon-*"></i>
    showTickHeader: '&nbsp;',         //-- text to go in heading of tick column
    showTickWidth: 30                 //-- width of the tick column. stops it collapsing
});
```
#### Anything else?
Not really, no. It's been tested on all major (and vintage) browsers. Also works on a mobile device.  
Any issues or suggestions, let me know [@chrisbradbury](https://twitter.com/chrisbradbury)
