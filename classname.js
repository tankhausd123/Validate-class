function className(str) {
    regexp = /^[CAP][0-9]{4}[GHIKLM]$/;
    if (regexp.test(str)) {
        alert('true');
    } else {
        alert('false')
    }
}