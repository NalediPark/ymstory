var page = new Page();

page.text = `
1탄:당신은 19세,당신의 선택은?
2탄:즐거운 가족여행!당신의 선택은?
유현승
`;

page.addChoice(new Choice('1탄 시작하기', 1));
page.addChoice(new Choice('2탄 시작하기', 8));

window.book.addPage(0, page);
