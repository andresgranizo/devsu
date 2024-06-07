describe('PetStore API Tests', () => {
  // Variables
  const petId = 12345;
  const newPet = {
    id: petId,
    name: "Jake the Dog",
    status: "available"
  };

  it('Add a new pet to the store', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', newPet)
      .then((response) => {
        // Capturing and asserting the output
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('name', 'Jake the Dog');
        expect(response.body).to.have.property('status', 'available');
      });
  });

  it('Find pet by ID', () => {
    cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`)
      .then((response) => {
        // Capturing and asserting the output
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('name', 'Jake the Dog');
        expect(response.body).to.have.property('status', 'available');
      });
  });

  it('Update pet status to sold', () => {
    const updatedPet = { ...newPet, status: "sold" };
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatedPet)
      .then((response) => {
        // Capturing and asserting the output
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('status', 'sold');
      });
  });

  it('Find pets by status', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
      .then((response) => {
        // Capturing and asserting the output
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').that.is.not.empty;
        const pet = response.body.find(pet => pet.id === petId);
        expect(pet).to.exist;
        expect(pet).to.have.property('status', 'sold');
      });
  });
});
