var page = new Page();

page.text = `
색이 다른 앝은 강이 있다
어느 쪽으로 갈까?
`;

page.addChoice(new Choice('왼쪽', 14));
page.addChoice(new Choice('오른쪽', 44));

window.book.addPage(42, page);
