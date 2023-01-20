var page = new Page();

page.text = `
당신은 평범하게 생일 준비를 했다

노멀앤딩:평범한하루
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(31, page);
