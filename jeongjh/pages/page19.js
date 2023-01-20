var page = new Page();

page.text = `
그렇게 당신은 모두를 설득해가며 나아갔다
`;

page.addChoice(new Choice('마지막', 23));

window.book.addPage(19, page);
