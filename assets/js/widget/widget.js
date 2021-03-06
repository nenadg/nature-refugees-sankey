import d3 from "../d3-bundle";

import buildSvg from './svg/build-svg';
import buildData from "./build-data";
import buildSankey from "./sankey/build-sankey";
import buildDefs from "./svg/build-defs";
import buildLinks from "./svg/build-links";
import buildNodes from "./svg/build-nodes";
import buildText from "./svg/build-text";
import buildLabels from "./svg/build-labels";
import updateAll from "./update-all";
import buildKey from "./ui/build-key";
import buildTooltip from "./ui/build-tooltip";
import buildTopTenSelector from "./ui/build-top-ten-selector";
import buildContinentSelector from "./ui/build-continent-selector";
import resize from "./resize";
import removeSvg from "./svg/remove-svg";

function Widget(data) {
	this.totalWidth = data.width ? data.width : 630;
	this.totalHeight = data.height ? data.height : 2500;
	this.margin = data.margin ? data.margin : {'top': 20, 'left': 10, 'bottom': 10, 'right': 10};
	this.width = this.totalWidth - this.margin.left - this.margin.right;
	this.height = this.totalHeight - this.margin.top - this.margin.bottom;
	this.data = data.data;
	this.target = data.target ? data.target : "body";
	this.selectedCountry = "";
	this.showTopTen = false;
	this.origins = [];
	this.destins = [];
	this.continents = [];
	this.groupByContinents = data.hasOwnProperty("groupByContinents") ? data.groupByContinents : false;
	this.duration = 500;
	this.textLimit = 40000;
}

Widget.prototype.updateProps = function(data) {
	this.totalWidth = data.width ? data.width : this.totalWidth;
	this.totalHeight = data.height ? data.height : this.totalHeight;
	this.margin = data.margin ? data.margin : this.margin;
	this.width = this.totalWidth - this.margin.left - this.margin.right;
	this.height = this.totalHeight - this.margin.top - this.margin.bottom;
	this.groupByContinents = data.hasOwnProperty("groupByContinents") ? data.groupByContinents : this.groupByContinents;

	return this;
};

Widget.prototype.buildSvg = buildSvg;
Widget.prototype.buildData = buildData;
Widget.prototype.buildSankey = buildSankey;
Widget.prototype.buildDefs = buildDefs;
Widget.prototype.buildLinks = buildLinks;
Widget.prototype.buildNodes = buildNodes;
Widget.prototype.buildText = buildText;
Widget.prototype.buildLabels = buildLabels;
Widget.prototype.updateAll = updateAll;
Widget.prototype.buildKey = buildKey;
Widget.prototype.buildTooltip = buildTooltip;
Widget.prototype.buildTopTenSelector = buildTopTenSelector;
Widget.prototype.buildContinentSelector = buildContinentSelector;
Widget.prototype.resize = resize;
Widget.prototype.removeSvg = removeSvg;

export default Widget;