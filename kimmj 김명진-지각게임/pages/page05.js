var page = new Page();

page.text = `
기다리면서 시간이 흐릅니다...
그리고 계속 더워지네요.
너무 덥습니다!
(BAD END)
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('이전 단계', 2));

window.book.addPage(5, page);
