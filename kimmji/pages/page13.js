var page = new Page();

page.text = `
ERROR
!@#$%^&**&%^
&*()&*^**_
(HIDDEN END)
`;

page.addChoice(new Choice('리셋', 0));
page.addChoice(new Choice('reset', 0));

window.book.addPage(13, page);
