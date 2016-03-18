var expect = chai.expect;

describe("Medida", function() {
    
    describe("Constructor", function() {
    it("Debería tipo y valor", function() {
      var t = new Medida (5, 'c');
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal("c");
    });
    
    it("Debería crearse con 1 parámetro", function() {
      var t = new Medida (5);
      expect(t.valor).to.equal(5);
    });
    
    it("No debería crearse sin parámetros", function() {
      expect(new Medida ()).to.equal.undefined;
    });
  });
    
});

describe("Temperatura", function() {
    
    describe("Constructor", function() {
    it("Debería tipo y valor", function() {
      var t = new Temperatura (5,'k');
      expect(t.valor).to.equal(5);
      expect(t.tipo).to.equal("k");
    });
    
    it("Debería crearse con 1 parámetro", function() {
      var t = new Temperatura(5);
      expect(t.valor).to.equal(5);
    });
    
    it("No debería crearse sin parámetros", function() {
      expect(new Temperatura()).to.equal.undefined;
    });
  });
    
    describe("Celsius", function() {
    describe("Constructor", function() {
      it("Debería tener un valor", function() {
        var c = new Celsius(5);
        expect(c.valor).to.equal(5);
      });
    });
    });
    describe("Farenheit", function() {
    describe("Constructor", function() {
      it("Debería tener un valor", function() {
        var f = new Fahrenheit(5);
        expect(f.valor).to.equal(5);
      });
    });
    });
    describe("Kelvin", function() {
    describe("Constructor", function() {
      it("Debería tener un valor", function() {
        var k = new Kelvin(5);
        expect(k.valor).to.equal(5);
      });
    });
    });
});
