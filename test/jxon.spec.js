describe('jxonParser factory', function() {
    var jxonParser;

    beforeEach(angular.mock.module('jxonParser'));
    beforeEach(inject(function(_jxonParser_) {
        jxonParser = _jxonParser_;
    }));

    it('parses an XML string', function() {
        let xmlString = "<?xml version='1.0' encoding='UTF-8'?><notes><note id='1'>note1</note></notes>";
        let jxon = jxonParser.parseXML(xmlString);

        expect(jxon.notes.note['@id']).toEqual(1);
        expect(jxon.notes.note['#text']).toEqual("note1");
    });

    it('parses an XML Node', function() {
        let xmlString = "<?xml version='1.0' encoding='UTF-8'?><notes><note id='1'>note1</note></notes>";
        let xmlDoc = (new DOMParser()).parseFromString(xmlString, "text/xml");
        let jxon = jxonParser.parseNode(xmlDoc);

        expect(jxon.notes.note['@id']).toEqual(1);
        expect(jxon.notes.note['#text']).toEqual("note1");
    });

    it('parses an XML File', function() {
        let xmlString = "<?xml version='1.0' encoding='UTF-8'?><notes><note id='1'>note1</note></notes>";
        let blob = new Blob([xmlString], {type: 'application/xml'});
        jxonParser.parseXMLFile(blob)
        .then(function(res) {
            expect(res.notes.note['@id']).toEqual(1);
            expect(res.notes.note['#text']).toEqual("note1");
            done();
        });
    });

    it('returns a toString', function() {
        let xmlString = "<?xml version='1.0' encoding='UTF-8'?><notes><note id='1'>note1</note></notes>";
        jxonParser.parseXML(xmlString);

        expect(jxonParser.toString()).toBe("[Object JXONNode]");
    });
});