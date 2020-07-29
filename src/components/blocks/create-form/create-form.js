$('.dropdown__active').click(function() {
    const parent = $(this).parent();
    const list = parent.find('.dropdown__list');

    toggleList(list);
});

$('.dropdown__item').click(function() {
    const parent = $(this).parent();
    if(!parent.hasClass('dropdown__list')) {
       return;
    }
    
    const teg = $(this);
    const nameTag = teg.text();
    const activeTag = parent.parent().find('.dropdown__active');
    const support = activeTag.text();
    activeTag.text(nameTag);
    teg.text(support);

    toggleList(parent);
});

function toggleList(list) {
    if (list.css('display') === 'none') {
        list.css('display', 'block');
    } else {
        list.css('display', 'none');
    }
};