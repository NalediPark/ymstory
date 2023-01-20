var page = new Page();

page.text = `
뭐...상관없어.니 대답은
난 여기 남을거야
그리고 모두를 죽일거야
`;

page.addChoice(new Choice('눌러', 27));

window.book.addPage(21, page);
