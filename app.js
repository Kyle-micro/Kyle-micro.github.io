document.getElementById('submitDate').addEventListener('click', function() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        const formattedDate = selectedDate.split('-').join('-');
        const targetHtml = 'Network_html/' + formattedDate + '.html';

        // 使用 XMLHttpRequest 載入HTML
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const content = document.getElementById('content');
                content.innerHTML = xhr.responseText;

                // 在此處插入一個新的 <script> 標籤以執行HTML中的JavaScript代碼
                const script = document.createElement('script');
                script.innerHTML = content.querySelector('script').innerHTML;
                content.appendChild(script);
            } else if (xhr.readyState === 4) {
                alert('找不到指定日期的檔案');
            }
        };
        xhr.open('GET', targetHtml, true);
        xhr.send();
    } else {
        alert('請選擇一個日期');
    }
});



