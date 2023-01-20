var page = new Page();

page.text = `
논다.
나가려는데 눈치 백단 엄마가 PC방 가라며 준 돈이 아니라며 1000원을 뺏었다.
`;

page.addChoice(new Choice('다음', 14));

window.book.addPage(13, page);
