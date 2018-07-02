$(function() {
    $('.header_container .search').on('click', function() {
        const inputSearch = $('.prompt').val()
        if (!inputSearch) return;

        console.log(inputSearch)
        $('#search-form').submit()
    })
});