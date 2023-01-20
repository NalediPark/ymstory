var page = new Page();

page.text = `
"오늘 운동회야.
왜 안 왔니?"
잊고 있었네요!!!
(BAD END)
`;

page.addChoice(new Choice('처음부터', 0));
page.addChoice(new Choice('이전 단계', 6));

window.book.addPage(7, page);
