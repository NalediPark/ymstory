var page = new Page();

page.text = `
내가 백신으로 살려준 사람들이 감사하다며 나를 영웅으로 모셨고 국가에서는 나와 박사님, 백신을 함께 배포한 사람 들 에게 용감한시민상과 포상금을 주었다.
`;

page.addChoice(new Choice('불꽃놀이를 보러간다', 18));
page.addChoice(new Choice('노을을 보러간다.', 17));

window.book.addPage(16, page);
