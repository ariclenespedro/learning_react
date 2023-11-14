const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  // faz um filtro na lista principal.
  const profession = people.filter(person => person.profession === 'chemist');
  
  export default function OutraLista() {

    /* Criar os meus li para a lista */
    const listItems = profession.map((person,index) =>
        <li key={index + 1}>
            <img 
                src={"./img/user.png"} 
                alt={person.name} width="100px" height="100px" 
            />
            <p>
                <b>{person.name}</b> profession: <span>{person.profession}</span>
            </p>
        </li>
    );

    return <ul>{listItems}</ul>;
  }