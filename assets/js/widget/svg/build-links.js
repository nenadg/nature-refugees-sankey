import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";
import format from "../helpers/format";

function buildLinks() {
	var that = this;

	function isSelected (elem) {
		if (that.selectedCountry.slice(-2) === "-o") {
			return elem.origin_name === that.selectedCountry;
		} else if (that.selectedCountry.slice(-2) === "-d") {
			return elem.destination_name === that.selectedCountry;
		} else {
			return true;
		}
	}

	var filterdLinks = this.graph.links.filter(isSelected);

	if (!this.g_links) {
		// Only make the group if it doesn't already exist
		this.g_links = this.svg.append("g")
			.attr("class", "links");

	}

	this.links = this.g_links
		.selectAll("path")
		.data(filterdLinks);
	
	// Enter	
	this.links.enter()
		.append("path")
		.attr("class", "link")
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			if (this.selectedCountry.length > 0) {
				return "url(#" + d.originregion_name + "-" + d.destinationregion_name + ")";
			} else {
				return "#000";
			}
		})
		.attr("opacity", () => {
			return this.selectedCountry.length > 0 ? 1 : 0.1;
		})
		.on("mouseover", function(d) {
			d3.select(this)
				.attr("opacity", () => {
					return that.selectedCountry.length > 0 ? 1 : 0.3;
				});

			that.buildTooltip(d);
		})
		.on("mouseout", function() {
			d3.select(this)
				.attr("opacity", () => {
					return that.selectedCountry.length > 0 ? 1 : 0.1;
				});

			d3.select("#widget-tooltip")
				.classed("hidden", true);
		});

	// Update
	this.links
		.attr("class", "link")
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			if (this.selectedCountry.length > 0) {
				return "url(#" + d.originregion_name + "-" + d.destinationregion_name + ")";
			} else {
				return "#000";
			}
		})
		.attr("opacity", () => {
			return this.selectedCountry.length > 0 ? 1 : 0.1;
		})
		.on("mouseover", function(d) {
			d3.select(this)
				.attr("opacity", () => {
					return that.selectedCountry.length > 0 ? 1 : 0.3;
				});

			that.buildTooltip(d);
		})
		.on("mouseout", function() {
			d3.select(this)
				.attr("opacity", () => {
					return that.selectedCountry.length > 0 ? 1 : 0.1;
				});

			d3.select("#widget-tooltip")
				.classed("hidden", true);
		});

	// Exit
	this.links
		.exit()
		.remove();

	return this;
}

export default buildLinks;