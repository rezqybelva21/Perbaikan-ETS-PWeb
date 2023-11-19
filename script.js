$(document).ready(function () {
    var mockupData = {
        "link": "https://www.antaranews.com/berita/3830646/relawan-solata-deklarasikan-dukungan-kepada-ganjar-mahfud",
        "title": "Relawan Solata deklarasikan dukungan kepada Ganjar-Mahfud",
        "pubDate": "2023-11-19T11:27:29.000Z",
        "description": "Relawan Solata yang terdiri dari masyarakat etnis Toraja mendeklarasikan dukungan kepada capres/cawapres Ganjar-Mahfud dalam Pemilu 2024. Wakil Ketua Tim Pemenangan Nasional (TPN) ...",
        "thumbnail": "https://img.antaranews.com/cache/800x533/2023/11/19/IMG_20231119_143911.jpg"
    };
    var firstCardHtml = `
        <div class="col-md-4">
            <div class="card text-center mb-3 shadow-sm" style="width: 24rem;">
                <img src="${mockupData.thumbnail}" class="card-img-top" alt="${mockupData.title}">
                <div class="card-body">
                    <h5 class="card-title">${mockupData.title}</h5>
                    <p class="card-text">${mockupData.description}</p>
                    <a href="${mockupData.link}" class="btn btn-danger">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>`;
    $('#beritaList').append(firstCardHtml);

    $.ajax({
        url: 'https://api-berita-indonesia.vercel.app/antara/politik/', 
        method: 'GET',
        success: function (data) {
            if (data.success) {
                data.data.posts.forEach(function (post) {
                    var cardHtml = `
                        <div class="col-md-4">
                            <div class="card text-center mb-3 shadow-sm" style="width: 24rem;">
                                <img src="${post.thumbnail}" class="card-img-top" alt="${post.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.description}</p>
                                    <a href="${post.link}" class="btn btn-danger">Lihat Selengkapnya</a>
                                </div>
                            </div>
                        </div>`;
                    $('#beritaList').append(cardHtml);
                });
            } else {
                console.error('Error fetching data from the API');
            }
        },
        error: function (error) {
            console.error('Error fetching data from the API', error);
        }
    });
});
