# Belly-Button-Challenge

- Deployment

-- Link to dashboard: https://irtakan.github.io/Belly-Button-Challenge/

For this challenge I built an interactive dashboard that explores the Belly Button Biodiversity datasetLinks to an external site., 
which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in
more than 70% of people, while the rest were relatively rare.

<img src="https://github.com/IRTakan/Belly-Button-Challenge/blob/main/images/bellyb5.png?raw=true" width=400 height=400>

To built my interactive dashboard, I had to:

 -- Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

-- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

-- Use sample_values as the values for the bar chart.

-- Use otu_ids as the labels for the bar chart.

-- Use otu_labels as the hovertext for the chart.

<img src="https://github.com/IRTakan/Belly-Button-Challenge/blob/main/images/bellyb1.jpg?raw=true" width=400 height=300>

--Create a bubble chart that displays each sample.

--Use otu_ids for the x values.

--Use sample_values for the y values.

--Use sample_values for the marker size.

--Use otu_ids for the marker colors.

--Use otu_labels for the text values.

<img src="https://github.com/IRTakan/Belly-Button-Challenge/blob/main/images/bellyb2.jpg?raw=true" width=600 height=200>

--Display the sample metadata, i.e., an individual's demographic information.

--Display each key-value pair from the metadata JSON object somewhere on the page.

--Update all the plots when a new sample is selected.

<img src="https://github.com/IRTakan/Belly-Button-Challenge/blob/main/images/bellyb3.jpg?raw=true" width=150 height=200>

- BONUS: Gauge Washer

-- Create a gauage washer for values ranging from 0 through 9. Update the chart whenever a new sample is selected.

<img src="https://github.com/IRTakan/Belly-Button-Challenge/blob/main/images/bellyb4.png?raw=true" width=320 height=200>

*Technologies used: Microsoft Visual Studio Code.

*Languages used: JavaScript & HTML.

