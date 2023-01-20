var page = new Page();

page.text = `
막상 이렇게 되니 심심합니다.
옆에 스마트폰이 있네요.
스마트폰을 하고 잘까요?
`;

page.addChoice(new Choice('스마트폰 하고 자기', 9));
page.addChoice(new Choice('그냥 자기', 6));

window.book.addPage(8, page);
