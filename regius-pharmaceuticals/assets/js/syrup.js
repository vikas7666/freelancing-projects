const items = [
    {
        path: 'assets/img/syrup/syrup1.jpg',
        name: 'Terbutaline Sulphate, Bromhexine Hydrochloride, Guaiphenesin & Menthol Syrup',
        quaninty: 'Regipod-50 Dry Syrup',
        html: 'syrup-details1.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup2.jpg',
        name: 'Cefpodoxime Proxetil for Oral Suspension IP',
        quaninty: 'Regipod-50 Dry Syrup',
        html: 'syrup-details2.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup3.jpg',
        name: 'Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate',
        quaninty: 'Regikuf-DX Syrup',
        html: 'syrup-details3.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup4.jpg',
        name: 'Lycopene, Methylcobalamin, Multivitamin, Multimineral & Antioxidant Syrup, Phenylephrine Hydrochloride & Chlorpheniramine Maleate',
        quaninty: 'Regikuf-DX Syrup',
        html: 'syrup-details4.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup5.jpg',
        name: 'Levosalbutamol, Ambroxol Hydrochloride & Guaiphenesin Syrup',
        quaninty: 'Regikuf-LS Syrup',
        html: 'syrup-details5.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup6.jpg',
        name: 'Levosalbutamol, Ambroxol Hydrochloride & Guaiphenesin Syrup ',
        quaninty: 'Regikuf-LS Syrup',
        html: 'syrup-details6.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup7.jpg',
        name: 'Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup',
        quaninty: 'Regikuf-DX Syrup',
        html: 'syrup-details7.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup8.jpg',
        name: 'Terbutaline Sulphate, Ambroxol Hydrochloride, Menthol & Guaiphenesin Syrup Syrup, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup',
        quaninty: 'Regikuf AM Syrup',
        html: 'syrup-details7.html',
        type: 'syrup'
    },
    {
        path: 'assets/img/syrup/syrup8.jpg',
        name: 'Amoxycillin & Potassium Clavulanate Oral Suspension I.P.',
        quaninty: 'Regiclav-Cv',
        html: 'syrup-details8.html',
        type: 'syrup'
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