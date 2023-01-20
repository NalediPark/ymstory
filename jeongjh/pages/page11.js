var page = new Page();

page.text = `
한 번만 더 이 짓을 했다간 정신을 차리지 못할것 같다

왼쪽으로 가자
`;

page.addChoice(new Choice('왼쪽으로 간다.', 42));

window.book.addPage(11, page);
