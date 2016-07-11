picoConfig={
  "uid": "wim-pico",
  "aggregation": {
    "wfs": {
      "geometryField": "geom",
      "layer": "view_aggr_v4",
      "url": "http://pico.geodan.nl/geoserver/pico/ows"
    },
    "features": [
      {
        "id": "EnergieverbruikGas",
        "icon": "http://research.geodan.nl/sites/tim/gas.png",
        "category": "Energieverbruik",
        "name": "Gas huidig"
      },
      {
        "id": "EnergieverbruikElectra",
        "icon": "http://research.geodan.nl/sites/tim/electricity.png",
        "category": "Energieverbruik",
        "name": "Elektra huidig"
      },
      {
        "id": "EnergiebesparingLabelb",
        "icon": "http://research.geodan.nl/sites/tim/label.png",
        "category": "Energiebesparing",
        "name": "Besparing isolatie label B"
      },
      {
        "id": "EnergieopwekkingPv",
        "icon": "http://research.geodan.nl/sites/tim/solarpanel.png",
        "category": "Energieopwekking",
        "name": "Opwekpotentie PV"
      },
      {
        "id": "EnergieopwekkingZon",
        "icon": "http://research.geodan.nl/sites/tim/sun.png",
        "category": "Energieopwekking",
        "name": "Zon"
      },
      {
        "id": "EnergieopwekkingWind",
        "icon": "http://research.geodan.nl/sites/tim/windturbine.png",
        "category": "Energieopwekking",
        "name": "Opwekpotentie wind"
      }
    ],
    "indicators": [
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "Energieneutraliteit Gas (m3)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "Energieneutraliteit Electriciteit (kWh)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "GJ",
        "features": [
          {
            "min": "100",
            "unit": "m3",
            "max": "1000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "gas_netbeheerders"
          },
          {
            "min": "200",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "elk_netbeheerders"
          },
          {
            "min": "500",
            "unit": "m3",
            "max": "1000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "besp_labelb"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_output"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_output_w"
          }
        ]
      },
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "Financieel Gas (€)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "Financieel Electriciteit (€)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "€",
        "features": [
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "kosten_gas_netbeheerders"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "kosten_elk_netbeheerders"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "50000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "besp_e_labelb"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_kostenbesp"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_kosten_w"
          }
        ]
      },
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "CO2 Gas (kg/jaar)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "CO2 Electriciteit (kg/jaar)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "CO2",
        "features": [
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "co2_gas_netbeheerders"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "co2_elk_netbeheerders"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "co2_labelb"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_co2"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_co2_w"
          }
        ]
      },
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "Energieneutraliteit Gas (m3)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "Energieneutraliteit Electriciteit (kWh)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "GJ pand",
        "features": [
          {
            "min": "100",
            "unit": "m3",
            "max": "1000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "gas_netbeheerders_w"
          },
          {
            "min": "200",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "elk_netbeheerders_w"
          },
          {
            "min": "500",
            "unit": "m3",
            "max": "1000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "besp_labelb_w"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_output_w"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_tvt_w"
          }
        ]
      },
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "Financieel Gas (€)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "Financieel Electriciteit (€)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "€ pand",
        "features": [
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "kosten_gas_netbeheerders_w"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "kosten_elk_netbeheerders_w"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "50000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "besp_e_labelb_w"
          },
          {
            "min": "100",
            "unit": "€",
            "max": "5000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_kostenbesp_w"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_tvt_w"
          }
        ]
      },
      {
        "results": [
          {
            "icon": "http://research.geodan.nl/sites/tim/gas.png",
            "category": "CO2 Gas (kg/jaar)",
            "name": "Gas",
            "sum": "[EnergieverbruikGas] - [EnergiebesparingLabelb]"
          },
          {
            "icon": "http://research.geodan.nl/sites/tim/electricity.png",
            "category": "CO2 Electriciteit (kg/jaar)",
            "name": "Electriciteit",
            "sum": "[EnergieverbruikElectra] - ([EnergieopwekkingPv] + [EnergieopwekkingWind])"
          }
        ],
        "name": "CO2 pand",
        "features": [
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieverbruikGas",
            "attribute": "co2_gas_netbeheerders_w"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieverbruikElectra",
            "attribute": "co2_elk_netbeheerders_w"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergiebesparingLabelb",
            "attribute": "co2_labelb_w"
          },
          {
            "min": "100",
            "unit": "kg",
            "max": "5000",
            "featureRefId": "EnergieopwekkingPv",
            "attribute": "pv_co2_w"
          },
          {
            "min": "1",
            "unit": "kWh",
            "max": "1000",
            "featureRefId": "EnergieopwekkingWind",
            "attribute": "pv_tvt_w"
          }
        ]
      }
    ]
  },
  "name": "WIM-Pico",
  "map": {
    "controls": [
      {
        "name": "search",
        "active": false,
        "options": {
          "privateSearch": {
            "enable": false,
            "searchConfiguration": "",
            "showSuggestions": false
          },
          "enableBingSearch": false,
          "items": {},
          "enableGeosuggest": true
        }
      },
      {
        "name": "layermanager",
        "options": {
          "items": {},
          "ordertoptop": true,
          "showBaselayers": false
        }
      },
      {
        "name": "baselayerswitcher",
        "options": {
          "items": {}
        }
      },
      {
        "name": "scalebar",
        "options": {
          "items": {}
        }
      },
      {
        "name": "reportservice",
        "options": {
          "items": {}
        }
      },
      {
        "name": "info",
        "options": {
          "items": {}
        }
      },
      {
        "name": "menu",
        "options": {
          "logo": true,
          "title": "titel in menu",
          "items": {
            "Contact": "http://www.geodan.nl"
          }
        }
      }
    ],
    "layers": [
      {
        "id": 12,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014gas",
                "unit": "m3/j/aansluiting",
                "title": "Gasverbruik"
              }
            ]
          }
        },
        "title": "Gemeten gasverbruik",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Energieverbruik (Kleinverbruik)",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=netbeheerdermultijoin_v1_gas&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "netbeheerdermultijoin_v1_gas",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van de netbeheerders Cogas Infra & Beheer, Delta Netwerkbedrijf, Endinet, Enexis, Liander, Rendo Netwerken, Stedin en Westland infra. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 15,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014elk",
                "unit": "kWh/j/aansluiting",
                "title": "Elektriciteitsverbruik"
              }
            ]
          }
        },
        "title": "Gemeten elektriciteitsverbruik",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Energieverbruik (Kleinverbruik)",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=netbeheerdermultijoin_v1_elk&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "netbeheerdermultijoin_v1_elk",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektriciteit afkomstig uit open data van de netbeheerders Cogas Infra & Beheer, Delta Netwerkbedrijf, Endinet, Enexis, Liander, Rendo Netwerken, Stedin en Westland infra. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2009",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2009",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2009&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2009",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2010",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2010",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2010",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2010&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2011",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2011",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2011",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2011&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2011",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2012",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2012",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2012",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2012&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2012",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2013",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2013",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2013",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2013&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2013",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas liander 2014",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gasverbruik 2014",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_2014&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_2014",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2009",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2009",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2009&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2009",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2010",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2010",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2010",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2010&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2011",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2011",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2011",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2011&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2011",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2012",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2012",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2012",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2012&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2012",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2013",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2013",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2013",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2013&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2013",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektra liander 2014",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektraverbruik 2014",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Historisch verbruik",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_2014&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_2014",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index09",
                "unit": "",
                "title": "Index 2009 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2009",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2009&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2009",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index10",
                "unit": "",
                "title": "Index 2010 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2010",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2010&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index11",
                "unit": "",
                "title": "Index 2011 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2011",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2011&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2011",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index12",
                "unit": "",
                "title": "Index 2012 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2012",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2012&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2012",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index13",
                "unit": "",
                "title": "Index 2013 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2013",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2013&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2013",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index14",
                "unit": "",
                "title": "Index 2014 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander gas index 2014",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_gas_index_2014&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_gas_index_2014",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik gas afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index09",
                "unit": "",
                "title": "Index 2009 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2009",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2009&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2009",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index10",
                "unit": "",
                "title": "Index 2010 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2010",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2010&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index11",
                "unit": "",
                "title": "Index 2011 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2011",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2011&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2011",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index12",
                "unit": "",
                "title": "Index 2012 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2012",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2012&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2012",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index13",
                "unit": "",
                "title": "Index 2013 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2013",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2013&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2013",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "index14",
                "unit": "",
                "title": "Index 2014 tov 2009",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Liander elektra index 2014",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Verbruiksindex",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=liander_elektra_index_2014&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "liander_elektra_index_2014",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verandering ten opzichte van basisjaar 2009 van het standaardjaarverbruik elektra afkomstig uit open data van Liander. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 52,
        "title": "Buurtniveau",
        "isBaseLayer": false,
        "legendUrl": "",
        "source": {
          "featureName": "cbs_buurten_2011_dit",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "filters": [
          {
            "min": 0,
            "unit": "euro",
            "max": 70,
            "attribute": "ink_inw2",
            "type": "numeriek",
            "displayname": "Inkomen (x1000)"
          },
          {
            "min": 0,
            "unit": "perc.",
            "max": 100,
            "attribute": "p_huurcorp",
            "type": "numeriek",
            "displayname": "Cooperatiewoningen"
          }
        ],
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 53,
        "title": "Wijkniveau",
        "isBaseLayer": false,
        "legendUrl": "",
        "source": {
          "featureName": "cbs_buurten_2011_dit",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "filters": [
          {
            "min": 0,
            "unit": "euro",
            "max": 1000,
            "attribute": "woz",
            "type": "numeriek",
            "displayname": "WOZ waarde (x1000)"
          },
          {
            "min": 0,
            "unit": "perc.",
            "max": 100,
            "attribute": "p_koopwon",
            "type": "numeriek",
            "displayname": "Koopwoningen"
          }
        ],
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 54,
        "title": "Blokniveau",
        "isBaseLayer": false,
        "legendUrl": "",
        "source": {
          "featureName": "filter_pc6",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "filters": [
          {
            "min": 0,
            "unit": "m3",
            "max": 10000,
            "attribute": "gas_alliander",
            "type": "numeriek",
            "displayname": "Werkelijk gasverbruik"
          },
          {
            "min": 0,
            "unit": "m3",
            "max": 10000,
            "attribute": "gas_verwacht",
            "type": "numeriek",
            "displayname": "Gemodelleerd gasverbruik"
          },
          {
            "min": 0,
            "unit": "jaar",
            "max": 100,
            "attribute": "tvt_labelb",
            "type": "numeriek",
            "displayname": "Label B terugverdientijd"
          }
        ],
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "warmtevraag_m3",
                "unit": "m3 gas /jaar",
                "title": "Warmtevraag:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Hoogbouw warmtevraag (m3)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=hoogbouwtest&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "hoogbouwtest",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Warmtevraag van hoogbouw panden"
        },
        "options": {
          "maxResolution": 100000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "title": "Warmtevraag hoogbouw (heatmap)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "heatmap",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=hoogbouw_heatmap&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "hoogbouw_heatmap",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Heatmap van de warmtevraag van hoogbouwpanden volgens het RVO isolatiemodel"
        },
        "options": {
          "maxResolution": 200000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "title": "Warmtevraag woningbouw (heatmap)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "heatmap",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=warmtevraag_woningbouw_vesta_heatmap&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "warmtevraag_woningbouw_vesta_heatmap",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Heatmap van de warmtevraag van woningbouw volgens het Vesta model"
        },
        "options": {
          "maxResolution": 200000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "warmtevraag_m3",
                "unit": "m3 gas /jaar",
                "title": "Warmtevraag:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Warmtevraag utiliteitsbouw (panden)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=lisa_gebouwschil_bag&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "lisa_gebouwschil_bag",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Warmtevraag van utiliteitsbouw als gevolg van verliezen aan de gebouwschil volgens het Vesta model"
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "title": "Warmtevraag utiliteitsbouw (heatmap)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "heatmap",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=lisa_heatmap&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "lisa_heatmap",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Heatmap van de warmtevraag omgerekend naar m3 gas van utiliteitsbouw volgens het Vesta model"
        },
        "options": {
          "maxResolution": 200000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "naam",
                "unit": "",
                "title": "Zwembad:",
                "nullvalue": 0
              },
              {
                "field": "grootteklasse",
                "unit": "",
                "title": "Grootteklasse zwembad:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Zwembaden (punten)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=zwembaden&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "zwembaden",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Locaties van zwembaden. Grootteklasse bepaalt de grootte van de cirkel op basis van aantal werknemers"
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "area",
                "unit": "m3",
                "title": "Oppervlakte kassen:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Glastuinbouw (panden)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=glastuinbouw&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "glastuinbouw",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Locaties van glastuinbouw."
        },
        "options": {
          "maxResolution": 100000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "title": "Glastuinbouw (heatmap)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "heatmap",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=glastuinbouw_heatmap&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "glastuinbouw_heatmap",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Heatmap van de warmtevraag van glastuinbouw volgens de warmteatlas"
        },
        "options": {
          "maxResolution": 200000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "naam",
                "unit": "",
                "title": "Bedrijf:",
                "nullvalue": 0
              },
              {
                "field": "grootteklasse",
                "unit": "",
                "title": "Grootteklasse koelhuis/ict:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Koelhuizen/ICT (punten)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=koelhuizenict&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "koelhuizenict",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Locaties van koelhuizen en ICT bedrijven. Grootteklasse naar het aantal medewerkers"
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      
      {
        "id": 58,
        "title": "RWZI (punten)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rwzi&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rwzi",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Locaties van rioolwaterzuiveringsinstallaties."
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "tj_warmte",
                "unit": "TJ warmte/jaar",
                "title": "Warmtevraag:",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Warmte uit industrie (punten)",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=industrie_points&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "industrie_points",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Warmtegebruik van industrie volgens de warmteatlas",
          "url": "http://agentschapnl.kaartenbalie.nl/gisviewer/viewer.do?code=0f2d31b5cee824a43bf2ad238f41d101"
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "title": "Warmte uit industrie heatmap",
        "isBaseLayer": false,
        "groupName": "Energieverbruik",
        "subgroupName": "Warmtevraag en warmteaanbod",
        "geotype": "heatmap",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=industrie_heatmap&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "industrie_heatmap",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Warmtegebruik van industrie volgens de warmteatlas",
          "url": "http://agentschapnl.kaartenbalie.nl/gisviewer/viewer.do?code=0f2d31b5cee824a43bf2ad238f41d101"
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 1,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "bev_dichth",
                "unit": "inwoners/km2",
                "title": "Bevolkingsdichtheid"
              }
            ]
          }
        },
        "title": "Bevolkingsdichtheid",
        "isBaseLayer": false,
        "groupName": "Gebieden",
		"XsubgroupName": "Sociaal-economische CBS data",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=bevdichth_buurten&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "cbs_bevdichth_sd",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het aantal inwoners per km2. Door in te zoomen kan de bevolkingsdichtheid gezien worden van gemeenten, wijken of buurten volgens CBS."
        },
        "queryable": true,
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 2,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "woz",
                "unit": ".000 euro",
                "title": "WOZ"
              },
              {
                "field": "woningen",
                "unit": "woningen",
                "title": "Aantal woningen"
              }
            ]
          }
        },
        "title": "WOZ waarde",
        "isBaseLayer": false,
        "groupName": "Gebieden",
		"XsubgroupName": "Sociaal-economische CBS data",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cbs_woz&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "cbs_woz_sd",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde WOZ waarde van alle woningen in dit gebied. Door in te zoomen kan de gemiddelde WOZ waarde gezien worden per gemeente, wijk of buurt volgens CBS."
        },
        "queryable": true,
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 3,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "p_huurcorp",
                "unit": "%",
                "title": "Woningcooperatie woningen"
              },
              {
                "field": "woningen",
                "unit": "woningen",
                "title": "Aantal woningen"
              }
            ]
          }
        },
        "title": "Percentage woningcorperaties",
        "isBaseLayer": false,
        "groupName": "Gebieden",
		"XsubgroupName": "Sociaal-economische CBS data",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cbs_p_huurcorp_buurten&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "cbs_p_huurcorp_sd",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het percentage woningen in een gebied wat in het bezit is van woningcorporaties. Door in te zoomen kan de bevolkingsdichtheid gezien worden van gemeenten, wijken of buurten volgens CBS."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 3,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "p_huurcorp",
                "unit": "%",
                "title": "Woningcooperatie woningen"
              },
              {
                "field": "woningen",
                "unit": "woningen",
                "title": "Aantal woningen"
              }
            ]
          }
        },
        "title": "Percentage particulier bezit",
        "isBaseLayer": false,
        "groupName": "Gebieden",
		"XsubgroupName": "Sociaal-economische CBS data",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cbs_p_particulier_buurten&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "cbs_p_particulier_sd",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het percentage woningen in een gebied wat in het bezit is van woningcorporaties. Door in te zoomen kan de bevolkingsdichtheid gezien worden van gemeenten, wijken of buurten volgens CBS."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 46,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "provc_nm",
                "unit": "",
                "title": "Provincie:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Provincies",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=provincie&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "provincie",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Grenzen van de Nederlanse provincies."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 47,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "gemnaam",
                "unit": "",
                "title": "Gemeente:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Gemeenten",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=gemeenten&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "gemeenten",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Grenzen van de Nederlandse gemeenten."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 48,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "wijknaam",
                "unit": "",
                "title": "Wijk:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Wijken",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pico:wijken&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "wijken",
          "FORMAT": "image/png",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?transparent=true",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Grenzen van de Nederlandse wijken."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 49,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "buurtnaam",
                "unit": "",
                "title": "Buurt:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Buurten",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pico:buurten&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "picoInfo": {
          "text": "Grenzen van de Nederlandse buurten."
        },
        "info": {
          "fields": {
            "woz": "waarde"
          }
        },
        "source": {
          "featureName": "buurten",
          "FORMAT": "image/png",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?transparent=true",
          "version": "1.1.1"
        },
        "infoUrl": "http://pico.geodan.nl/geoserver/pico/wms",
        "queryable": true,
        "options": {
          "opacity": 1,
          "transparent": true
        }
      },
      {
        "id": 49,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "pc4code",
                "unit": "",
                "title": "Postcode-4:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Postcode-4",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pico:pc4(from_restwarmte)&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "picoInfo": {
          "text": "Grenzen van de Nederlandse 4-positie postcodegebieden."
        },
        "info": {
          "fields": {
            "woz": "waarde"
          }
        },
        "source": {
          "featureName": "pc4(from_restwarmte)",
          "FORMAT": "image/png",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?transparent=true",
          "version": "1.1.1"
        },
        "infoUrl": "http://pico.geodan.nl/geoserver/pico/wms",
        "queryable": true,
        "options": {
          "opacity": 1,
          "transparent": true
        }
      },
      {
        "id": 50,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "pc6",
                "unit": "",
                "title": "Postcode-6:",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Postcode-6",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "grens",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=postcode6&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "postcode6",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Grenzen van de zescijferige postcodegebieden in Nederland."
        },
        "options": {
          "maxResolution": 60000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 51,
        "title": "Bodemgebruik",
        "isBaseLayer": false,
        "groupName": "Gebieden",
        "geotype": "overig",
        "legendUrl": "http://geodata.nationaalgeoregister.nl/bestandbodemgebruik2010/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=bbg2010",
        "source": {
          "featureName": "bbg2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://geodata.nationaalgeoregister.nl/bestandbodemgebruik2010/wms"
        },
        "picoInfo": {
          "text": "De huidige gebruiksfunctie van land, volgens CBS 2011."
        },
        "options": {
          "maxResolution": 99999,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 5,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "oppvlakte",
                "unit": "m2",
                "title": "Oppervlakte"
              }
            ]
          }
        },
        "title": "Oppervlakte",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=bagagn_oppvlakte&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "bagagn_oppvlakte",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "De oppervlakte van een pand, op basis van de meest recente BAG gegevens."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 6,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "bouwjaar",
                "unit": "",
                "title": "Bouwjaar"
              }
            ]
          }
        },
        "title": "Bouwjaar",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=bagagn_bouwjaar&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "bagagn_bouwjaar",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het jaar waarin dit pand is gebouwd, op basis van de meest recente BAG gegevens."
        },
        "queryable": true,
        "options": {
          "visible": false,
          "maxResolution": 100000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 7,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "woningtype",
                "unit": "",
                "title": "Woningtype"
              }
            ]
          }
        },
        "title": "Woningtype",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=woningtype&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "woningtype",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Het type woning waar deze woning toe behoort, op basis van een analyse van Geodan op basis van de meest recente BAG gegevens."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 8,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "gebrksdoel",
                "unit": "",
                "title": "Gebruiksdoel"
              }
            ]
          }
        },
        "title": "Gebruiksdoel",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=gebouw_first_gebrksdoel&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "gebouw_first_gebrksdoel",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het meest dominante doel waar een pand voor gebruikt wordt, op basis een analyse van Geodan op de meest recente BAG gegevens."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 9,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "oppvlakte",
                "unit": "m2",
                "title": "Dakgrootte"
              }
            ]
          }
        },
        "title": "Dakgrootte",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=bagagn_dakgrootte&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pico:bagagn_dakgrootte",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het geschatte dakoppervlakte van een pand, op basis van de meest recente BAG gegevens."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 10,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "energiekla",
                "unit": "",
                "title": "Energieklasse"
              },
              {
                "field": "epi",
                "unit": "MJ/m2/jaar",
                "title": "EPI"
              }
            ]
          }
        },
        "title": "Gecertificeerde energielabels (RVO)",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=energielabels_rvo&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "energielabels_rvo",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gecertificeerde energielabels van woningen. Gebaseerd op data gepubliceerd door RVO tot 2014."
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 11,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "label2010letter",
                "unit": "",
                "title": "Energieklasse (gemodelleerd)"
              }
            ]
          }
        },
        "title": "Gemodelleerde energielabels",
        "isBaseLayer": false,
        "groupName": "Gebouwen",
		"geotype":"panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_label2010&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_label2010",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Energielabel gemodelleerd als gemiddelde per blok (postcode-6 gebied), zoals berekend door het Vesta model van TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 16,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "besparing_t",
                "unit": "m3",
                "title": "Gemiddelde gasbesparing (2-stap)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde gasbesparing (2-stap)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label EFG 2 stappen beter",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_besparing_t&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_besparing_t",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde gasbesparing per woning na het verbeteren van de isolatie met twee labelstappen ten op zichte van het huidige label (alleen voor woningen met label E, F of G). Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 17,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "inv_pand_t",
                "unit": "euro",
                "title": "Gemiddelde investering (2-stap)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde investering (2-stap)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label EFG 2 stappen beter",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_inv_pand_t&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_inv_pand_t",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde investering per woning om de isolatie te verbeteren met twee labelstappen ten op zichte van het huidige label (alleen voor woningen met label E, F of G). Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 17,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "kostbesp_t",
                "unit": "euro",
                "title": "Gemiddelde kostenbesparing (2-stap)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde kostenbesparing (2-stap)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label EFG 2 stappen beter",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_kostbesp_t&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_kostbesp_t",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde kostenbesparing per woning na de isolatie te hebben verbeterd met twee labelstappen ten op zichte van het huidige label (alleen voor woningen met label E, F of G). Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 18,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "tvt_t",
                "unit": "jaar",
                "title": "Terugverdientijd (2-stap)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Terugverdientijd (2-stap)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label EFG 2 stappen beter",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_simpelet_b&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_simpelet_b",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De simpele terugverdientijd van isolatie van woningen met twee labelstappen ten op zichte van het huidige label (alleen voor woningen met label E, F of G). Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 19,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_t",
                "unit": "kg",
                "title": "CO2 besparing (2-stap)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing (2-stap)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label EFG 2 stappen beter",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=co2_t&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "co2_t",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Gemiddelde CO2 besparing per woning bij twee labelstappen ten op zichte van het huidige label (alleen voor woningen met label E, F of G). Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 20,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "besparing_b",
                "unit": "m3",
                "title": "Gemiddelde gasbesparing (naar B)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde gasbesparing (naar B)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label CDEFG naar B",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_besparing_b&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_besparing_b",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde gasbesparing per woning voor isolatie naar een label B, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "inv_pand_b",
                "unit": "euro",
                "title": "Gemiddelde investering (naar B)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde investering (naar B)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label CDEFG naar B",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_inv_pand_b&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_inv_pand_b",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde investering per woning voor isolatie naar een label B, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "kostbesp_b",
                "unit": "euro",
                "title": "Gemiddelde kostenbesparing (naar B)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde kostenbesparing (naar B)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label CDEFG naar B",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_kostbesp_b&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_kostbesp_b",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde kostenbesparing per woning na isolatie naar een label B, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 22,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "tvt_b",
                "unit": "jaar",
                "title": "Terugverdientijd (naar B)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Terugverdientijd (naar B)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label CDEFG naar B",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_simpeleter&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_simpeleter",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De simpele terugverdientijd van isolatie van woningen naar een label B, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 23,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_b",
                "unit": "kg",
                "title": "CO2 besparing (naar B)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing (naar B)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label CDEFG naar B",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=co2_b&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "co2_b",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing per woning bij isolatie naar een label B, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 24,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "besparing_a",
                "unit": "m3",
                "title": "Gemiddelde gasbesparing (naar A+)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde gasbesparing (naar A+)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label BCDEFG naar A+",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_besparing_a&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_besparing_a",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde gasbesparing per woning voor isolatie naar een label A+, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 25,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "inv_pand_a",
                "unit": "euro",
                "title": "Gemiddelde investering (naar A+)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde investering (naar A+)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label BCDEFG naar A+",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_inv_pand_a&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_inv_pand_a",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde investering per woning voor isolatie naar een label A+, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 25,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "kostbesp_a",
                "unit": "euro",
                "title": "Gemiddelde kostenbesparing (naar A+)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde kostenbesparing (naar A+)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label BCDEFG naar A+",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_kostbesp_a&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_kostbesp_a",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde kostenbesparing per woning na isolatie naar een label A+, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 26,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "tvt_a",
                "unit": "jaar",
                "title": "Terugverdientijd (naar A+)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Terugverdientijd (naar A+)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label BCDEFG naar A+",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_simpelet_a&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_simpelet_a",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De simpele terugverdientijd van isolatie van woningen naar een label A+, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 27,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_a",
                "unit": "kg",
                "title": "CO2 besparing (naar A+)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing (naar A+)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "Van label BCDEFG naar A+",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=co2_a&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "co2_a",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing per woning bij isolatie naar een label A+, zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "rv_besp_m3",
                "unit": "m3",
                "title": "Energiebesparing ruimteverwarming isolatie (RVO)",
                "nullvalue": 0
              },
              {
                "field": "hd_rv_m3",
                "unit": "m3",
                "title": "Huidig verbruik ruimteverwarming (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO Energiebesparing ruimteverwarming (m3)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_energiebesp_m3&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_energiebesp_m3",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Energiebesparing door isolatie van een pand in m3 gas, gemodelleerd volgens rekenregels van RVO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 57,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "cost_rv",
                "unit": "euro",
                "title": "Kosten voor isolatie ruimteverwarming (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO investeringskosten (euro)",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_investeringskosten_eu&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_investeringskosten_eu",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De investering die nodig is om een pand te isoleren, volgens prijsniveaus van RVO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 58,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "huid_label",
                "unit": "",
                "title": "Huidige label (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO huidig energielabel gemodelleerd",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_energielabelsmaartenhuidig&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_energielabelsmaartenhuidig",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het huidige energielabel van een pand, volgens parameters van RVO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 59,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "cost_besp",
                "unit": "euro",
                "title": "Kostenbesparing isolatie ruimteverwarming (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO kostenbesparing",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_kostenbesparing&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_kostenbesparing",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De jaarlijks kostenbesparing ten gevolge van het isoleren van een pand, volgens parameters van RVO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 60,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "rv_tvt",
                "unit": "jaar",
                "title": "Terugverdientijd isolatie ruimteverwarming (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO terugverdientijd",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_terugverdientijd&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_terugverdientijd",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De simpele terugverdientijd (investering gedeeld door kostenbesparing), volgens parameters van RVO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 61,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2besp",
                "unit": "kg/jaar",
                "title": "CO2 besparing isolatie ruimteverwarming (RVO)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "RVO CO2 besparing",
        "isBaseLayer": false,
        "groupName": "Isolatie woning",
        "subgroupName": "RVO isolatiepakket",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=rvonl_co2_besparing&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "rvonl_co2_besparing",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De direct vermijdde CO2 uitstoot ten gevolge van het isoleren van een pand, volgens parameters van RVO en TNO."
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "inv",
                "unit": "euro per aansluiting",
                "title": "Gemiddelde investering per aansluiting (All-electricpakket)",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde investering All-electric",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "All-electric pakket",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vesta_eneu_inv&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "vesta_eneu_inv",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde investering per aansluiting voor isolatie naar een label A+, installatie van zon-PV panelen, en een warmtepomp zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "batenpakket",
                "unit": "euro/j/aansluiting",
                "title": "Gemiddelde baten per aansluiting",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde baten All-electric",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "All-electric pakket",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vesta_eneu_batenpakket&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "vesta_eneu_batenpakket",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde baten per aansluiting voor isolatie naar een label A+ installatie van zon-PV panelen, en een warmtepomp zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "tvtpakket",
                "unit": "jaar",
                "title": "Gemiddelde terugverdientijd",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Gemiddelde terugverdientijd All-electric",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "All-electric pakket",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vesta_eneu_tvtpakket&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "vesta_eneu_tvtpakket",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde terugverdientijd voor isolatie naar een label A+ installatie van zon-PV panelen, en een warmtepomp zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "elekverbnapakketkwh",
                "unit": "kWh/j/aansluiting",
                "title": "Restverbruik na All-electric pakket",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Restverbruik All-electric",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "All-electric pakket",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vesta_eneu_restverb&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "vesta_eneu_restverb",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Het gemiddelde restverbruik van isolatie naar een label A+ installatie van zon-PV panelen, en een warmtepomp zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 21,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2besp",
                "unit": "kWh/j/aansluiting",
                "title": "CO2 besparing na All-electric pakket",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing All-electric",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "All-electric pakket",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vesta_eneu_co2besp&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "vesta_eneu_co2besp",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing van isolatie naar een label A+ installatie van zon-PV panelen, en een warmtepomp zoals berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 28,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "elec_output",
                "unit": "kWh",
                "title": "Opwekpotentie zonnepanelen",
                "nullvalue": 0
              },
              {
                "field": "dak_opp",
                "unit": "m2",
                "title": "Dakoppervlak voor zonnepanelen",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Zonnepotentie",
        "isBaseLayer": false,
        "groupName": "Energieopwekking woning",
        "subgroupName": "Zonnepotentie",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=view_pv_gebouwen&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "view_pv_gebouwen",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Berekening van PV potentie gebaseerd op het Ques model [TBE]"
        },
        "options": {
          "visible": false,
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 41,
        "title": "Windpotentie",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Windpotentie",
        "geotype": "overig",
        "legendUrl": "http://arcgisdemo.geodan.nl/arcgis/services/public/Windpotentie/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0&transparent=true",
        "source": {
          "featureName": "0",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://arcgisdemo.geodan.nl/arcgis/services/public/Windpotentie/MapServer/WMSServer"
        },
        "picoInfo": {
          "text": "Windpotentie in GWh per jaar van een windturbine van 100 meter hoog met een diameter van 100 meter. Gebaseerd op data van RVO."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
	  {
        "id": 30,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "capaciteit",
                "unit": "MWth",
                "title": "Capaciteitsvraag warmte",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Capaciteitsvraag warmte",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Restwarmte",
        "geotype": "pc4",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc4_restwarmte_vraag_capaciteit&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc4_restwarmte_vraag_capaciteit",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Warmtecapaciteitsvraag van alle woningen, utiliteitsgebouwen en glastuinbouw in de gebieden in een 4-cijferig postcodegebied, volgens het Vesta model van PBL, zoals toegepast door TNO."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 31,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "capaciteit",
                "unit": "MWth",
                "title": "Capaciteitsvraag warmte",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Restwarmte rendabiliteit",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Restwarmte",
        "geotype": "pc4",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc4_restwarmte_geschiktheid&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc4_restwarmte_geschiktheid",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Gebieden waar de terugverdientijd van restwarmtenetwerken minder is dan 30 jaar volgens het Vesta model van PBL, zoals toegepast door TNO. De mogelijkheid om bestaande netwerken uit te breiden wordt niet meegenomen."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 32,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "bronnen_la",
                "unit": "",
                "title": "Bronnen",
                "nullvalue": 0
              },
              {
                "field": "mwth_max_m",
                "unit": "MWth",
                "title": "Maximum capaciteit restwarmte bron",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Bronnen van restwarmte",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Restwarmte",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=restwarmte_bronnen&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "restwarmte_bronnen",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Locaties van restwarmte bronnen zoals geïnventariseerd door PBL (2012). De grootte van de cirkels geven de relatieve hoeveelheid beschikbare restwarmte aan."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 32,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_r_pand",
                "unit": "kg",
                "title": "CO2 besparing restwarmte per pand",
                "nullvalue": 0
              },
              {
                "field": "co2_restwa",
                "unit": "kg",
                "title": "CO2 besparing restwarmte in dit PC6 gebied",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing restwarmte",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Restwarmte",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_co2_restwarmte_pand&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_co2_restwarmte_pand",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing per pand na het invullen van de warmtevraag met restwarmte, uitgaande van een gemiddelde restwarmtebron. Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 34,
        "title": "Bodemgeschiktheid",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Geothermie",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=geothermiecontourecht&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "geothermiecontourecht",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Gebieden waar minimaal 70% kans bestaat dat er voldoende warmte in de diepe ondergrond aanwezig is voor Geothermie, zoals voorspeld door TNO. Let wel: van grote delen van de diepe ondergrond van Nederland is geen informatie beschikbaar.",
          "url": "http://thermogis.nl/basicviewer/ThermoGISBasic.html"
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 32,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_g_pand",
                "unit": "kg",
                "title": "CO2 besparing geothermie per pand",
                "nullvalue": 0
              },
              {
                "field": "co2_geothe",
                "unit": "kg",
                "title": "CO2 besparing geothermie in dit PC6 gebied",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing geothermie",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Geothermie",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_co2_geothermie_pand&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_co2_geothermie_pand",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing per pand na het invullen van de warmtevraag met geothermie, uitgaande van de aanwezigheid van een geschikte geothermiebron. Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 35,
        "title": "WKO rendabiliteit voor woningen",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "subgroupName": "Warmte Koude Opslag (WKO)",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_wko_geschiktheid&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_wko_geschiktheid",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "Gebieden waar de terugverdientijd van collectief Warmte Koude Opslag voor een cluster van woningen en utiliteitsgebouwen minder is dan 30 jaar volgens het Vesta model van TNO. Dit gaat er wel vanuit dat woningen voldoende zijn geïsoleerd voor lage temeratuurverwarming."
        },
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 36,
        "title": "WKO rendabiliteit voor utiliteitsbouw",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "geotype": "panden",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=util_wko_bag&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "util_wko_bag",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "???"
        },
        "subgroupName": "Warmte Koude Opslag (WKO)",
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 32,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "co2_w_pand",
                "unit": "kg",
                "title": "CO2 besparing wko per pand",
                "nullvalue": 0
              },
              {
                "field": "co2_wko",
                "unit": "kg",
                "title": "CO2 besparing wko in dit PC6 gebied",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "CO2 besparing WKO",
        "isBaseLayer": false,
        "groupName": "Gebiedsmaatregelen",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pc6_gs_tvt_co2_wko_pand&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "pc6_gs_tvt_co2_wko_pand",
          "type": "OGC_WMS",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?",
          "version": "1.1.0"
        },
        "picoInfo": {
          "text": "De gemiddelde CO2 besparing per pand na het invullen van de warmtevraag met een WKO, uitgaande van de aanwezigheid van een geschikte WKO-bron. Berekend door het Vesta model van PBL, toegepast door TNO."
        },
        "subgroupName": "Warmte Koude Opslag (WKO)",
        "options": {
          "visible": false,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "title": "Hoogspanningsnetwerk",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "overig",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "legendUrl": "http://arcgisdemo.geodan.nl/arcgis/services/public/Hoogspanningsnet/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
        "source": {
          "featureName": "0,1",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://arcgisdemo.geodan.nl/arcgis/services/public/Hoogspanningsnet/MapServer/WMSServer"
        },
        "picoInfo": {
          "text": "Hoogspanningsnetwerk binnen Nederland en naar buurlanden. Data afkomstig van hoogspanningsnet.com.",
          "url": "http://www.hoogspanningsnet.com/"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "status",
                "unit": "",
                "title": "Status",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Middenspanningskabels, Enexis ",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ms_kabels&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ms_kabels",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Middenspanningssnetwerk in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 200000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "status",
                "unit": "",
                "title": "Status",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Laagspanningskabels, Enexis",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "overig",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ls_kabels&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ls_kabels",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Laagspanningssnetwerk in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 100000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "status",
                "unit": "",
                "title": "Status",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Aansluitkabels, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ls_aansluitkabels&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ls_aansluitkabels",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Aansluitkabels in het laagspanningssnetwerk in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "status",
                "unit": "",
                "title": "Status",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Elektriciteitsaansluitingen, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ls_aansluiting&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ls_aansluiting",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Elektriciteitsaansluitingen in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "status",
                "unit": "",
                "title": "Status",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Elektriciteitsstations, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ms_ls_station&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ms_ls_station",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Elektriciteitsstations in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "title": "Openbare verlichting, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_ov_aansluiting&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_ov_aansluiting",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Openbare verlichting in het in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014elk",
                "unit": "kWh/j/aansluiting",
                "title": "Standaard jaarverbruik elektriciteit 2014",
                "nullvalue": "null"
              },
              {
                "field": "netbeheerderelk",
                "unit": "",
                "title": "Netbeheerder elektriciteit",
                "nullvalue": "Geen netbeheerder elektriciteit"
              }
            ]
          }
        },
        "title": "Netbeheerdergebieden elektriciteit",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=netbeheerdergebiedenelk&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "netbeheerdergebiedenelk",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verzorgingsgebieden voor elektriciteitslevering van de netbeheerders Cogas Infra & Beheer, Delta Netwerkbedrijf, Endinet, Enexis, Liander, Rendo Netwerken, Stedin en Westland infra. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 44,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "turbine",
                "unit": "",
                "title": "Windturbine naam",
                "nullvalue": 0
              },
              {
                "field": "fabrikant",
                "unit": "",
                "title": "Windturbine fabrikant",
                "nullvalue": 0
              },
              {
                "field": "vermogen",
                "unit": "MW",
                "title": "Windturbine vermogen",
                "nullvalue": 0
              },
              {
                "field": "as_hoogte",
                "unit": "m",
                "title": "Windturbine as hoogte",
                "nullvalue": 0
              },
              {
                "field": "diameter",
                "unit": "m",
                "title": "Windturbine diameter",
                "nullvalue": 0
              }
            ]
          }
        },
        "title": "Windturbines",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=pico:windturbines_nederland&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "windturbines_nederland",
          "FORMAT": "image/png",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?transparent=true",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De locaties van windturbines die reeds gebouwd zijn. Data afkomstig van Bosch en van Rijn.",
          "url": "http://www.windstats.boschenvanrijn.nl/"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 45,
        "title": "Oplaadpalen",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Elektriciteitsnetwerk",
        "geotype": "punten",
        "legendUrl": "http://arcgisdemo.geodan.nl/arcgis/services/public/Oplaadpalen/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
        "source": {
          "featureName": "0",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://arcgisdemo.geodan.nl/arcgis/services/public/Oplaadpalen/MapServer/WMSServer"
        },
        "picoInfo": {
          "text": "Locatie van elektrische oplaadpalen in Nederland. Data afkomstig van oplaadpalen.com.",
          "url": "http://www.oplaadpalen.com/"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "functie",
                "unit": "",
                "title": "Type",
                "nullvalue": "null"
              }
            ]
          }
        },
        "title": "Gasstations, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_g_station&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_g_station",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Gasstations in het in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "title": "Gasleidingen, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_g_leidingen&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_g_leidingen",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Gasleidingen in het in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "title": "Gasaansluitleidingen, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "overig",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_g_aansluitleidingen&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_g_aansluitleidingen",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Gasaansluitleidingen in het in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 42,
        "title": "Gasaansluitingen, Enexis",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "punten",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=asset_enexis_g_aansluiting&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "asset_enexis_g_aansluiting",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms?"
        },
        "picoInfo": {
          "text": "Gasaansluitingen in het in Enexis verzorgingsgebied. Data afkomstig van Enexis open data.",
          "url": "https://www.enexis.nl/over-enexis/open-data"
        },
        "options": {
          "maxResolution": 50000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 56,
        "tooldata": {
          "TOOL_INFO": {
            "queryable": true,
            "fields": [
              {
                "field": "sjv2014gas",
                "unit": "m3/j/aansluiting",
                "title": "Standaard jaarverbruik gas 2014",
                "nullvalue": "null"
              },
              {
                "field": "netbeheerdergas",
                "unit": "",
                "title": "Netbeheerder gas",
                "nullvalue": "Geen netbeheerder gas"
              }
            ]
          }
        },
        "title": "Netbeheerdergebieden gas",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "pc6",
        "legendUrl": "http://pico.geodan.nl/geoserver/pico/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=netbeheerdergebiedengas&transparent=true&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:12",
        "source": {
          "featureName": "netbeheerdergebiedengas",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "Verzorgingsgebieden voor gaslevering van de netbeheerders Cogas Infra & Beheer, Delta Netwerkbedrijf, Endinet, Enexis, Liander, Rendo Netwerken, Stedin en Westland infra. Alleen kleinverbruik is opgenomen."
        },
        "options": {
          "maxResolution": 400000,
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      },
      {
        "id": 43,
        "title": "Warmtenetten",
        "isBaseLayer": false,
        "groupName": "Infrastructuur",
        "subgroupName": "Gasnetwerk",
        "geotype": "grens",
        "source": {
          "featureName": "warmtenetten",
          "type": "OGC_WMS",
          "contenttype": "image/png",
          "url": "http://pico.geodan.nl/geoserver/pico/wms",
          "version": "1.1.1"
        },
        "picoInfo": {
          "text": "De huidige locatie van warmtenetten, volgens ...."
        },
        "options": {
          "opacity": 1,
          "transparent": true
        },
        "info": {
          "fields": {}
        }
      }
    ],
    "view": {
      "center": {
        "y": 463000,
        "x": 155000
      },
      "extent": [
        7000,
        300000,
        289000,
        629000
      ],
      "zoom": 1,
      "projection": "EPSG:28992",
      "resolutions": [
        3440.64,
        1720.32,
        860.16,
        430.08,
        215.04,
        107.52,
        53.76,
        26.88,
        13.44,
        6.72,
        3.36,
        1.68,
        0.84,
        0.42,
        0.21
      ]
    },
    "filters": [
      {
        "name": "Vesta",
        "layer": "vesta_labelb_ter",
        "url": "http://pico.geodan.nl/geoserver/pico/wms",
        "filter": [
          {
            "min": 0,
            "max": 1000,
            "name": "labelb_k_1",
            "displayName": "Kosten label B per woning"
          },
          {
            "min": 0,
            "max": 100,
            "name": "labelb_ter",
            "displayName": "Terugverdientijd"
          }
        ]
      },
      {
        "name": "Gebouwen",
        "layer": "gebouwen",
        "url": "http://model.geodan.nl/geoserver/pico/wms",
        "filter": [
          {
            "min": 1700,
            "max": 2014,
            "name": "bouwjaar",
            "displayName": "Bouwjaar"
          },
          {
            "min": 1,
            "max": 5000,
            "name": "oppvlakte",
            "displayName": "Dakgrootte"
          }
        ]
      },
      {
        "name": "Postcodegebieden",
        "layer": "pc6_energieverbruik_alliander",
        "url": "http://pico.geodan.nl/geoserver/pico/wms",
        "filter": [
          {
            "min": 0,
            "max": 20000,
            "name": "gas_sjv",
            "displayName": "SJV Gas"
          },
          {
            "min": 0,
            "max": 20000,
            "name": "elk_sjv",
            "displayName": "SJV Elec"
          }
        ]
      },
      {
        "name": "Buurten",
        "layer": "cbs_buurten_2011_dit",
        "url": "http://pico.geodan.nl/geoserver/pico/wms",
        "filter": [
          {
            "min": 0,
            "max": 70,
            "name": "ink_inw2",
            "displayName": "Inkomen per inwoner"
          },
          {
            "min": 0,
            "max": 100,
            "name": "p_koopwon",
            "displayName": "Percentage koopwoningen"
          },
          {
            "min": 0,
            "max": 100,
            "name": "p_huurcorp",
            "displayName": "Percentage woco-woningen"
          },
          {
            "min": 0,
            "max": 100,
            "name": "p_25_44_jr",
            "displayName": "Percentage personen tussen 25 - 44 jaar"
          }
        ]
      },
      {
        "name": "Wijken",
        "layer": "cbs_buurten_2011_dit",
        "url": "http://pico.geodan.nl/geoserver/pico/wms",
        "filter": [
          {
            "min": 0,
            "max": 100,
            "name": "p_huurcorp",
            "displayName": "Percentage woco-woningen"
          },
          {
            "min": 0,
            "max": 100,
            "name": "p_25_44_jr",
            "displayName": "Percentage personen tussen 25 - 44 jaar"
          }
        ]
      }
    ]
  },
  "metadata": {
    "title": "WIM-pico",
    "description": "Configuratie voor ontwikkeling in het WIM-Pico project."
  }
}