function dongcheng_middle_distance(){
Highcharts.chart('middle2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        width: 1200,
		 height: 550,
		 backgroundColor:"transparent"
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            enabled: true,
            text: ''
        },
		labels: {
            style: {
               //color: 'red',
               fontSize:'15px' 
                }
            },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: ''
        },
		labels: {
            style: {
               //color: 'red',
               fontSize:'15px' 
                }
            },
		gridLineWidth : 0
    },
    legend: {
        layout: 'vertical',
        align: 'right',
           verticalAlign: 'bottom',
		margin: 60,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.50)',
        borderWidth: 0
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} m, {point.y} RMB/㎡',
				valueDecimals: 2
            }
        }
    },
    series: [{
        name: 'Best Middle School in School District',
        color: 'rgba(223, 83, 83, .5)',
        data: [[3001.75756, 48813.75],
 [13307.90432, 48547.5],
 [494.61760120000002, 65974.399999999994],
 [638.94851439999991, 62862.5],
 [528.52849119999996, 56314.0],
 [571.80670780000003, 62899.0],
 [379.94101089999998, 69172.363639999996],
 [387.35032639999997, 57197.5],
 [311.04655310000004, 64457.0],
 [491.51983870000004, 68883.0],
 [425.83928030000004, 62723.333329999994],
 [283.13506619999998, 86400.0],
 [357.43441230000002, 65600.5],
 [178.33371940000001, 70245.0],
 [480.85915, 70532.333329999994],
 [303.3897308, 61915.5],
 [155.26873130000001, 65288.0],
 [305.58519810000001, 68748.75],
 [435.63325889999999, 63731.0],
 [136.55681140000002, 61971.583329999994],
 [287.11816429999999, 62154.0],
 [330.93638369999996, 67405.800000000003],
 [380.07567330000001, 61593.599999999999],
 [171.63480380000001, 58689.5],
 [293.48803270000002, 76062.0],
 [317.35949649999998, 60236.5],
 [329.79079860000002, 69306.0],
 [180.29726330000003, 79163.0],
 [393.12541560000005, 47563.0],
 [329.9921579, 66775.199999999997],
 [456.75308130000002, 66056.0],
 [494.75343939999993, 71246.0],
 [555.91817509999998, 71702.5],
 [542.46189010000001, 105107.0],
 [1083.152245, 70462.0],
 [174.86143669999998, 80177.0],
 [1397.6494789999999, 79536.0],
 [187.2187156, 77242.333329999994],
 [1253.6539810000002, 84672.0],
 [577.97000330000003, 78172.0],
 [1222.854724, 87152.75],
 [678.68402960000003, 76802.285709999996],
 [76.049456660000004, 77168.0],
 [130.53291240000001, 55798.0],
 [251.10452059999997, 76629.0],
 [1071.6638089999999, 93469.0],
 [1457.338514, 93763.0],
 [1348.0949720000001, 76445.333329999994],
 [951.25158390000001, 76622.0],
 [1007.8239, 77336.5],
 [1215.99621, 89984.0],
 [535.36225730000001, 89882.0],
 [405.15873870000001, 84289.0],
 [862.07080329999997, 85941.0],
 [890.19934279999995, 85235.0],
 [480.64503160000004, 81648.0],
 [930.71123560000001, 93509.0],
 [857.18610660000002, 81563.5],
 [557.34143539999991, 88582.0],
 [388.42128819999999, 90681.0],
 [554.39087810000001, 84920.375],
 [297.21577330000002, 82479.399999999994],
 [218.9324451, 82983.714290000004],
 [621.92888939999989, 85823.0],
 [397.71146170000003, 87379.0],
 [397.72450400000002, 82227.0],
 [343.25024810000002, 84858.0],
 [208.83067119999998, 96708.88235],
 [252.41188560000001, 97129.571429999996],
 [191.12302409999998, 66607.0],
 [81.902545059999994, 78757.846149999998],
 [293.78034400000001, 81931.875],
 [306.47800599999999, 91612.75],
 [129.9465716, 79182.0],
 [202.81293640000001, 102538.71430000001],
 [425.95641730000006, 45813.666669999999],
 [605.86113060000002, 73247.0],
 [222.1291784, 95350.75],
 [650.53508850000003, 77344.470589999997],
 [298.28056129999999, 84524.0],
 [635.88287060000005, 73625.0],
 [299.28891390000001, 128135.5],
 [319.22555849999998, 92672.199999999997],
 [167.19701709999998, 98726.375],
 [371.77140310000004, 92900.5],
 [783.82797989999995, 115237.5],
 [199.1974257, 102148.0],
 [301.81184150000001, 101288.0],
 [468.92565680000001, 94526.800000000003],
 [681.3526531, 76282.285709999996],
 [570.874146, 87731.199999999997],
 [786.37044270000001, 63260.0],
 [646.03479489999995, 96535.909090000001],
 [427.47172139999998, 107609.0],
 [210.07499319999999, 113949.125],
 [210.07499319999999, 87857.636360000004],
 [377.05597269999998, 103835.16],
 [303.16886800000003, 79311.0],
 [606.84146849999991, 122444.5714],
 [400.13836860000004, 86379.666670000006],
 [233.43521509999999, 85577.5],
 [542.15800730000001, 98528.263160000002],
 [289.93237989999994, 82184.199999999997],
 [296.06039449999997, 79878.0],
 [454.96726310000003, 72594.181819999998],
 [173.88921259999998, 93736.857139999993],
 [173.88921259999998, 106007.0],
 [173.88921259999998, 93364.5],
 [416.19243949999998, 108448.0],
 [148.95453480000003, 92978.600000000006],
 [463.76727259999996, 83237.75],
 [215.02893639999999, 92065.0],
 [102.01975040000001, 85476.449999999997],
 [235.26841209999998, 127766.14290000001],
 [325.42497579999997, 85106.0],
 [500.81527890000001, 99111.555560000008],
 [251.15931740000002, 61150.5],
 [305.55944030000001, 94147.0],
 [157.33080280000001, 89359.5],
 [344.40412369999996, 88201.0],
 [157.41408609999999, 87151.833329999994],
 [132.08174579999999, 67154.0],
 [381.45345319999996, 90575.0],
 [425.34069410000006, 96536.0],
 [500.50630690000003, 85275.800000000003],
 [263.83389440000002, 82594.5],
 [341.20188999999999, 91246.25],
 [2248.1270719999998, 87747.800000000003],
 [431.36783409999998, 93076.666670000006],
 [80.753534599999995, 89867.0],
 [2291.3505370000003, 49376.0],
 [1995.640977, 112969.0],
 [1873.9133539999998, 111382.0],
 [595.86047139999994, 84179.0],
 [1819.299814, 94563.0],
 [1481.712102, 110402.0],
 [1475.2509130000001, 102479.0],
 [1530.4216279999998, 91958.333329999994],
 [1368.0321880000001, 82860.333329999994],
 [1251.9791339999999, 105391.28569999999],
 [1195.8964429999999, 109239.75],
 [1118.8538449999999, 95211.0],
 [1078.777828, 108314.0],
 [805.74852079999994, 114973.0],
 [1098.841598, 115891.0],
 [834.2865382, 109973.0],
 [739.35514599999999, 103614.3333],
 [901.7758892999999, 106011.3333],
 [784.02643779999994, 85157.5],
 [824.34817279999993, 99418.5],
 [791.07133039999997, 81269.333329999994],
 [889.35890500000005, 99299.0],
 [529.15666380000005, 111671.75],
 [581.47150439999996, 100945.8],
 [730.86214319999999, 99938.25],
 [1027.851492, 62259.888889999995],
 [895.11103100000003, 89789.5],
 [964.43713709999997, 94730.199999999997],
 [1044.7256070000001, 121632.0],
 [501.02925959999999, 126048.0],
 [299.36223480000001, 111411.0],
 [707.91153479999991, 101273.3333],
 [598.72898450000002, 106523.0],
 [213.30857839999999, 115769.5],
 [350.1075495, 116672.5],
 [636.32659349999994, 124064.0],
 [245.79117299999999, 108255.0],
 [475.85014319999999, 159930.0],
 [188.23518909999999, 112714.0],
 [172.10775609999999, 118234.0],
 [181.68783149999999, 129264.5],
 [133.14087620000001, 143725.0],
 [871.74735680000003, 88877.5],
 [559.03826950000007, 117899.39999999999],
 [934.05604460000006, 76482.0],
 [857.08692050000002, 124731.0],
 [112.40355509999999, 110449.75],
 [602.63469889999999, 119148.3333],
 [103.7851208, 119870.0],
 [604.12065229999996, 126169.0],
 [519.84233119999999, 116524.0],
 [402.46345170000001, 111028.3333],
 [619.85232860000008, 102121.0909],
 [733.541563, 97003.5],
 [920.97139540000001, 126181.60000000001],
 [411.46628389999995, 116605.0],
 [348.95665269999995, 113049.0],
 [511.55519550000002, 108020.0],
 [678.63246170000002, 116060.0909],
 [836.05800979999992, 108962.5],
 [775.86834110000007, 54775.5],
 [480.32722840000002, 118253.5],
 [773.67913920000012, 90152.0],
 [678.14242229999991, 108914.0],
 [733.66551179999999, 106414.0],
 [481.83856179999998, 107328.0],
 [572.71968470000002, 66054.0],
 [570.79973749999999, 103093.0],
 [606.23411329999999, 103543.0],
 [816.04338139999993, 103853.8333],
 [1024.9922060000001, 111687.5],
 [657.77699040000005, 96480.333329999994],
 [629.46438260000002, 102477.0],
 [894.04716339999993, 107922.0],
 [788.61128910000002, 131710.6667],
 [769.48039429999994, 108202.75],
 [1031.6365430000001, 116212.6667],
 [1444.7644660000001, 117984.0],
 [731.64140539999994, 122943.0],
 [825.04760680000004, 115477.6667],
 [770.26448070000004, 138064.0],
 [939.17808450000007, 115289.875],
 [1009.949628, 122912.0],
 [1145.4266090000001, 138387.9412],
 [1048.8917240000001, 128167.6667],
 [1321.8304880000001, 80000.0],
 [1210.0109560000001, 123728.0],
 [1044.5596089999999, 125103.0],
 [1273.3465900000001, 133439.85709999999],
 [779.36582470000008, 70924.600000000006],
 [774.64354820000005, 76244.5],
 [1312.0326910000001, 117303.8],
 [1226.1568810000001, 137450.0],
 [1237.6107400000001, 137506.0],
 [831.32617800000003, 62339.0],
 [1419.3732210000001, 120159.0],
 [691.24934189999999, 83258.0],
 [709.47762649999993, 64914.0],
 [1736.9275260000002, 94050.0],
 [714.92712270000004, 91971.0],
 [1376.3821660000001, 109650.0],
 [623.69849739999995, 88084.666670000006],
 [1481.4467630000001, 121392.0],
 [646.86744099999999, 101996.2],
 [1529.242397, 97389.571429999996],
 [1743.974545, 107247.0],
 [1580.7819460000001, 108497.3333],
 [1308.56359, 94068.0],
 [1205.051651, 115787.7895],
 [1061.9685630000001, 109663.0],
 [472.35547810000003, 89351.5],
 [195.48531630000002, 102546.8333],
 [165.63831189999999, 92593.5],
 [1515.051027, 106882.3333],
 [604.33307710000008, 121313.0],
 [755.18551630000002, 121503.0],
 [259.15548390000004, 89107.5],
 [841.41614920000006, 68838.199999999997],
 [1020.238077, 119546.0],
 [355.1390518, 78979.0],
 [703.08304269999996, 98644.25],
 [901.6890517999999, 112729.14290000001],
 [933.83725970000012, 114968.0],
 [1462.1465599999999, 145618.5],
 [45.952277789999997, 63325.0],
 [354.51238870000003, 99618.0],
 [508.89286860000004, 96831.428570000004],
 [1044.826963, 115548.0],
 [552.19023160000006, 86701.0],
 [1350.7276259999999, 146199.0],
 [125.8542899, 126289.75],
 [326.51810730000005, 109901.0],
 [1507.596863, 130309.0],
 [244.59736329999998, 136400.5],
 [283.08903980000002, 107508.8],
 [813.56556190000003, 135184.5],
 [272.68114100000003, 131713.75],
 [670.39263079999989, 79048.399999999994],
 [590.35165199999994, 113401.5],
 [429.68863290000002, 99823.75],
 [411.80941180000002, 131310.42860000001],
 [505.38555059999999, 51641.5],
 [495.14066079999998, 133582.5],
 [651.50098300000002, 111486.75],
 [811.00974299999996, 102023.0],
 [995.52137529999982, 106927.3333],
 [978.45627079999986, 64258.0],
 [866.7145094, 100000.0],
 [447.12514789999994, 83644.0],
 [238.71988480000002, 109702.0],
 [238.71988480000002, 103674.5217],
 [238.71988480000002, 109211.9167],
 [238.71988480000002, 104457.0],
 [238.71988480000002, 116693.25],
 [720.6302882, 129259.2],
 [666.5915258, 120002.5],
 [923.67186459999994, 108598.0],
 [241.3756358, 84010.0],
 [726.39710250000007, 114781.3333],
 [123.02222909999999, 77218.0],
 [144.91100349999999, 76829.399999999994],
 [615.36341120000009, 136799.0],
 [195.09051399999998, 65454.0],
 [642.09920729999999, 123296.5],
 [1150.353715, 99301.0],
 [1555.633182, 103113.0],
 [716.05096870000011, 79689.0],
 [7.5399781050000003, 79432.0],
 [359.07986640000001, 94153.5],
 [1260.677594, 108577.0],
 [1389.5440310000001, 106804.25],
 [1321.7153050000002, 113751.0],
 [1777.8688710000001, 130629.0],
 [1164.6588960000001, 119944.5],
 [1606.8274800000002, 105027.0],
 [1409.9773970000001, 111320.0],
 [428.3814653, 117877.5],
 [1567.086409, 102528.5],
 [1157.2168550000001, 142942.0],
 [1295.496686, 121843.75],
 [722.46327070000007, 91226.0],
 [500.39802350000002, 108361.75],
 [1367.8458859999998, 103701.0],
 [566.08489129999998, 123661.0],
 [462.98279960000002, 125783.5],
 [309.06925369999999, 88272.0],
 [1218.1779570000001, 123218.0],
 [1144.922955, 116255.0],
 [540.2052698, 110640.0],
 [1807.8841730000001, 52865.0],
 [1878.670521, 105533.39999999999],
 [201.26716210000001, 112783.6333],
 [651.17635770000004, 71680.0],
 [133.56379050000001, 83468.0],
 [590.32007249999992, 114506.0],
 [1179.3002349999999, 98537.571429999996],
 [183.79070569999999, 113174.6667],
 [2652.2039199999999, 86107.666670000006],
 [2142.8755730000003, 90206.666670000006],
 [1807.17218, 103778.0],
 [2587.1866300000002, 80343.0],
 [2807.6955390000003, 85867.0],
 [250.59855970000001, 93753.5],
 [3016.2859710000002, 121763.0],
 [836.65430900000001, 94261.285709999996],
 [2992.6644139999999, 102940.5714],
 [747.94064620000006, 97909.25],
 [2506.3172030000001, 89137.0],
 [2724.2070210000002, 79655.0],
 [2037.5625059999998, 83935.0],
 [2230.4798839999999, 83929.333329999994],
 [1928.7458789999998, 80010.0],
 [2174.9259510000002, 84271.166670000006],
 [1945.9267329999998, 89964.0],
 [676.96236809999994, 103697.0],
 [2819.4935179999998, 108990.0],
 [810.86407079999992, 97700.5],
 [1866.6359120000002, 88245.333329999994],
 [2567.669191, 113314.6667],
 [2929.16084, 139607.0],
 [2962.684741, 109515.0],
 [2655.1869350000002, 110158.0],
 [208.6600756, 110524.0],
 [1869.5243920000003, 89900.0],
 [1421.7808949999999, 99532.0],
 [2098.890613, 89524.0],
 [1887.6441539999998, 90219.428570000004],
 [3349.3435260000001, 102633.0],
 [1185.3652199999999, 94523.0],
 [555.06513660000007, 98582.5],
 [2832.67148, 72469.0],
 [1680.3258559999999, 89244.0],
 [701.12209020000012, 94527.222220000011],
 [1952.161879, 109757.0],
 [1421.6182960000001, 91729.0],
 [1602.8180279999999, 93276.0],
 [1904.2937199999999, 100055.5],
 [1354.924266, 104183.0],
 [1217.6058169999999, 97105.666670000006],
 [970.35226870000008, 90883.5],
 [1903.09167, 85994.399999999994],
 [1336.5163480000001, 85366.666670000006],
 [1504.1450810000001, 99953.0],
 [1661.1867849999999, 91864.0],
 [2018.884145, 114931.5],
 [2042.0478649999998, 44965.0],
 [2092.032087, 92706.333329999994]]
    }, {
        name: 'Nearest Middle School',
        color: 'rgba(119, 152, 191, .5)',
        data: [[3001.75756, 48813.75],
 [13307.90432, 48547.5],
 [494.61760120000002, 65974.399999999994],
 [638.94851439999991, 62862.5],
 [528.52849119999996, 56314.0],
 [571.80670780000003, 62899.0],
 [379.94101089999998, 69172.363639999996],
 [387.35032639999997, 57197.5],
 [311.04655310000004, 64457.0],
 [491.51983870000004, 68883.0],
 [425.83928030000004, 62723.333329999994],
 [283.13506619999998, 86400.0],
 [357.43441230000002, 65600.5],
 [178.33371940000001, 70245.0],
 [480.85915, 70532.333329999994],
 [303.3897308, 61915.5],
 [155.26873130000001, 65288.0],
 [305.58519810000001, 68748.75],
 [435.63325889999999, 63731.0],
 [136.55681140000002, 61971.583329999994],
 [287.11816429999999, 62154.0],
 [330.93638369999996, 67405.800000000003],
 [380.07567330000001, 61593.599999999999],
 [171.63480380000001, 58689.5],
 [293.48803270000002, 76062.0],
 [317.35949649999998, 60236.5],
 [329.79079860000002, 69306.0],
 [180.29726330000003, 79163.0],
 [393.12541560000005, 47563.0],
 [329.9921579, 66775.199999999997],
 [456.75308130000002, 66056.0],
 [494.75343939999993, 71246.0],
 [555.91817509999998, 71702.5],
 [542.46189010000001, 105107.0],
 [1083.152245, 70462.0],
 [174.86143669999998, 80177.0],
 [1397.6494789999999, 79536.0],
 [187.2187156, 77242.333329999994],
 [1253.6539810000002, 84672.0],
 [577.97000330000003, 78172.0],
 [1222.854724, 87152.75],
 [678.68402960000003, 76802.285709999996],
 [76.049456660000004, 77168.0],
 [130.53291240000001, 55798.0],
 [251.10452059999997, 76629.0],
 [1071.6638089999999, 93469.0],
 [1457.338514, 93763.0],
 [1348.0949720000001, 76445.333329999994],
 [951.25158390000001, 76622.0],
 [1007.8239, 77336.5],
 [1215.99621, 89984.0],
 [535.36225730000001, 89882.0],
 [405.15873870000001, 84289.0],
 [862.07080329999997, 85941.0],
 [890.19934279999995, 85235.0],
 [480.64503160000004, 81648.0],
 [930.71123560000001, 93509.0],
 [857.18610660000002, 81563.5],
 [557.34143539999991, 88582.0],
 [388.42128819999999, 90681.0],
 [554.39087810000001, 84920.375],
 [297.21577330000002, 82479.399999999994],
 [218.9324451, 82983.714290000004],
 [621.92888939999989, 85823.0],
 [397.71146170000003, 87379.0],
 [397.72450400000002, 82227.0],
 [343.25024810000002, 84858.0],
 [208.83067119999998, 96708.88235],
 [252.41188560000001, 97129.571429999996],
 [191.12302409999998, 66607.0],
 [81.902545059999994, 78757.846149999998],
 [293.78034400000001, 81931.875],
 [306.47800599999999, 91612.75],
 [129.9465716, 79182.0],
 [202.81293640000001, 102538.71430000001],
 [425.95641730000006, 45813.666669999999],
 [605.86113060000002, 73247.0],
 [222.1291784, 95350.75],
 [650.53508850000003, 77344.470589999997],
 [298.28056129999999, 84524.0],
 [635.88287060000005, 73625.0],
 [299.28891390000001, 128135.5],
 [319.22555849999998, 92672.199999999997],
 [167.19701709999998, 98726.375],
 [371.77140310000004, 92900.5],
 [783.82797989999995, 115237.5],
 [199.1974257, 102148.0],
 [301.81184150000001, 101288.0],
 [468.92565680000001, 94526.800000000003],
 [681.3526531, 76282.285709999996],
 [570.874146, 87731.199999999997],
 [786.37044270000001, 63260.0],
 [646.03479489999995, 96535.909090000001],
 [427.47172139999998, 107609.0],
 [210.07499319999999, 113949.125],
 [210.07499319999999, 87857.636360000004],
 [377.05597269999998, 103835.16],
 [303.16886800000003, 79311.0],
 [606.84146849999991, 122444.5714],
 [400.13836860000004, 86379.666670000006],
 [233.43521509999999, 85577.5],
 [542.15800730000001, 98528.263160000002],
 [289.93237989999994, 82184.199999999997],
 [296.06039449999997, 79878.0],
 [454.96726310000003, 72594.181819999998],
 [173.88921259999998, 93736.857139999993],
 [173.88921259999998, 106007.0],
 [173.88921259999998, 93364.5],
 [416.19243949999998, 108448.0],
 [148.95453480000003, 92978.600000000006],
 [463.76727259999996, 83237.75],
 [215.02893639999999, 92065.0],
 [102.01975040000001, 85476.449999999997],
 [235.26841209999998, 127766.14290000001],
 [325.42497579999997, 85106.0],
 [500.81527890000001, 99111.555560000008],
 [251.15931740000002, 61150.5],
 [305.55944030000001, 94147.0],
 [157.33080280000001, 89359.5],
 [344.40412369999996, 88201.0],
 [157.41408609999999, 87151.833329999994],
 [132.08174579999999, 67154.0],
 [381.45345319999996, 90575.0],
 [425.34069410000006, 96536.0],
 [500.50630690000003, 85275.800000000003],
 [263.83389440000002, 82594.5],
 [341.20188999999999, 91246.25],
 [1708.648639, 87747.800000000003],
 [431.36783409999998, 93076.666670000006],
 [80.753534599999995, 89867.0],
 [1678.5331780000001, 49376.0],
 [1538.0806029999999, 112969.0],
 [1506.505009, 111382.0],
 [595.86047139999994, 84179.0],
 [1183.4756849999999, 94563.0],
 [1456.5031160000001, 110402.0],
 [1380.6128900000001, 102479.0],
 [834.35213859999999, 91958.333329999994],
 [740.44322249999993, 82860.333329999994],
 [601.44702360000008, 105391.28569999999],
 [748.41926530000001, 109239.75],
 [637.53749540000001, 95211.0],
 [692.62303339999994, 108314.0],
 [119.39367779999999, 114973.0],
 [780.81677270000012, 115891.0],
 [353.11492599999997, 109973.0],
 [136.67435399999999, 103614.3333],
 [557.49473379999995, 106011.3333],
 [367.57403419999997, 85157.5],
 [511.31794719999999, 99418.5],
 [486.09040350000004, 81269.333329999994],
 [697.67188049999993, 99299.0],
 [523.08031619999997, 111671.75],
 [172.36087269999999, 100945.8],
 [500.79797989999997, 99938.25],
 [896.91838689999986, 62259.888889999995],
 [776.57957179999994, 89789.5],
 [880.96315370000002, 94730.199999999997],
 [140.52218530000002, 121632.0],
 [406.9314129, 126048.0],
 [295.84001549999999, 111411.0],
 [204.2117107, 101273.3333],
 [314.29174389999997, 106523.0],
 [213.30857839999999, 115769.5],
 [350.1075495, 116672.5],
 [584.17895439999995, 124064.0],
 [245.79117299999999, 108255.0],
 [475.85014319999999, 159930.0],
 [188.23518909999999, 112714.0],
 [126.87203020000001, 118234.0],
 [181.68783149999999, 129264.5],
 [133.14087620000001, 143725.0],
 [596.14439149999998, 88877.5],
 [391.53918920000001, 117899.39999999999],
 [627.32881839999993, 76482.0],
 [277.4368723, 124731.0],
 [25.899652119999999, 110449.75],
 [364.87620730000003, 119148.3333],
 [48.078137259999998, 119870.0],
 [257.08143849999999, 126169.0],
 [213.67535699999999, 116524.0],
 [214.5676196, 111028.3333],
 [246.58519559999996, 102121.0909],
 [305.69592189999997, 97003.5],
 [62.236916639999997, 126181.60000000001],
 [153.9185914, 116605.0],
 [42.079086850000003, 113049.0],
 [53.536667049999998, 108020.0],
 [302.14177660000001, 116060.0909],
 [179.3878134, 108962.5],
 [226.63209069999996, 54775.5],
 [127.77750949999999, 118253.5],
 [301.49417010000002, 90152.0],
 [121.2582707, 108914.0],
 [176.9469593, 106414.0],
 [471.7565851, 107328.0],
 [572.71968470000002, 66054.0],
 [300.60171610000003, 103093.0],
 [255.34679550000001, 103543.0],
 [260.58505509999998, 103853.8333],
 [347.16507010000004, 111687.5],
 [263.72206869999997, 96480.333329999994],
 [290.62171530000001, 102477.0],
 [366.70391380000001, 107922.0],
 [370.31537900000001, 131710.6667],
 [374.10650049999998, 108202.75],
 [513.46054349999997, 116212.6667],
 [663.09361090000004, 117984.0],
 [662.69695899999999, 122943.0],
 [825.04760680000004, 115477.6667],
 [658.653774, 138064.0],
 [478.32357810000002, 115289.875],
 [533.13853610000001, 122912.0],
 [624.59006339999996, 138387.9412],
 [582.8854667999999, 128167.6667],
 [781.07961220000004, 80000.0],
 [299.69538419999998, 123728.0],
 [737.45601720000002, 125103.0],
 [806.69970810000007, 133439.85709999999],
 [779.36582470000008, 70924.600000000006],
 [774.64354820000005, 76244.5],
 [231.19872530000001, 117303.8],
 [295.4026126, 137450.0],
 [324.58993520000001, 137506.0],
 [831.32617800000003, 62339.0],
 [957.81686420000005, 120159.0],
 [691.24934189999999, 83258.0],
 [709.47762649999993, 64914.0],
 [812.52467149999995, 94050.0],
 [714.92712270000004, 91971.0],
 [1180.2589809999999, 109650.0],
 [623.69849739999995, 88084.666670000006],
 [449.39033600000005, 121392.0],
 [646.86744099999999, 101996.2],
 [1208.6572980000001, 97389.571429999996],
 [648.6793533, 107247.0],
 [686.46915639999997, 108497.3333],
 [1308.56359, 94068.0],
 [1205.051651, 115787.7895],
 [1061.9685630000001, 109663.0],
 [472.35547810000003, 89351.5],
 [195.48531630000002, 102546.8333],
 [165.63831189999999, 92593.5],
 [117.31497560000001, 106882.3333],
 [604.33307710000008, 121313.0],
 [748.22814170000004, 121503.0],
 [259.15548390000004, 89107.5],
 [841.41614920000006, 68838.199999999997],
 [506.44393629999996, 119546.0],
 [355.1390518, 78979.0],
 [703.08304269999996, 98644.25],
 [901.6890517999999, 112729.14290000001],
 [933.83725970000012, 114968.0],
 [302.74993999999998, 145618.5],
 [45.952277789999997, 63325.0],
 [354.51238870000003, 99618.0],
 [508.89286860000004, 96831.428570000004],
 [1044.826963, 115548.0],
 [552.19023160000006, 86701.0],
 [369.6841435, 146199.0],
 [125.8542899, 126289.75],
 [326.51810730000005, 109901.0],
 [478.41278899999998, 130309.0],
 [244.59736329999998, 136400.5],
 [283.08903980000002, 107508.8],
 [746.12475510000002, 135184.5],
 [221.68728039999999, 131713.75],
 [670.39263079999989, 79048.399999999994],
 [590.35165199999994, 113401.5],
 [429.68863290000002, 99823.75],
 [206.0316784, 131310.42860000001],
 [505.38555059999999, 51641.5],
 [204.5681391, 133582.5],
 [651.50098300000002, 111486.75],
 [602.84819600000003, 102023.0],
 [995.52137529999982, 106927.3333],
 [978.45627079999986, 64258.0],
 [866.7145094, 100000.0],
 [447.12514789999994, 83644.0],
 [238.71988480000002, 109702.0],
 [238.71988480000002, 103674.5217],
 [238.71988480000002, 109211.9167],
 [238.71988480000002, 104457.0],
 [238.71988480000002, 116693.25],
 [177.27804840000002, 129259.2],
 [69.522855849999999, 120002.5],
 [923.67186459999994, 108598.0],
 [241.3756358, 84010.0],
 [46.928172840000002, 114781.3333],
 [123.02222909999999, 77218.0],
 [144.91100349999999, 76829.399999999994],
 [615.36341120000009, 136799.0],
 [195.09051399999998, 65454.0],
 [642.09920729999999, 123296.5],
 [576.60340389999999, 99301.0],
 [265.28142730000002, 103113.0],
 [716.05096870000011, 79689.0],
 [7.5399781050000003, 79432.0],
 [359.07986640000001, 94153.5],
 [478.62292989999997, 108577.0],
 [360.02813239999995, 106804.25],
 [469.11284239999998, 113751.0],
 [166.4302003, 130629.0],
 [509.65064510000002, 119944.5],
 [111.43599409999999, 105027.0],
 [389.05367969999998, 111320.0],
 [428.3814653, 117877.5],
 [186.99625800000001, 102528.5],
 [402.16905049999997, 142942.0],
 [1295.496686, 121843.75],
 [722.46327070000007, 91226.0],
 [500.39802350000002, 108361.75],
 [567.06618509999998, 103701.0],
 [566.08489129999998, 123661.0],
 [462.98279960000002, 125783.5],
 [309.06925369999999, 88272.0],
 [422.01875519999999, 123218.0],
 [1144.922955, 116255.0],
 [540.2052698, 110640.0],
 [104.2117142, 52865.0],
 [169.75898810000001, 105533.39999999999],
 [201.26716210000001, 112783.6333],
 [651.17635770000004, 71680.0],
 [133.56379050000001, 83468.0],
 [590.32007249999992, 114506.0],
 [769.04546020000009, 98537.571429999996],
 [183.79070569999999, 113174.6667],
 [394.39563559999999, 86107.666670000006],
 [513.36838770000008, 90206.666670000006],
 [441.09207980000002, 103778.0],
 [394.3671693, 80343.0],
 [317.24044460000005, 85867.0],
 [250.59855970000001, 93753.5],
 [362.93091860000004, 121763.0],
 [531.0090477, 94261.285709999996],
 [311.4276327, 102940.5714],
 [558.2790516, 97909.25],
 [269.36416989999998, 89137.0],
 [90.560175560000005, 79655.0],
 [298.62888419999996, 83935.0],
 [483.72971439999992, 83929.333329999994],
 [196.4201918, 80010.0],
 [428.18432280000002, 84271.166670000006],
 [204.32078480000001, 89964.0],
 [260.42615060000003, 103697.0],
 [171.22434119999997, 108990.0],
 [431.35531439999994, 97700.5],
 [174.88143780000001, 88245.333329999994],
 [223.57711669999998, 113314.6667],
 [333.61898719999999, 139607.0],
 [435.146612, 109515.0],
 [340.72366069999998, 110158.0],
 [208.6600756, 110524.0],
 [376.73839340000001, 89900.0],
 [132.42654840000003, 99532.0],
 [565.61761729999989, 89524.0],
 [473.17634630000003, 90219.428570000004],
 [878.18643440000005, 102633.0],
 [344.74095239999997, 94523.0],
 [394.79433539999997, 98582.5],
 [601.86163020000004, 72469.0],
 [368.97238030000005, 89244.0],
 [542.38266170000009, 94527.222220000011],
 [579.68777929999999, 109757.0],
 [328.29806969999999, 91729.0],
 [444.00586399999997, 93276.0],
 [620.68575589999989, 100055.5],
 [475.3400206, 104183.0],
 [581.44619229999989, 97105.666670000006],
 [763.78212499999995, 90883.5],
 [692.03173770000001, 85994.399999999994],
 [772.71436970000002, 85366.666670000006],
 [754.21453270000006, 99953.0],
 [859.35916799999995, 91864.0],
 [1381.6959019999999, 114931.5],
 [1426.4723140000001, 44965.0],
 [1541.4865769999999, 92706.333329999994]]

    },{
        name: 'Best Middle School in District',
        color: 'rgba(219, 152, 1, .5)',
        data: [[3001.75756, 48813.75],
 [13307.90432, 48547.5],
 [6477.9061520000005, 65974.399999999994],
 [6509.3987040000002, 62862.5],
 [6479.032013, 56314.0],
 [6410.0621899999996, 62899.0],
 [6283.0471829999997, 69172.363639999996],
 [6459.6145229999993, 57197.5],
 [6234.4549130000005, 64457.0],
 [6248.5992990000004, 68883.0],
 [6358.4637439999997, 62723.333329999994],
 [6420.3645259999994, 86400.0],
 [6188.4356950000001, 65600.5],
 [6163.0568960000001, 70245.0],
 [6134.5654329999998, 70532.333329999994],
 [6343.3989110000002, 61915.5],
 [6090.9490519999999, 65288.0],
 [6184.7182579999999, 68748.75],
 [6072.8410329999997, 63731.0],
 [6276.2862909999994, 61971.583329999994],
 [6102.5590780000002, 62154.0],
 [6260.9352950000002, 67405.800000000003],
 [6246.8103770000007, 61593.599999999999],
 [6168.0794519999999, 58689.5],
 [5959.4530490000006, 76062.0],
 [5929.5560530000002, 60236.5],
 [5721.7547299999997, 69306.0],
 [5745.2655460000005, 79163.0],
 [5595.8304369999996, 47563.0],
 [5920.380048, 66775.199999999997],
 [5585.039898, 66056.0],
 [5494.1885119999997, 71246.0],
 [5513.1144279999999, 71702.5],
 [5797.53809, 105107.0],
 [6095.1452070000005, 70462.0],
 [5155.3916149999995, 80177.0],
 [5256.8134119999995, 79536.0],
 [5153.2055840000003, 77242.333329999994],
 [5324.6550909999996, 84672.0],
 [5036.7206229999993, 78172.0],
 [5244.5614530000003, 87152.75],
 [4956.6341540000003, 76802.285709999996],
 [5016.1101319999998, 77168.0],
 [4896.0090200000004, 55798.0],
 [4918.1348259999995, 76629.0],
 [4999.7104939999999, 93469.0],
 [4830.7698689999997, 93763.0],
 [4797.1900409999998, 76445.333329999994],
 [4904.6763359999995, 76622.0],
 [4444.8291719999997, 77336.5],
 [4382.715725, 89984.0],
 [4350.7203360000003, 89882.0],
 [4398.6428429999996, 84289.0],
 [4159.3577189999996, 85941.0],
 [4121.8107950000003, 85235.0],
 [4180.0378600000004, 81648.0],
 [3966.7177810000003, 93509.0],
 [3961.4818789999999, 81563.5],
 [3902.2977729999998, 88582.0],
 [3912.5967639999999, 90681.0],
 [3672.1829560000001, 84920.375],
 [3690.9400200000005, 82479.399999999994],
 [3826.8581610000001, 82983.714290000004],
 [3628.2666649999996, 85823.0],
 [3648.3556399999998, 87379.0],
 [3417.8775200000005, 82227.0],
 [3556.6928829999997, 84858.0],
 [3762.482782, 96708.88235],
 [3615.4071789999998, 97129.571429999996],
 [3668.6179020000004, 66607.0],
 [3341.1514780000002, 78757.846149999998],
 [3275.4080199999999, 81931.875],
 [3437.0579060000005, 91612.75],
 [3268.2196610000001, 79182.0],
 [3388.8961670000003, 102538.71430000001],
 [3418.7654310000003, 45813.666669999999],
 [3400.477817, 73247.0],
 [3134.3348030000002, 95350.75],
 [3669.807354, 77344.470589999997],
 [3189.3974899999998, 84524.0],
 [3685.1181689999999, 73625.0],
 [3044.6485559999996, 128135.5],
 [3172.3797300000001, 92672.199999999997],
 [3067.471626, 98726.375],
 [3133.1323429999998, 92900.5],
 [2946.5016179999998, 115237.5],
 [3023.6118000000001, 102148.0],
 [2970.1010699999997, 101288.0],
 [3110.1435940000001, 94526.800000000003],
 [3258.1014420000001, 76282.285709999996],
 [2962.0600469999999, 87731.199999999997],
 [2814.1910989999997, 63260.0],
 [2792.3802300000002, 96535.909090000001],
 [2872.552588, 107609.0],
 [2950.287452, 113949.125],
 [2950.287452, 87857.636360000004],
 [2740.2810909999998, 103835.16],
 [3139.841625, 79311.0],
 [2683.922959, 122444.5714],
 [2781.2420050000001, 86379.666670000006],
 [3289.6350539999999, 85577.5],
 [2598.3978269999998, 98528.263160000002],
 [3038.0447079999999, 82184.199999999997],
 [2669.043298, 79878.0],
 [2532.0410420000003, 72594.181819999998],
 [2604.2244760000003, 93736.857139999993],
 [2604.2244760000003, 106007.0],
 [2604.2244760000003, 93364.5],
 [2660.6244510000001, 108448.0],
 [2818.2312999999999, 92978.600000000006],
 [2408.7839649999996, 83237.75],
 [2717.1140249999999, 92065.0],
 [2967.7934019999998, 85476.449999999997],
 [2302.1803219999997, 127766.14290000001],
 [2817.4018760000004, 85106.0],
 [2342.684197, 99111.555560000008],
 [2303.4674600000003, 61150.5],
 [2711.5077879999999, 94147.0],
 [2391.573382, 89359.5],
 [2604.9205550000001, 88201.0],
 [2950.0713000000001, 87151.833329999994],
 [2321.3290030000003, 67154.0],
 [2636.8077309999999, 90575.0],
 [2493.612905, 96536.0],
 [2381.5971989999998, 85275.800000000003],
 [2196.416056, 82594.5],
 [2800.6489230000002, 91246.25],
 [2248.1270719999998, 87747.800000000003],
 [2082.38402, 93076.666670000006],
 [2005.1491230000001, 89867.0],
 [2291.3505370000003, 49376.0],
 [1995.640977, 112969.0],
 [1873.9133539999998, 111382.0],
 [2657.914929, 84179.0],
 [1819.299814, 94563.0],
 [1481.712102, 110402.0],
 [1475.2509130000001, 102479.0],
 [1530.4216279999998, 91958.333329999994],
 [1368.0321880000001, 82860.333329999994],
 [1251.9791339999999, 105391.28569999999],
 [1195.8964429999999, 109239.75],
 [1118.8538449999999, 95211.0],
 [1078.777828, 108314.0],
 [805.74852079999994, 114973.0],
 [1098.841598, 115891.0],
 [795.67093129999989, 109973.0],
 [739.35514599999999, 103614.3333],
 [901.7758892999999, 106011.3333],
 [784.02643779999994, 85157.5],
 [824.34817279999993, 99418.5],
 [791.07133039999997, 81269.333329999994],
 [889.35890500000005, 99299.0],
 [529.15666380000005, 111671.75],
 [581.47150439999996, 100945.8],
 [730.86214319999999, 99938.25],
 [1027.851492, 62259.888889999995],
 [895.11103100000003, 89789.5],
 [964.43713709999997, 94730.199999999997],
 [1044.7256070000001, 121632.0],
 [501.02925959999999, 126048.0],
 [299.36223480000001, 111411.0],
 [707.91153479999991, 101273.3333],
 [598.72898450000002, 106523.0],
 [213.30857839999999, 115769.5],
 [350.1075495, 116672.5],
 [636.32659349999994, 124064.0],
 [245.79117299999999, 108255.0],
 [475.85014319999999, 159930.0],
 [188.23518909999999, 112714.0],
 [172.10775609999999, 118234.0],
 [181.68783149999999, 129264.5],
 [133.14087620000001, 143725.0],
 [871.74735680000003, 88877.5],
 [559.03826950000007, 117899.39999999999],
 [934.05604460000006, 76482.0],
 [857.08692050000002, 124731.0],
 [112.40355509999999, 110449.75],
 [602.63469889999999, 119148.3333],
 [103.7851208, 119870.0],
 [604.12065229999996, 126169.0],
 [519.84233119999999, 116524.0],
 [402.46345170000001, 111028.3333],
 [619.85232860000008, 102121.0909],
 [733.541563, 97003.5],
 [920.97139540000001, 126181.60000000001],
 [411.46628389999995, 116605.0],
 [348.95665269999995, 113049.0],
 [511.55519550000002, 108020.0],
 [678.63246170000002, 116060.0909],
 [836.05800979999992, 108962.5],
 [775.86834110000007, 54775.5],
 [480.32722840000002, 118253.5],
 [773.67913920000012, 90152.0],
 [678.14242229999991, 108914.0],
 [733.66551179999999, 106414.0],
 [481.83856179999998, 107328.0],
 [572.71968470000002, 66054.0],
 [570.79973749999999, 103093.0],
 [606.23411329999999, 103543.0],
 [816.04338139999993, 103853.8333],
 [1024.9922060000001, 111687.5],
 [657.77699040000005, 96480.333329999994],
 [629.46438260000002, 102477.0],
 [894.04716339999993, 107922.0],
 [788.61128910000002, 131710.6667],
 [769.48039429999994, 108202.75],
 [1031.6365430000001, 116212.6667],
 [1444.7644660000001, 117984.0],
 [731.64140539999994, 122943.0],
 [825.04760680000004, 115477.6667],
 [770.26448070000004, 138064.0],
 [939.17808450000007, 115289.875],
 [1009.949628, 122912.0],
 [1145.4266090000001, 138387.9412],
 [1048.8917240000001, 128167.6667],
 [1321.8304880000001, 80000.0],
 [1160.996396, 123728.0],
 [1044.5596089999999, 125103.0],
 [1273.3465900000001, 133439.85709999999],
 [2039.2710760000002, 70924.600000000006],
 [1950.3070399999999, 76244.5],
 [977.74799240000004, 117303.8],
 [807.40882799999997, 137450.0],
 [793.93457990000002, 137506.0],
 [1691.4587960000001, 62339.0],
 [1419.3732210000001, 120159.0],
 [1887.7241370000002, 83258.0],
 [1826.403427, 64914.0],
 [1280.367767, 94050.0],
 [1795.7254649999998, 91971.0],
 [896.61646879999989, 109650.0],
 [1896.0469390000001, 88084.666670000006],
 [557.50776759999997, 121392.0],
 [1867.780818, 101996.2],
 [1076.852738, 97389.571429999996],
 [890.86658540000008, 107247.0],
 [494.61317750000006, 108497.3333],
 [1020.9886230000001, 94068.0],
 [1225.4574619999999, 115787.7895],
 [1323.7139, 109663.0],
 [1920.0561680000001, 89351.5],
 [2241.768368, 102546.8333],
 [2407.5568829999997, 92593.5],
 [1515.051027, 106882.3333],
 [604.33307710000008, 121313.0],
 [755.18551630000002, 121503.0],
 [2092.345241, 89107.5],
 [1508.5141230000002, 68838.199999999997],
 [1020.238077, 119546.0],
 [1991.6067039999998, 78979.0],
 [1643.768566, 98644.25],
 [1426.2547119999999, 112729.14290000001],
 [1139.8708160000001, 114968.0],
 [1462.1465599999999, 145618.5],
 [2368.109817, 63325.0],
 [1993.70722, 99618.0],
 [1838.7381660000001, 96831.428570000004],
 [768.18335039999999, 115548.0],
 [1799.0014269999999, 86701.0],
 [1350.7276259999999, 146199.0],
 [2255.0079660000001, 126289.75],
 [2100.048906, 109901.0],
 [1507.596863, 130309.0],
 [244.59736329999998, 136400.5],
 [2318.294997, 107508.8],
 [813.56556190000003, 135184.5],
 [272.68114100000003, 131713.75],
 [1745.7513969999998, 79048.399999999994],
 [1192.3386499999999, 113401.5],
 [2170.0679300000002, 99823.75],
 [411.80941180000002, 131310.42860000001],
 [2156.895982, 51641.5],
 [495.14066079999998, 133582.5],
 [996.63362120000011, 111486.75],
 [811.00974299999996, 102023.0],
 [688.58952039999997, 106927.3333],
 [717.49049079999998, 64258.0],
 [825.50109120000002, 100000.0],
 [2217.4216630000001, 83644.0],
 [1414.3178089999999, 109702.0],
 [1414.3178089999999, 103674.5217],
 [1414.3178089999999, 109211.9167],
 [1414.3178089999999, 104457.0],
 [1414.3178089999999, 116693.25],
 [720.6302882, 129259.2],
 [666.5915258, 120002.5],
 [830.5947304, 108598.0],
 [2432.4785360000001, 84010.0],
 [726.39710250000007, 114781.3333],
 [2658.6689579999997, 77218.0],
 [2722.0699449999997, 76829.399999999994],
 [1102.236948, 136799.0],
 [2793.1280430000002, 65454.0],
 [1112.8991550000001, 123296.5],
 [1150.353715, 99301.0],
 [1555.633182, 103113.0],
 [1072.745995, 79689.0],
 [2641.0534710000002, 79432.0],
 [1348.6632930000001, 94153.5],
 [1260.677594, 108577.0],
 [1389.5440310000001, 106804.25],
 [1321.7153050000002, 113751.0],
 [1777.8688710000001, 130629.0],
 [1164.6588960000001, 119944.5],
 [1606.8274800000002, 105027.0],
 [1409.9773970000001, 111320.0],
 [1479.4616490000001, 117877.5],
 [1567.086409, 102528.5],
 [1157.2168550000001, 142942.0],
 [1105.435479, 121843.75],
 [1321.274899, 91226.0],
 [1508.3472099999999, 108361.75],
 [1367.8458859999998, 103701.0],
 [1467.6506949999998, 123661.0],
 [1560.957842, 125783.5],
 [1959.255639, 88272.0],
 [1218.1779570000001, 123218.0],
 [1210.0444519999999, 116255.0],
 [1521.824732, 110640.0],
 [1807.8841730000001, 52865.0],
 [1878.670521, 105533.39999999999],
 [2355.1145890000003, 112783.6333],
 [1623.0981119999999, 71680.0],
 [2373.5126609999998, 83468.0],
 [1871.3040859999999, 114506.0],
 [1542.843701, 98537.571429999996],
 [2443.6273369999999, 113174.6667],
 [2017.8244, 86107.666670000006],
 [1706.1914629999999, 90206.666670000006],
 [1587.9464599999999, 103778.0],
 [2005.316421, 80343.0],
 [2169.538939, 85867.0],
 [2381.8296, 93753.5],
 [2372.397297, 121763.0],
 [1876.85772, 94261.285709999996],
 [2415.0774300000003, 102940.5714],
 [2056.1600559999997, 97909.25],
 [2157.288798, 89137.0],
 [2322.8724109999998, 79655.0],
 [1975.592666, 83935.0],
 [2087.8191870000001, 83929.333329999994],
 [1958.8249020000001, 80010.0],
 [2066.924137, 84271.166670000006],
 [1989.8640499999999, 89964.0],
 [2056.0565750000001, 103697.0],
 [2567.150048, 108990.0],
 [2087.101341, 97700.5],
 [2163.1402899999998, 88245.333329999994],
 [2485.499006, 113314.6667],
 [2726.8681609999999, 139607.0],
 [2832.4369030000003, 109515.0],
 [2666.9066680000001, 110158.0],
 [2511.7568969999998, 110524.0],
 [2396.9233920000001, 89900.0],
 [2331.4481539999997, 99532.0],
 [2527.2674729999999, 89524.0],
 [2505.7845600000001, 90219.428570000004],
 [3259.1618489999996, 102633.0],
 [2398.3137550000001, 94523.0],
 [2493.6018920000001, 98582.5],
 [2965.700237, 72469.0],
 [2543.6152940000002, 89244.0],
 [2527.0558510000001, 94527.222220000011],
 [2625.267566, 109757.0],
 [2530.659044, 91729.0],
 [2651.9979239999998, 93276.0],
 [2739.0100010000001, 100055.5],
 [2656.0432860000001, 104183.0],
 [2703.185575, 97105.666670000006],
 [2740.6590390000001, 90883.5],
 [2838.5433010000002, 85994.399999999994],
 [2931.7345530000002, 85366.666670000006],
 [2955.003393, 99953.0],
 [3071.291483, 91864.0],
 [3594.2626609999998, 114931.5],
 [3639.0958390000001, 44965.0],
 [3753.8790859999999, 92706.333329999994]]
    }]
});

};