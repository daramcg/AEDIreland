
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "All_Irl_Counties_1": {
            "type": "geojson",
            "data": json_All_Irl_Counties_1
        }
                    ,
        "Munster_2": {
            "type": "geojson",
            "data": json_Munster_2
        }
                    ,
        "Connaught_3": {
            "type": "geojson",
            "data": json_Connaught_3
        }
                    ,
        "Ulster_4": {
            "type": "geojson",
            "data": json_Ulster_4
        }
                    ,
        "Leinster_5": {
            "type": "geojson",
            "data": json_Leinster_5
        }
                    ,
        "All_Ireland24_6": {
            "type": "geojson",
            "data": json_All_Ireland24_6
        }
                    ,
        "Ulster_AEDs_7": {
            "type": "geojson",
            "data": json_Ulster_AEDs_7
        }
                    ,
        "Connaught_AEDs_8": {
            "type": "geojson",
            "data": json_Connaught_AEDs_8
        }
                    ,
        "Munster_AEDs_9": {
            "type": "geojson",
            "data": json_Munster_AEDs_9
        }
                    ,
        "Leinster_AEDs_10": {
            "type": "geojson",
            "data": json_Leinster_AEDs_10
        }
                    ,
        "Tyrone_AEDs_11": {
            "type": "geojson",
            "data": json_Tyrone_AEDs_11
        }
                    ,
        "Fermanagh_AEDs_12": {
            "type": "geojson",
            "data": json_Fermanagh_AEDs_12
        }
                    ,
        "Donegal_AEDs_13": {
            "type": "geojson",
            "data": json_Donegal_AEDs_13
        }
                    ,
        "Armagh_AEDs_14": {
            "type": "geojson",
            "data": json_Armagh_AEDs_14
        }
                    ,
        "Antrim_AEDs_15": {
            "type": "geojson",
            "data": json_Antrim_AEDs_15
        }
                    ,
        "Down_AEDs_16": {
            "type": "geojson",
            "data": json_Down_AEDs_16
        }
                    ,
        "Derry_AEDs_17": {
            "type": "geojson",
            "data": json_Derry_AEDs_17
        }
                    ,
        "Leitrim_AEDs_18": {
            "type": "geojson",
            "data": json_Leitrim_AEDs_18
        }
                    ,
        "Galway_AEDs_19": {
            "type": "geojson",
            "data": json_Galway_AEDs_19
        }
                    ,
        "Mayo_AEDs_20": {
            "type": "geojson",
            "data": json_Mayo_AEDs_20
        }
                    ,
        "Sligo_AEDs_21": {
            "type": "geojson",
            "data": json_Sligo_AEDs_21
        }
                    ,
        "Roscommon_AEDs_22": {
            "type": "geojson",
            "data": json_Roscommon_AEDs_22
        }
                    ,
        "Limerick_AEDs_23": {
            "type": "geojson",
            "data": json_Limerick_AEDs_23
        }
                    ,
        "Clare_AEDs_24": {
            "type": "geojson",
            "data": json_Clare_AEDs_24
        }
                    ,
        "Kerry_AEDs_25": {
            "type": "geojson",
            "data": json_Kerry_AEDs_25
        }
                    ,
        "Cork_AEDs_26": {
            "type": "geojson",
            "data": json_Cork_AEDs_26
        }
                    ,
        "Waterford_AEDs_27": {
            "type": "geojson",
            "data": json_Waterford_AEDs_27
        }
                    ,
        "Tipperary_AEDs_28": {
            "type": "geojson",
            "data": json_Tipperary_AEDs_28
        }
                    ,
        "Wexford_AEDs_29": {
            "type": "geojson",
            "data": json_Wexford_AEDs_29
        }
                    ,
        "Kilkenny_AEDs_30": {
            "type": "geojson",
            "data": json_Kilkenny_AEDs_30
        }
                    ,
        "Carlow_AEDs_31": {
            "type": "geojson",
            "data": json_Carlow_AEDs_31
        }
                    ,
        "Laois_AEDs_32": {
            "type": "geojson",
            "data": json_Laois_AEDs_32
        }
                    ,
        "Offaly_AEDs_33": {
            "type": "geojson",
            "data": json_Offaly_AEDs_33
        }
                    ,
        "Kildare_AEDs_34": {
            "type": "geojson",
            "data": json_Kildare_AEDs_34
        }
                    ,
        "Wicklow_AEDs_35": {
            "type": "geojson",
            "data": json_Wicklow_AEDs_35
        }
                    ,
        "Dublin_AEDs_36": {
            "type": "geojson",
            "data": json_Dublin_AEDs_36
        }
                    ,
        "Meath_AEDs_37": {
            "type": "geojson",
            "data": json_Meath_AEDs_37
        }
                    ,
        "Westmeath_AEDs_38": {
            "type": "geojson",
            "data": json_Westmeath_AEDs_38
        }
                    ,
        "Longford_AEDs_39": {
            "type": "geojson",
            "data": json_Longford_AEDs_39
        }
                    ,
        "Monaghan_AEDs_40": {
            "type": "geojson",
            "data": json_Monaghan_AEDs_40
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_All_Irl_Counties_1_0",
            "type": "line",
            "source": "All_Irl_Counties_1",
            "layout": {},
            "paint": {'line-width': 1, 'line-opacity': 1.0, 'line-color': '#3579b1'}
        }
