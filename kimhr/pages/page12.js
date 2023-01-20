var page = new Page();

page.text = `
좀비때문에 다들 문을 많이 두드리네.. 해야할일,,? 그게 뭔지도 모르고 불안한데 열어주지말까? 일단 열어줄까?
`;

page.addChoice(new Choice('불안하니 열지말자', 20));
page.addChoice(new Choice('일단 열어주자', 13));

window.book.addPage(12, page);
