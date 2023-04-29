document.getElementById('submitDate').addEventListener('click', function() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        const formattedDate = selectedDate.split('-').join('-');
        const targetHtml = 'Network_html/' + formattedDate + '.html';

        // 计算新窗口的大小和位置
        const width = window.innerWidth * 0.9;
        const height = window.innerHeight * 0.9;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        // 使用 window.open() 在新窗口中打开HTML文件，并设置窗口的大小和位置
        window.open(
            targetHtml,
            '_blank',
            `width=${width},height=${height},left=${left},top=${top}`
        );
    } else {
        alert('請選擇一個日期');
    }
});



