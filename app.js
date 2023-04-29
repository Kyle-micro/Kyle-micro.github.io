document.getElementById('submitDate').addEventListener('click', function() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        const formattedDate = selectedDate.split('-').join('-');
        const targetHtml = 'Network_html/' + formattedDate + '.html';

        // 使用 window.open() 在新窗口中打开HTML文件
        window.open(targetHtml, '_blank');
    } else {
        alert('請選擇一個日期');
    }
});


