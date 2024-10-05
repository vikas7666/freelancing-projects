const items = [{
        path: 'assets/img/tablet/tab1.jpeg',
        name: 'Cefpodoxime Proxetil Dispersible Tablets',
        quaninty: 'Regipod-200 Dt',
        html: 'product-details1.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab2.jpeg',
        name: 'Flupentixol & Melitracen Tablets',
        quaninty: 'DEPGO',
        html: 'product-details2.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab3.jpeg',
        name: 'Levocetirizine + Montelukast',
        quaninty: 'DEGILUS-6',
        html: 'product-details3.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab3.jpeg',
        name: 'Deflazacort Tablet 6mg',
        quaninty: 'DEGILUS-6',
        html: 'product-details4.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab5.jpeg',
        name: 'Ondansetron Tablet IP 4mg',
        quaninty: 'VOMIUS-MD',
        html: 'product-details5.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab6.jpeg',
        name: 'Ofloxacin Tablet IP 200mg',
        quaninty: 'OFLIUS-200',
        html: 'product-details6.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab7.jpeg',
        name: 'Rabeprazole Gastro-resistant Tablets',
        quaninty: 'REBLUS-20',
        html: 'product-details7.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab8.jpeg',
        name: 'RX Levocetirizine Tablet IP 5mg',
        quaninty: 'REGICET-5',
        html: 'product-details8.html',
        type: 'tablets'
    },
    {
        path: 'assets/img/tablet/tab9.jpeg',
        name: 'Aceclofenac ,Paracetamol &Chlorzoxazone Tablets',
        quaninty: 'REGIDOL-MR',
        html: 'product-details9.html',
        type: 'tablets'
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