var page = new Page();

page.text = `
헌병에게 잡혔다.
`;

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(5, page);
