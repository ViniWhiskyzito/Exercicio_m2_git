$(document).ready(function() {
    $('#add-task').click(function(event) {
        event.preventDefault();
        const taskName = $('#task-input').val();
        if (taskName) {
            const listItem = $('<li></li>').text(taskName);
            listItem.click(function() {
                $(this).toggleClass('completed');
            });
            $('#task-list').append(listItem);
            $('#task-input').val('');
        }
    });
});
