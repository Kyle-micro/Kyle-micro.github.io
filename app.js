document.getElementById('submitDate').addEventListener('click', function() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        const formattedDate = selectedDate.split('-').join('-');
        const targetHtml = 'Network_html/' + formattedDate + '.html';

        // 使用iframe載入HTML
        const iframe = document.createElement('iframe');
        iframe.src = targetHtml;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(iframe);
    } else {
        alert('請選擇一個日期');
    }
});
