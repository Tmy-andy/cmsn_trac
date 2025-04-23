// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cake = document.getElementById("birthday-cake");
    const codePage = document.getElementById("code-page");
    const wishesPage = document.getElementById("birthday-wishes");
    const answerInput = document.getElementById("answer");
    const submitButton = document.getElementById("submit-answer");

    // Hiển thị bánh sinh nhật
    cake.classList.remove("hidden");
    cake.classList.add("fade-in");

    // Sau 5 giây, tắt nến và chuyển trang
    setTimeout(() => {
        const candles = document.querySelectorAll(".candle");
        candles.forEach(candle => {
            candle.classList.add("fade-out");
        });

        cake.classList.add("fade-out");
        setTimeout(() => {
            cake.classList.add("hidden");
            cake.classList.remove("fade-in", "fade-out");

            codePage.classList.remove("hidden");
            codePage.classList.add("fade-in");
        }, 1200);
    }, 3000);

    // Kiểm tra đáp án
    submitButton.addEventListener("click", function () {
        const correctAnswer = "CMSN TRÁC"; // Thay đổi mật khẩu ở đây
        if (answerInput.value.trim().toUpperCase() === correctAnswer) {
            Swal.fire({
                title: '🎉 Chính xác!',
                text: 'Chuẩn bị nhận quà nè!',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                background: '#e0f7fa',
                color: '#00695c',
                timerProgressBar: true
            });
        
            setTimeout(() => {
                codePage.classList.add("fade-out");
                setTimeout(() => {
                    codePage.classList.add("hidden");
                    wishesPage.classList.remove("hidden");
                    wishesPage.classList.add("fade-in");
                }, 600);
            }, 3000); // chuyển sau 3 giây
        }
         else {
            Swal.fire({
                title: 'Nuh-uh~ 😢',
                text: 'Thử dấu cách và viết dấu xem? Nhớ CAPSLOCK nhé',
                icon: 'error',
                confirmButtonText: 'OK nè 💪',
                background: '#fff0f6',
                color: '#d81b60',
                confirmButtonColor: '#f06292',
                backdrop: `
                  rgba(248,187,208,0.4)
                  url("https://media.giphy.com/media/10dU7AN7xsi1I4/giphy.gif")
                  left top
                  no-repeat
                `,
                customClass: {
                  popup: 'rounded-popup'
                }
              });
              
            
        }
    });
});