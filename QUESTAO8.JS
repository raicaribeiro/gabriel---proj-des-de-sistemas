function findBookIndex(catalog, bookTitle) {
    const index = catalog.indexOf(bookTitle);
    return index !== -1 ? index : "Livro não encontrado";
}
