var page = new Page();

page.text = `
당신은 군대에 가야 합니다.
군대에서 일할겁니까,다른 직장을 구할 겁니까?
`;

page.addChoice(new Choice('군대', 4));
page.addChoice(new Choice('직장', 5));

window.book.addPage(2, page);
