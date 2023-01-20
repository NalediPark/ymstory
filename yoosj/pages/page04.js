var page = new Page();

page.text = `
첫 번째 질문
Q.1 친구가 같이 놀자고한다 당신의 선택은?
`;

page.addChoice(new Choice('숙제는 나중에', 6));
page.addChoice(new Choice('숙제부터 해야지', 5));

window.book.addPage(4, page);
