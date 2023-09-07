ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([266423.062793, 1081928.414129, 411273.425337, 1190360.198605]);
var wms_layers = [];


        var lyr_SatelliteOnly_0 = new ol.layer.Tile({
            'title': 'Satellite Only',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_2 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_KudendaPowerPlant_3 = new ol.format.GeoJSON();
var features_KudendaPowerPlant_3 = format_KudendaPowerPlant_3.readFeatures(json_KudendaPowerPlant_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_KudendaPowerPlant_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KudendaPowerPlant_3.addFeatures(features_KudendaPowerPlant_3);
var lyr_KudendaPowerPlant_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KudendaPowerPlant_3, 
                style: style_KudendaPowerPlant_3,
                interactive: true,
                title: '<img src="styles/legend/KudendaPowerPlant_3.png" /> Kudenda Power Plant'
            });
var format_Radius_4 = new ol.format.GeoJSON();
var features_Radius_4 = format_Radius_4.readFeatures(json_Radius_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Radius_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius_4.addFeatures(features_Radius_4);
var lyr_Radius_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Radius_4, 
                style: style_Radius_4,
                interactive: true,
                title: '<img src="styles/legend/Radius_4.png" /> Radius'
            });
var format_MaximumConsumers_5 = new ol.format.GeoJSON();
var features_MaximumConsumers_5 = format_MaximumConsumers_5.readFeatures(json_MaximumConsumers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MaximumConsumers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaximumConsumers_5.addFeatures(features_MaximumConsumers_5);
var lyr_MaximumConsumers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaximumConsumers_5, 
                style: style_MaximumConsumers_5,
                interactive: true,
                title: '<img src="styles/legend/MaximumConsumers_5.png" /> Maximum Consumers'
            });

lyr_SatelliteOnly_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(false);lyr_KudendaPowerPlant_3.setVisible(true);lyr_Radius_4.setVisible(true);lyr_MaximumConsumers_5.setVisible(true);
var layersList = [lyr_SatelliteOnly_0,lyr_OpenStreetMap_1,lyr_OpenTopoMap_2,lyr_KudendaPowerPlant_3,lyr_Radius_4,lyr_MaximumConsumers_5];
lyr_KudendaPowerPlant_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', });
lyr_Radius_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', 'tessellate': 'tessellate', });
lyr_MaximumConsumers_5.set('fieldAliases', {'NAME': 'NAME', 'x': 'x', 'y': 'y', });
lyr_KudendaPowerPlant_3.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', 'tessellate': '', });
lyr_Radius_4.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', 'KML_FOLDER': '', 'tessellate': '', });
lyr_MaximumConsumers_5.set('fieldImages', {'NAME': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_KudendaPowerPlant_3.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'inline label', });
lyr_Radius_4.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', 'tessellate': 'no label', });
lyr_MaximumConsumers_5.set('fieldLabels', {'NAME': 'inline label', 'x': 'no label', 'y': 'no label', });
lyr_MaximumConsumers_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});