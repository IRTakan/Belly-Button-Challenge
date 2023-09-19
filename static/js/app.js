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
});

// This function runs when the user selects a new sample from the dropdown menu
function optionChanged(newSample) {
    // Update the information and charts for the new sample
    dataPromise.then(data => {
        buildMetadata(newSample, data);
        buildCharts(newSample, data);
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

