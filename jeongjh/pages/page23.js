var page = new Page();

page.text = `
문이다...당신의 여정이 끝나려 한다
나갈까?
`;

page.addChoice(new Choice('아니', 25));
page.addChoice(new Choice('응', 26));

window.book.addPage(23, page);
