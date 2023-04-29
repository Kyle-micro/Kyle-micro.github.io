document.getElementById('submitDate').addEventListener('click', function() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        const formattedDate = selectedDate.split('-').join('-');
        const targetHtml = 'Network_html/' + formattedDate + '.html';


        fetch(targetHtml)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('找不到指定日期的檔案');
                }
            })
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => {
                alert(error.message);
            });
    } else {
        alert('請選擇一個日期');
    }
});
