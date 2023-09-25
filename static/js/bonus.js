// BONUS: Create belly button washing gauge

function buildGauge(sample) {
    // Fetch the JSON data and console log it 
    d3.json(url).then((data) => {
        // Get the metadata for all samples
        let metadata = data.metadata;
        
        // Filter the metadata to only include the selected sample
        let metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let selectedSample = metadataArray[0];

        // Set up the trace for the washing gauge
        let trace2 = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: selectedSample.wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 24}},
            type: "indicator", 
            mode: "gauge+number",
            gauge: {
                axis: {range: [null, 10]}, 
                bar: {color: "rgb(68,166,198)"},
                steps: [
                    { range: [0, 1], color: "rgb(233,245,248)" },
                    { range: [1, 2], color: "rgb(218,237,244)" },
                    { range: [2, 3], color: "rgb(203,230,239)" },
                    { range: [3, 4], color: "rgb(188,223,235)" },
                    { range: [4, 5], color: "rgb(173,216,230)" },
                    { range: [5, 6], color: "rgb(158,209,225)" },
                    { range: [6, 7], color: "rgb(143,202,221)" },
                    { range: [7, 8], color: "rgb(128,195,216)" },
                    { range: [8, 9], color: "rgb(113,187,212)" },
                    { range: [9, 10], color: "rgb(98,180,207)" }
                ]
            }
        }];

         // Use Plotly to plot the data in a gauge chart
         Plotly.newPlot("gauge", trace2);
    });
}
