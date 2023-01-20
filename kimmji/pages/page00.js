var page = new Page();

page.text = `
7시의 햇빛이 뜨거워 일어납니다.
하지만 계속 자고 싶네요.
어떻게 할까요?
작가: 김명진
지각 게임
`;

page.addChoice(new Choice('시작하기', 1));
page.addChoice(new Choice('누르지 마시오', 13));

window.book.addPage(0, page);
