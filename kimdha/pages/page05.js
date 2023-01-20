var page = new Page();

page.text = `
게임을 먼저하면 엄크한테 많이 혼날것같다.
나는 엄크가 너무 무섭다.
다들 엄크는 무서워 할것이다.
`;

page.addChoice(new Choice('게임', 3));
page.addChoice(new Choice('게임', 0));

window.book.addPage(5, page);
