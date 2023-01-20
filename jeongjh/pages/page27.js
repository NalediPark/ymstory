var page = new Page();

page.text = `
놀랐어? 하지만 경고를 무시한 건 너잖아?
2번 가지고 이러는 건 억지라고 생각하지마
니가 날 이렇게 만들었고....
넌 이 세 계 의 사 람 둘 을 죽 인 거 니 까
`;

page.addChoice(new Choice('. . .', 28));

window.book.addPage(27, page);
