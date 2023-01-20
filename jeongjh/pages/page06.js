var page = new Page();

page.text = `
갑자기 당신 앞에 검이 나타났다

어떡할까
`;

page.addChoice(new Choice('공격', 7));
page.addChoice(new Choice('설득', 8));

window.book.addPage(6, page);
