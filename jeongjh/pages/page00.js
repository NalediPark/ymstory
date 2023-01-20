var page = new Page();

page.text = `
안녕하세요.
개발자:정지홍
게임 제목:PANTAGEA
히든루트 찍어야 맞출수있을꺼다
`;

page.addChoice(new Choice('시작하기', 1));

window.book.addPage(0, page);
