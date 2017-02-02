This code was ported from (DMGambone/JXON-Parser)[https://github.com/DMGambone/JXON-Parser] to be
and Angular service. Thanks!

#JXON - JavaScript XML Object Notation
This JXON library provides the core functionality to create JSON objects from XML, preserving as
much of the original XML information as possible.

##Why JXON?
Why even need a JSON from XML converter?  While front-end development utilizes JavaScript and JSON for 
their language and data model, most of the web still uses XML as a means of communicating between systems.  JXON
helps bridge the gap between getting XML data and consuming it in JavaScript based systems.

##How to use
Using this JXON library is fairly straight forward.

You start by instantiating an instance of the JXON Parser.
At that point, you have 3 parsing options:

* parser.parseNode - Converts an object implementing IXMLDOMElement interface into a JXONNode object.
* parser.parseXML - Converts any XML string into a JXONNode object, including all children nodes.
* parser.parseXMLFile - Loads and converts any XML file into a JXONNode object.

##Code Example
	// inside angular controller
	var jxon;
	
	jxon = jxonParser.parseXML(someXMLText);
	// or
	jxon = jxonParser.parseNode(someXMLElement);
	// or
	jxonParser.parseXMLFile(XmlFile)
	.then(function(res) {
		jxon = res;
	});

##Dependencies
Angular