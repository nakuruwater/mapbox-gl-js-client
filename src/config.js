const version = 0.2;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    attribution : '©NAWASSCO,Ltd.',
    styles : [
        //{ title: 'Street', uri: 'mapbox://styles/narwassco/cka9n3gdl2jwh1ioa2zsowqn5',}, 
        //{ title: 'Satellite', uri: 'mapbox://styles/narwassco/ck9ringpx01bk1iq8q4xvknjx',},
        { title: 'Street', uri: `https://nakuruwater.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
        { title: 'Satellite', uri: `https://nakuruwater.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`,},
        { title: 'UN Vector Tile', uri: `https://nakuruwater.github.io/mapbox-stylefiles/unvt/style.json?version=${version}`,},
    ],
    center: [36.1257,-0.2777],
    zoom: 10,
    search:{
        url: 'https://nakuruwater.github.io/vt/accounts.geojson',
        target: ['accountno', 'serialno'],
        format: (p) => {return `A/C: ${p.accountno}, S/N: ${p.serialno}`},
        place_type: ['accounts'],
        placeholder: 'Search A/C No or S/N',
        zoom: 17,
    },
    popup: {
        target: [
            // "zones",
            // "plots",
            // "waterworks",
            "pipeline",
            // "plots-annotation",
            "reservoirs",
            "boreholes",
            "pump-stations",
            // "man-holes",
            "pipeline_annotation",
            // "zone-annotation",
            // "waterworks-annotation",
            "nawassco-blkmtr",
            "public-toilet",
            "toilets",
            "accounts"
        ]
    },
    // areaSwitcher: {
    //     areas : [
    //         {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
    //         {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
    //         {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
    //         {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
    //     ]
    // },
    legend:{
        targets:{
            "zones": 'Zone',
            "plots": 'Plot',
            "waterworks": 'Waterworks',
            "pipeline": 'Pipeline',
            "reservoirs": 'Reservoirs',
            "boreholes": 'Boreholes',
            "pump-stations": 'Pumping Stations',
            "man-holes": 'Manholes',
            "nawassco-blkmtr": 'Bulk meter',
            "public-toilet": 'Public toilet',
            "toilets": 'Toilets',
            "accounts": 'Accounts'
        }
    }
}