,
        {
            "id": "lyr_Munster_2_0",
            "type": "line",
            "source": "Munster_2",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_Connaught_3_0",
            "type": "line",
            "source": "Connaught_3",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_Ulster_4_0",
            "type": "line",
            "source": "Ulster_4",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_Leinster_5_0",
            "type": "line",
            "source": "Leinster_5",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_All_Ireland24_6_0",
            "type": "circle",
            "source": "All_Ireland24_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Ulster_AEDs_7_0",
            "type": "circle",
            "source": "Ulster_AEDs_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#7d8b8f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Connaught_AEDs_8_0",
            "type": "circle",
            "source": "Connaught_AEDs_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Munster_AEDs_9_0",
            "type": "circle",
            "source": "Munster_AEDs_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#a47158', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Leinster_AEDs_10_0",
            "type": "circle",
            "source": "Leinster_AEDs_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Tyrone_AEDs_11_0",
            "type": "circle",
            "source": "Tyrone_AEDs_11",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Fermanagh_AEDs_12_0",
            "type": "circle",
            "source": "Fermanagh_AEDs_12",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Donegal_AEDs_13_0",
            "type": "circle",
            "source": "Donegal_AEDs_13",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Armagh_AEDs_14_0",
            "type": "circle",
            "source": "Armagh_AEDs_14",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Antrim_AEDs_15_0",
            "type": "circle",
            "source": "Antrim_AEDs_15",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Down_AEDs_16_0",
            "type": "circle",
            "source": "Down_AEDs_16",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Derry_AEDs_17_0",
            "type": "circle",
            "source": "Derry_AEDs_17",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Leitrim_AEDs_18_0",
            "type": "circle",
            "source": "Leitrim_AEDs_18",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Galway_AEDs_19_0",
            "type": "circle",
            "source": "Galway_AEDs_19",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#729b6f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Mayo_AEDs_20_0",
            "type": "circle",
            "source": "Mayo_AEDs_20",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Sligo_AEDs_21_0",
            "type": "circle",
            "source": "Sligo_AEDs_21",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Roscommon_AEDs_22_0",
            "type": "circle",
            "source": "Roscommon_AEDs_22",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#a47158', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Limerick_AEDs_23_0",
            "type": "circle",
            "source": "Limerick_AEDs_23",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Clare_AEDs_24_0",
            "type": "circle",
            "source": "Clare_AEDs_24",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#729b6f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kerry_AEDs_25_0",
            "type": "circle",
            "source": "Kerry_AEDs_25",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Cork_AEDs_26_0",
            "type": "circle",
            "source": "Cork_AEDs_26",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#8d5a99', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Waterford_AEDs_27_0",
            "type": "circle",
            "source": "Waterford_AEDs_27",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Tipperary_AEDs_28_0",
            "type": "circle",
            "source": "Tipperary_AEDs_28",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#ff9e17', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Wexford_AEDs_29_0",
            "type": "circle",
            "source": "Wexford_AEDs_29",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kilkenny_AEDs_30_0",
            "type": "circle",
            "source": "Kilkenny_AEDs_30",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Carlow_AEDs_31_0",
            "type": "circle",
            "source": "Carlow_AEDs_31",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#987db7', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Laois_AEDs_32_0",
            "type": "circle",
            "source": "Laois_AEDs_32",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Offaly_AEDs_33_0",
            "type": "circle",
            "source": "Offaly_AEDs_33",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kildare_AEDs_34_0",
            "type": "circle",
            "source": "Kildare_AEDs_34",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e31a1c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Wicklow_AEDs_35_0",
            "type": "circle",
            "source": "Wicklow_AEDs_35",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Dublin_AEDs_36_0",
            "type": "circle",
            "source": "Dublin_AEDs_36",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Meath_AEDs_37_0",
            "type": "circle",
            "source": "Meath_AEDs_37",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#91522d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Westmeath_AEDs_38_0",
            "type": "circle",
            "source": "Westmeath_AEDs_38",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#7d8b8f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Longford_AEDs_39_0",
            "type": "circle",
            "source": "Longford_AEDs_39",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Monaghan_AEDs_40_0",
            "type": "circle",
            "source": "Monaghan_AEDs_40",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#a47158', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}