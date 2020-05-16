// SET WINDOW TITLE
export function setDocumentTitle(title) {
    document.title = title;
}

// FORMAT PRICE FOR OUTPUT
export function formatPrix(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}