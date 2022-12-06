import type { PersonId } from "@/types";

const getPersonIdByName = async ( name: string ) => {
    try {
        const response = await fetch(`https://imdb-api.com/en/API/SearchName/k_r4t061he/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch personId');
        }
        const personList: { results: Person[] } = await response.json();
        const personByName = personList.results.filter(person => person.title === name);
        if (!personByName.length) {
            throw new Error('Person not found');
        }
        const personId = personByName[0].id
        return personId;
    } catch (err) {
        throw err;
    }
};

export default getPersonIdByName;

interface Person {
    id: PersonId,
    title: string,
}