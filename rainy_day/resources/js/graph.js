var chart = echarts.init(document.getElementById('graph'));

var seriesName = display == 0 ? 'Pluie' : 'Température';
var seriesColor = display == 0 ? 'blue' : 'red';

var option = {
    tooltip: {},
    xAxis: {
        type: 'category',
        data: dates
    },
    yAxis: {
        type: 'value',
        data: data
    },
    dataZoom: [{
        type: 'inside'
    }],
    series: [{
        name: seriesName,
        data: data,
        type: 'line',
        showSymbol: true,
        lineStyle: {
            color: seriesColor
        },
        itemStyle: {
            color: seriesColor
        }
    }]
};

// utiliser les options spécifiées pour afficher le graphique
chart.setOption(option);

// Ajouter un gestionnaire d'événements pour l'événement de clic sur le graphique
chart.on('click', function (params) {
    if (params.componentType === 'series') {
        // Récupérer la date à partir des données du graphique
        var date = params.name;
        // Séparer la date en année, mois et jour
        var dateParts = date.split('-');
        var year = dateParts[0];
        var month = dateParts[1];
        var day = dateParts[2];

        // Remplacer les parties de l'URL avec les valeurs dynamiques
        var detailsUrl = detailsUrlTemplate.replace(':year', year).replace(':month', month).replace(':day', day);

        // Rediriger l'utilisateur vers une autre page en utilisant la date
        window.location.href = detailsUrl;
    }
});