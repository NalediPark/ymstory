var page = new Page();

page.text = `

정상까지 갈까 그냥 내려갈까?
`;

page.addChoice(new Choice('정상까지 간다', 4));
page.addChoice(new Choice('그냥 내려간다', 5));

window.book.addPage(2, page);
