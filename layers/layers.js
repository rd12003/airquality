var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_MapadePM25_2 = new ol.layer.Image({
                            opacity: 0.6,
                            title: "Mapa de PM2.5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapadePM25_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9930381.389442, 1541552.366255, -9929631.429106, 1542500.702894]
                            })
                        });
var format_ContornosdePM25_3 = new ol.format.GeoJSON();
var features_ContornosdePM25_3 = format_ContornosdePM25_3.readFeatures(json_ContornosdePM25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContornosdePM25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContornosdePM25_3.addFeatures(features_ContornosdePM25_3);
var lyr_ContornosdePM25_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContornosdePM25_3, 
                style: style_ContornosdePM25_3,
                interactive: true,
                title: '<img src="styles/legend/ContornosdePM25_3.png" /> Contornos de PM2.5'
            });
var lyr_MapadePM10_4 = new ol.layer.Image({
                            opacity: 0.6,
                            title: "Mapa de PM10",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapadePM10_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9930381.389442, 1541552.366255, -9929631.429106, 1542500.702894]
                            })
                        });
var format_ContornosdePM10_5 = new ol.format.GeoJSON();
var features_ContornosdePM10_5 = format_ContornosdePM10_5.readFeatures(json_ContornosdePM10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContornosdePM10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContornosdePM10_5.addFeatures(features_ContornosdePM10_5);
var lyr_ContornosdePM10_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContornosdePM10_5, 
                style: style_ContornosdePM10_5,
                interactive: true,
                title: '<img src="styles/legend/ContornosdePM10_5.png" /> Contornos de PM10'
            });
var lyr_Mapadetemperatura_6 = new ol.layer.Image({
                            opacity: 0.6,
                            title: "Mapa de temperatura",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mapadetemperatura_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9930381.389442, 1541552.366255, -9929631.429106, 1542500.702894]
                            })
                        });
var format_Contornosdetemperatura_7 = new ol.format.GeoJSON();
var features_Contornosdetemperatura_7 = format_Contornosdetemperatura_7.readFeatures(json_Contornosdetemperatura_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornosdetemperatura_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornosdetemperatura_7.addFeatures(features_Contornosdetemperatura_7);
var lyr_Contornosdetemperatura_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornosdetemperatura_7, 
                style: style_Contornosdetemperatura_7,
                interactive: true,
                title: '<img src="styles/legend/Contornosdetemperatura_7.png" /> Contornos de temperatura'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MapadePM25_2.setVisible(true);lyr_ContornosdePM25_3.setVisible(true);lyr_MapadePM10_4.setVisible(true);lyr_ContornosdePM10_5.setVisible(true);lyr_Mapadetemperatura_6.setVisible(true);lyr_Contornosdetemperatura_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_MapadePM25_2,lyr_ContornosdePM25_3,lyr_MapadePM10_4,lyr_ContornosdePM10_5,lyr_Mapadetemperatura_6,lyr_Contornosdetemperatura_7];
lyr_ContornosdePM25_3.set('fieldAliases', {'PM2.5': 'PM2.5', });
lyr_ContornosdePM10_5.set('fieldAliases', {'PM10': 'PM10', });
lyr_Contornosdetemperatura_7.set('fieldAliases', {'Temperatura': 'Temperatura', });
lyr_ContornosdePM25_3.set('fieldImages', {'PM2.5': 'TextEdit', });
lyr_ContornosdePM10_5.set('fieldImages', {'PM10': 'TextEdit', });
lyr_Contornosdetemperatura_7.set('fieldImages', {'Temperatura': 'TextEdit', });
lyr_ContornosdePM25_3.set('fieldLabels', {'PM2.5': 'inline label', });
lyr_ContornosdePM10_5.set('fieldLabels', {'PM10': 'inline label', });
lyr_Contornosdetemperatura_7.set('fieldLabels', {'Temperatura': 'inline label', });
lyr_Contornosdetemperatura_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});