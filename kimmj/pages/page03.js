var page = new Page();

page.text = `
숙제 끝!
행복한 고민을 했다.
게임? tv?
`;

page.addChoice(new Choice('게임', 4));
page.addChoice(new Choice('tv', 5));

window.book.addPage(3, page);
