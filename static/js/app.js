const startingChr = 1;
const startingPos = 205500000;
const endingPos = 206000000;
const genomicWindowLimit = 2e6;
var submitButton = d3.select("#submit-btn");
var errorDiv = d3.select("#error-messages");
var theTable = d3.select("#variants-table");

d3.select("#locusText").text(`Genomic Region (hg19) (window limit: ${genomicWindowLimit/1e6} Mbp)`);
d3.select("#locus").attr('placeholder', `${startingChr}:${startingPos}-${endingPos}`);


// Building the LD populations selections:
d3.json('/populations').then(response => {
    var data = response;
    console.log(data);
    for(var i = 0; i < data['Population Code'].length; i++) {
        var superpop = data['Super Population Code'][i];
        var superpopSelect = d3.select("#" + superpop);
        superpopSelect
            .append("option")
            .attr('value', data['Population Code'][i])
            .text("(" + data['Population Code'][i] + ") " + data['Population Description'][i]);
    }
});
