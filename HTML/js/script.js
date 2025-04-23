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
    function checkAnswer() {
        const correctAnswer = "CMSN TRÁC";
        if (answerInput.value.trim().toUpperCase() === correctAnswer) {
            Swal.fire({
                title: '🎉 Chính xác!',
                html: `
                    <p>Chuẩn bị nhận quà nè!</p>
                    <div style="margin-top: 15px; font-size: 24px; font-weight: bold; color: #388e3c; background: #e8f5e9; padding: 10px 20px; border-radius: 12px; display: inline-block; box-shadow: 0 0 8px rgba(0,0,0,0.15);">
                        CHÚC MỪNG SINH NHẬT TRÁC ❤️
                    </div>
                `,
                icon: 'success',
                showConfirmButton: false,
                timer: 4000,
                background: '#e0f7fa',
                color: '#00695c',
                timerProgressBar: true
            });
    
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }, 500);
    
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
    }
    submitButton.addEventListener("click", checkAnswer);

    answerInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
        

    // --- Slideshow logic ---
    const slideImages = [
        "Image/Chúc/IMG_20250423_000927.jpg",
        "Image/Chúc/IMG_20250423_234627.jpg",
        "Image/Chúc/IMG_1745395066610_1745425491431.jpg",
        "Image/Chúc/Messenger_creation_7EF8903F-35C8-4BCE-BD96-9F8D3E3A35F4.jpg",
        "Image/Chúc/Messenger_creation_B0080B6A-8CAC-4DBE-9A83-978DE4E55D65.jpg",
        "Image/Chúc/Thiệp sinh nhật Trác.png"
    ];

    let currentSlide = 0;

    function updateSlide() {
        document.getElementById("slide-image").src = slideImages[currentSlide];
    }

    document.getElementById("next-btn").addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slideImages.length;
        updateSlide();
    });

    document.getElementById("prev-btn").addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
        updateSlide();
    });

    document.getElementById("download-btn").addEventListener("click", function () {
        const downloadLink = document.createElement('a');
        downloadLink.href = document.getElementById("slide-image").src;
        downloadLink.download = "image.jpg";
        downloadLink.click();
    });

    updateSlide(); // Cập nhật slide ban đầu
    const goToTextBtn = document.getElementById("go-to-text-wishes");
    const textWishesPage = document.getElementById("text-wishes");

    goToTextBtn.addEventListener("click", () => {
        Swal.fire({
            title: 'Chắc chưa? 🤔',
            text: 'Bạn đã xem hết ảnh chưa đó?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Rồi! Cho xem lời chúc 💌',
            cancelButtonText: 'Để xem tiếp ảnh 🎨',
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#f44336',
            background: '#fffbea',
            color: '#5d4037'
        }).then((result) => {
            if (result.isConfirmed) {
                wishesPage.classList.add("fade-out");
                setTimeout(() => {
                    wishesPage.classList.add("hidden");
                    textWishesPage.classList.remove("hidden");
                    textWishesPage.classList.add("fade-in");
                }, 600);
            }
        });
    });
    
});
