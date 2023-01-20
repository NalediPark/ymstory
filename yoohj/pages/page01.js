var page = new Page();

page.text = `
난 용사이다.
넌 일반스테이지를 할래 아니면 보스를 도전할래?
니가 결정해줘.
`;

page.addChoice(new Choice('일반 스테이지', 2));
page.addChoice(new Choice('보스 도전', 5));

window.book.addPage(1, page);
