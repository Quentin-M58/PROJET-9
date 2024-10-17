import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    //on rend le composant home
    render(< Home />)
    // on verifie la presences d'une liste d'evenement
    expect(screen.getByTestId("listEvents")).toBeInTheDocument()
    // on attend puis on verifie la presences d'un elements dans la liste
    waitFor(() => {
      expect(screen.getByText("#DigitonPARIS")).toBeInTheDocument()
    })
  })
  it("a list a people is displayed", () => {
    //on rend le composant home
    render(< Home />)
    // on verifie la presences d'une liste de personne
    expect(screen.getByTestId("listOfPeople")).toBeInTheDocument()
    // on verifie la presences de personne dans la liste
    expect(screen.getByText("Samira")).toBeInTheDocument()
    expect(screen.getByText('Christine')).toBeInTheDocument()
  })
  it("a footer is displayed", () => {
    // on rend le composant home
    render(< Home />)
    // on verifie la presences du pied de page
    expect(screen.getByTestId("footer")).toBeInTheDocument()
    // on verifie la presences de l elements de le pied de page
    expect(screen.getByText("45 avenue de la République, 75000 Paris")).toBeInTheDocument()
  })
  it("an event card, with the last event, is displayed", async () => {
    // on rend le composant home
    render(< Home />)
    // on attend
    waitFor(() => {
      // on verifie la presence de lastevent
      expect(screen.getByTestId("lastEvent")).toBeInTheDocument()
      // on verifie la presence de l element date
      expect(screen.getByRole('date')).toBeInTheDocument()
    })
  })
});
