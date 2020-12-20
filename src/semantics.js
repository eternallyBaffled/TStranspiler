var prettyPrint = {
  Table (bom, sections) {
    return bom.prettyPrint() + sections.prettyPrint();
  },
//  bom (parts) { ... },
//  Section () {},
  group ( a, b, c ) {},
  groupheader ( a, b, c ) {},
//  grouptype:,
//  exhaustflag:,
  name ( n ) {},
  namechar ( n ) {},
  groupbody ( n ) {},
  groupline ( n ) {},
  groupentry ( n ) {},
  range ( a, b, c ) {},
  entrycontinuation ( a, b, c ) {},
  blank ( n ) {},
  number ( n ) {},
  template ( n ) {},
  templatechar ( n ) {},
//  eol:,
  comment ( a, b ) {},
  Directive (marker, template) {
    return marker.prettyPrint() + template.prettyPrint();
  },
  variableDeclaration ( a, b, c ) {},
  variable ( a, b, c ) {},
  variableChar ( n ) {},
  parameter ( a, b ) {},
  NonemptyListOf ( a, b, c ) {},
  nonemptyListOf ( a, b, c ) {},
  _terminal () {
    return this.sourceString;
  }
};

export default prettyPrint;
