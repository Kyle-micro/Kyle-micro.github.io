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

function playDates(interval) {
    let currentDate = new Date(document.getElementById("datePicker").value);
    const endDate = new Date("2022-11-27");

    const timer = setInterval(() => {
        if (currentDate <= endDate) {
            const formattedDate = currentDate.toISOString().slice(0, 10);
            const targetHtml = 'Network_html/' + formattedDate.split("-").join("-") + ".html";
            window.open(targetHtml, "_blank");

            currentDate.setDate(currentDate.getDate() + 1);
            document.getElementById("datePicker").value = formattedDate;
        } else {
            clearInterval(timer);
        }
    }, interval);
}


document.getElementById("playDates").addEventListener("click", function () {
    const interval = 1000; // 時間間隔，以毫秒為單位，您可以根據需要調整此值
    playDates(interval);
});




