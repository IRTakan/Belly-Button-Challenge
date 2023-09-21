// // Set up URL to read data
const url =
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending 
const dataPromise = d3.json(url);
    console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  
// Initialize the dashboard
dataPromise.then(data => {
    // Use D3 library to select the dropdown menu
    var selector = d3.select("#selDataset");

    // Use D3 library to get sample names and populate the drop-down selector
    var sampleNames = data.names;

    // Add the sample names to the dropdown menu options
    sampleNames.forEach(sample => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });
        
    // Set the first sample from the list
    var initialSample = sampleNames[0];

    // Show information and charts for the initial sample
    buildMetadata(initialSample, data);
    buildCharts(initialSample, data);
    buildBubbleChart(initialSample, data);
});

// This function runs when the user selects a new sample from the dropdown menu
function optionChanged(newSample) {
    // Update the information and charts for the new sample
    dataPromise.then(data => {
        buildMetadata(newSample, data);
        buildCharts(newSample, data);
        buildBubbleChart(newSample, data);
    });
}

// This function shows the demographic information for the selected sample
function buildMetadata(sample, data) {
    // Get the metadata for all samples
    var metadata = data.metadata;

    // Filters the metadata to only include the selected sample
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var selectedSample = metadataArray[0];
    var PANEL = d3.select("#sample-metadata");

    // Clears the previous demographic information
    PANEL.html("");

    // Shows the demographic information for the selected sample
    Object.entries(selectedSample).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key}: ${value}`);
    });
}

// Function that builds the bar chart
function buildCharts(sample) {

    // Use D3 library to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        // Set top ten items to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Layout setup
        let layout = {
            margin: {
                l: 100,
                r: 100,
                t: 0,
                b: 100,
            },
            height: 550,
            width: 500,
        };

        // Plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};

// Function that builds the bubble chart
function buildBubbleChart(sample) {

    // Use D3 library to retrieve all of the data
    d3.json(url).then((data) => {
        
        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);
        
        // Set up the trace for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Layout setup
        let layout = {
        xaxis: {title: "OTU ID"},
        margin: {
            l: 100,
            r: 100,
            t: 0,
            b: 100,
        },
        height: 470,
        width: 1100,
    };
        // Call Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};