var page = new Page();

page.text = `
제목: 당신은 용사!
용과 싸워 이기기 위해 신중히 선택하십시오.
만든이:서정우

`;

page.addChoice(new Choice('시작', 1));

window.book.addPage(0, page);
