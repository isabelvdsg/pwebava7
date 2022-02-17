 
function showBarChart () {
{
$.post ("ajax-endpoint/get-chart-data.php? chart_type=bar",
função (dados) {
console.log (dados);
var nome=[];
var raca=[]; para (var i em dados) {
nome.push (data [i].nome);
raca.push (dados [i].raca);
} var chartdata={
rótulos: nome,
conjuntos de dados: [
{
rótulo:'Raca dos animais',
backgroundColor:'# 49e2ff',
borderColor:'# 46d5f1',
hoverBackgroundColor:'#CCCCCC',
hoverBorderColor:'# 666666',
dados: marcas
}
]
}; var graphTarget=$ ("# bar-chart"); var graph=new Chart (graphTarget, {
tipo:'bar',
data: chartdata
});
});
}
} function showPieChart () {
{
$.post ("ajax-endpoint/get-chart-data.php? chart_type=pie",
função (dados) {
var nome=[];
var raca=[];
var bgColor=[]; para (var i em dados) {
nome.push (data [i].label);
raca.push (data [i].data);
bgColor.push (data [i].backgroundColor);
} var chartdata={
rótulos: nome,
conjuntos de dados: [
{
rótulo:'Raca dos animais',
backgroundColor: bgColor,
dados: marcas
}
]
}; var graphTarget=$ ("# gráfico de colunas"); var graph=new Chart (graphTarget, {
tipo:'torta',
data: chartdata
});
});
}
} function showDoughnutChart () {
{
Chart.pluginService.register ({
beforeDraw: function (chart) {
var width=chart.chart.width,
height=chart.chart.height + 35,
ctx=chart.chart.ctx; ctx.save ();
ctx.font="negrito 1.5em sans-serif";
ctx.textBaseline="meio"; var text="100",
textX=Math.round ((width-ctx.measureText (text).width)/2),
textY=altura/2;
ctx.fillStyle='rgba (0, 0, 0, 1)';
ctx.fillText (text, textX, textY);
ctx.restore ();
}
}); $.post ("ajax-endpoint/get-chart-data.php? chart_type=donut",
função (dados) {
var nome=[];
var raca=[];
var bgColor=[]; para (var i em dados) {
name.push (data [i].label);
mark.push (data [i].data);
bgColor.push (data [i].backgroundColor);
} var chartdata={
rótulos: nome,
conjuntos de dados: [
{
rótulo:'Raca dos animais',
backgroundColor: bgColor,
dados: racas
}
]
}; var graphTarget=$ ("# donut-chart"); var graph=new Chart (graphTarget, {
tipo:'donut',
data: chartdata,
opções: {
}
});
});
}
} function showStackedVerticalChart () {
{
$.post ("ajax-endpoint/get-chart-data.php? chart_type=vertical-bar",
função (dados) {
var chartdata={
rótulos: ['Racas'],
conjuntos de dados: dados
}; var graphTarget=$ ("# stacked-vertical-chart"); var graph=new Chart (graphTarget, {
tipo:'bar',
data: chartdata,
opções: {
escalas: {
xAxes: [{
barPercentage: 0,3, empilhado: verdadeiro
}],
yAxes: [{
empilhado: verdadeiro
}]
}
}
});
});
}
}
