var page = new Page();

page.text = `
어떻게 나갈거냐
`;

page.addChoice(new Choice('넘어간다', 13));
page.addChoice(new Choice('원펀치!?', 14));

window.book.addPage(12, page);
