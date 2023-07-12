import Team from "../Team";

import Bowerman from "../Bowerman";
import Character from "../Character";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test('test yield iterators', () => {
    const bowerman = new Bowerman('Richard');
    const character = new Character('Nick');
    const daemon = new Daemon('Max');
    const magician = new Magician('Valia');
    const swordsman = new Swordsman('Coco');
    const all = new Team();

    all.addAll(bowerman, character, daemon, magician, swordsman);

    const arrAll = all.toArray();

    const arr = [];
    for (let i of all) {
        arr.push(i);
    }

    expect(arr).toEqual(arrAll);
});

test('test Set function', () => {
    const undead = new Undead('Igor');
    const zombie = new Zombie('Eva');
    const all = new Team();

    all.addAll(undead, zombie, zombie);

    expect(all.toArray()).toEqual([undead, zombie]);
});

test('test Set function throw error', () => {
    const zombie = new Zombie('Eva');
    const all = new Team();

    all.add(zombie);
    expect(() => all.add(zombie)).toThrow('Такой персонаж уже выбран!');
});