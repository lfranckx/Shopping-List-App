$(function() {
    //listen for form submission
    $("#js-shopping-list-form").submit(function(event) {
        //stop default form submission
        event.preventDefault();
        //get new text value for new item
        const listItem = $("#shopping-list-entry").val();

        //clears the shopping list entry
        $("#shopping-list-entry").val('');

        //add new shopping item
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        );
    });


    //listen to clicks on delete buttons
    //put event listener on parent element <li>
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });

    //listen to clicks on check button
    //put event listener on parent element
    $('.shopping-list').on('click','.shopping-item-toggle', function (event) {
        $(this).closest('li').toggleClass('shopping-item__checked');
    });
});