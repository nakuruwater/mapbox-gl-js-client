const version = 0.2;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    attribution : '©NAWASSCO,Ltd.',
    styles : [
        { title: 'Street(water)', uri: `https://nakuruwater.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
        { title: 'Satellite(water)', uri: `https://nakuruwater.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`,},
        { title: 'Street(sewer)', uri: `https://nakuruwater.github.io/mapbox-stylefiles/street/style_sewer.json?version=${version}`,}, 
        { title: 'Satellite(sewer)', uri: `https://nakuruwater.github.io/mapbox-stylefiles/satellite/style_sewer.json?version=${version}`,},
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
            "waterworks",
            "sewer_twrks",
            "pipeline",
            "sewer_line",
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
    legend:{
        targets:{
            "zones": 'Zone',
            "plots": 'Plot',
            "waterworks": 'Waterworks',
　　　　　　　"sewer_twrks": 'Sewer Waterworks',
            "pipeline": 'Pipeline',
            "sewer_line": 'Sewerline',
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
