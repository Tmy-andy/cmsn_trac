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
        const correctAnswer = "HPBD XUÂN";
        if (answerInput.value.trim().toUpperCase() === correctAnswer) {
            Swal.fire({
                title: '🎉 Chính xác!',
                html: `
                    <p>Chuẩn bị nhận quà nè!</p>
                    <div style="margin-top: 15px; font-size: 24px; font-weight: bold; color: #388e3c; background: #e8f5e9; padding: 10px 20px; border-radius: 12px; display: inline-block; box-shadow: 0 0 8px rgba(0,0,0,0.15);">
                        Đáp án: ${correctAnswer}
                    </div>
                `,
                icon: 'success',
                showConfirmButton: false,
                timer: 4000,
                background: '#e0f7fa',
                color: '#00695c',
                timerProgressBar: true
            });

            // Bật hiệu ứng hoa giấy 🎊
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }, 500);

            // Chuyển trang
            setTimeout(() => {
                codePage.classList.add("fade-out");
                setTimeout(() => {
                    codePage.classList.add("hidden");
                    wishesPage.classList.remove("hidden");
                    wishesPage.classList.add("fade-in");
                }, 600);
            }, 4000);
        } else {
            Swal.fire({
                title: 'Nuh-uh~ 😢',
                html: `
                    <p>Thử dấu cách và viết dấu xem? Nhớ CAPSLOCK nha!</p>
                    <img src="https://media.giphy.com/media/10dU7AN7xsi1I4/giphy.gif" alt="sad cat" style="width: 100%; max-width: 250px; margin-top: 12px; border-radius: 8px;" />
                `,
                icon: 'error',
                confirmButtonText: 'OK nè 💪',
                background: '#fff0f6',
                color: '#d81b60',
                confirmButtonColor: '#f06292',
                customClass: {
                    popup: 'rounded-popup'
                }
            });
        }
    });
});
