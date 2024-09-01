function toggleVisibility(elementId, action) {
    const $element = $('#' + elementId);

    if (action === 'open' && !$element.is(':visible')) {
        $element.fadeIn('slow');
    } else if (action === 'close' && $element.is(':visible')) {
        $element.fadeOut('slow');
    }
}

function closeCloudsFull() {
    toggleVisibility('cloudscode_full', 'close');
}

function closeRngFull() {
    toggleVisibility('rng_full', 'close');
}

function openCloudsFull() {
    toggleVisibility('cloudscode_full', 'open');
}

function openRngFull() {
    toggleVisibility('rng_full', 'open');
}
