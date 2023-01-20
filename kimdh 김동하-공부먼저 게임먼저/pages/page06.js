var page = new Page();

page.text = `
계속 공부를 먼저해야 할것 같아.
공부 먼저?가 계속생각 난다.
`;

page.addChoice(new Choice('결심', 0));
page.addChoice(new Choice('결심', 7
));

window.book.addPage(6, page);
