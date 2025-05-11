var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AreaMangrove_1 = new ol.format.GeoJSON();
var features_AreaMangrove_1 = format_AreaMangrove_1.readFeatures(json_AreaMangrove_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaMangrove_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaMangrove_1.addFeatures(features_AreaMangrove_1);
var lyr_AreaMangrove_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaMangrove_1, 
                style: style_AreaMangrove_1,
                popuplayertitle: 'Area Mangrove',
                interactive: true,
                title: '<img src="styles/legend/AreaMangrove_1.png" /> Area Mangrove'
            });
var format_JalanLokal_2 = new ol.format.GeoJSON();
var features_JalanLokal_2 = format_JalanLokal_2.readFeatures(json_JalanLokal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_2.addFeatures(features_JalanLokal_2);
var lyr_JalanLokal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_2, 
                style: style_JalanLokal_2,
                popuplayertitle: 'Jalan Lokal',
                interactive: false,
                title: '<img src="styles/legend/JalanLokal_2.png" /> Jalan Lokal'
            });
var format_BatasDusun_3 = new ol.format.GeoJSON();
var features_BatasDusun_3 = format_BatasDusun_3.readFeatures(json_BatasDusun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_3.addFeatures(features_BatasDusun_3);
var lyr_BatasDusun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_3, 
                style: style_BatasDusun_3,
                popuplayertitle: 'Batas Dusun',
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_3.png" /> Batas Dusun'
            });
var format_RelKereta_4 = new ol.format.GeoJSON();
var features_RelKereta_4 = format_RelKereta_4.readFeatures(json_RelKereta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RelKereta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelKereta_4.addFeatures(features_RelKereta_4);
var lyr_RelKereta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RelKereta_4, 
                style: style_RelKereta_4,
                popuplayertitle: 'Rel Kereta',
                interactive: true,
                title: '<img src="styles/legend/RelKereta_4.png" /> Rel Kereta'
            });
var format_PotesiWisataBerbasisKonservasi_5 = new ol.format.GeoJSON();
var features_PotesiWisataBerbasisKonservasi_5 = format_PotesiWisataBerbasisKonservasi_5.readFeatures(json_PotesiWisataBerbasisKonservasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotesiWisataBerbasisKonservasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotesiWisataBerbasisKonservasi_5.addFeatures(features_PotesiWisataBerbasisKonservasi_5);
var lyr_PotesiWisataBerbasisKonservasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotesiWisataBerbasisKonservasi_5, 
                style: style_PotesiWisataBerbasisKonservasi_5,
                popuplayertitle: 'Potesi Wisata Berbasis Konservasi',
                interactive: true,
    title: 'Potesi Wisata Berbasis Konservasi<br />\
    <img src="styles/legend/PotesiWisataBerbasisKonservasi_5_0.png" /> Wisata Alam<br />\
    <img src="styles/legend/PotesiWisataBerbasisKonservasi_5_1.png" /> Wisata Edukasi<br />\
    <img src="styles/legend/PotesiWisataBerbasisKonservasi_5_2.png" /> Wisata Rekreasi<br />\
    <img src="styles/legend/PotesiWisataBerbasisKonservasi_5_3.png" /> Wisata Religi<br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_AreaMangrove_1.setVisible(true);lyr_JalanLokal_2.setVisible(true);lyr_BatasDusun_3.setVisible(true);lyr_RelKereta_4.setVisible(true);lyr_PotesiWisataBerbasisKonservasi_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_AreaMangrove_1,lyr_JalanLokal_2,lyr_BatasDusun_3,lyr_RelKereta_4,lyr_PotesiWisataBerbasisKonservasi_5];
lyr_AreaMangrove_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KETERANGAN': 'KETERANGAN', });
lyr_JalanLokal_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_BatasDusun_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Dusun': 'Dusun', 'Batas_RW': 'Batas_RW', 'Luas_1': 'Luas_1', 'J_Penduduk': 'J_Penduduk', 'JP_LK': 'JP_LK', 'JP_PR': 'JP_PR', 'U_15_11': 'U_15_11', 'U_12_60': 'U_12_60', 'U___60': 'U___60', 'Disabilita': 'Disabilita', 'p_p__600': 'p_p__600', 'J_Pengangg': 'J_Pengangg', 'Rasio_Jeni': 'Rasio_Jeni', 'Rasio_Kepa': 'Rasio_Kepa', 'Rasio_PM': 'Rasio_PM', 'Rasio_Umur': 'Rasio_Umur', 'Rasio_Disa': 'Rasio_Disa', 'IKS': 'IKS', });
lyr_RelKereta_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_PotesiWisataBerbasisKonservasi_5.set('fieldAliases', {'Title': 'Title', 'Jenis_Wisa': 'Jenis_Wisa', });
lyr_AreaMangrove_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_JalanLokal_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_BatasDusun_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Dusun': 'TextEdit', 'Batas_RW': 'TextEdit', 'Luas_1': 'TextEdit', 'J_Penduduk': 'TextEdit', 'JP_LK': 'TextEdit', 'JP_PR': 'TextEdit', 'U_15_11': 'TextEdit', 'U_12_60': 'Range', 'U___60': 'TextEdit', 'Disabilita': 'TextEdit', 'p_p__600': 'TextEdit', 'J_Pengangg': 'TextEdit', 'Rasio_Jeni': 'TextEdit', 'Rasio_Kepa': 'TextEdit', 'Rasio_PM': 'TextEdit', 'Rasio_Umur': 'TextEdit', 'Rasio_Disa': 'TextEdit', 'IKS': 'TextEdit', });
lyr_RelKereta_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_PotesiWisataBerbasisKonservasi_5.set('fieldImages', {'Title': 'TextEdit', 'Jenis_Wisa': 'TextEdit', });
lyr_AreaMangrove_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'KETERANGAN': 'header label - visible with data', });
lyr_JalanLokal_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_BatasDusun_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Dusun': 'no label', 'Batas_RW': 'no label', 'Luas_1': 'no label', 'J_Penduduk': 'no label', 'JP_LK': 'no label', 'JP_PR': 'no label', 'U_15_11': 'no label', 'U_12_60': 'no label', 'U___60': 'no label', 'Disabilita': 'no label', 'p_p__600': 'no label', 'J_Pengangg': 'no label', 'Rasio_Jeni': 'no label', 'Rasio_Kepa': 'no label', 'Rasio_PM': 'no label', 'Rasio_Umur': 'no label', 'Rasio_Disa': 'no label', 'IKS': 'no label', });
lyr_RelKereta_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'other_tags': 'no label', });
lyr_PotesiWisataBerbasisKonservasi_5.set('fieldLabels', {'Title': 'inline label - visible with data', 'Jenis_Wisa': 'inline label - visible with data', });
lyr_PotesiWisataBerbasisKonservasi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});