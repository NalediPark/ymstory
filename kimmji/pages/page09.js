var page = new Page();

page.text = `
스마트폰을 켜니 시계 사진이 눈에 띕니다.
꿈에 나올 것만 같네요.
지각하는 꿈을 꾸었습니다!
(BAD END)
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('이전 단계', 8));

window.book.addPage(9, page);
