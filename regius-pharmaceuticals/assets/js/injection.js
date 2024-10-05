const items = [
    {
        path: 'assets/img/injection/injection1.jpg',
        name: 'Ondansetron Injection I.P',
        quaninty: 'REGIDOL-MR',
        html: 'injection-details1.html',
        type: 'injection'
    },
    {
        path: 'assets/img/injection/injection2.jpg',
        name: 'Methylcobalamin, Pyridoxine HCI. & Niacinamide Injection',
        quaninty: 'Reginuron Injection',
        html: 'injection-details2.html',
        type: 'injection'
    },
    {
        path: 'assets/img/injection/injection3.jpg',
        name: 'Terbutaline Sulphate, Bromhexine Hydrochloride, Guaiphenesin & Menthol Syrup',
        quaninty: 'Reginuron-Gold Injection',
        html: 'injection-details3.html',
        type: 'injection'
    },
]

const renderHtml = (data) => {

    document.querySelector("#myHTMLWrapper").innerHTML = "";
    let submit = document.querySelector("#submit");
    let content = '';

    data.forEach(p => {
        content += `<div id="keyBoard" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="product-grid text-center clearfix" >
                        <div class="item-image">
                            <a href="${p.html}" class="image-wrap">
                            <img src="${p.path}" class="card-img-top img-fluid" alt="${p.name}">
                            </a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title" id="itemName">${p.name}</h5>
                            <span class="item-price" id="itemDesc">${p.quaninty}</span>
                        </div>
                     </div>
                </div>`
    });

    document.querySelector("#myHTMLWrapper").innerHTML = content;
}

renderHtml(items);

document.querySelector("#Input").addEventListener("keyup", (event) => {
    $("#submit").hide();
    if (event.currentTarget.value.length != 0) {
        if (event.currentTarget.value.length >= 3) {
            let filterdata = items.filter((item) => {
                return item.name.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) != -1;
            })
            renderHtml(filterdata);
        }
    } else {
        renderHtml(items);
        $("#submit").show();
    }
})