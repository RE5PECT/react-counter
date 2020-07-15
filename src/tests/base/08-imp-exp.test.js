import { getHeroeById } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe("pruebas en funciones de heroes", () => {
  test("debe retornar un Heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe.name).toBe('Batman');

    const heroeData = heroes.find(x => x.id === id)

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);

  });

  test("debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);

  });
});
