export function translateStatus(status) {
    const statuses = {
        'Alive': 'Vivo(a)',
        'Dead': 'Morto(a)',
        'unknown': 'Desconhecido'
    }

    return statuses[status];
}

export function translateGender(gender) {
    const genders = {
        'Female': 'Feminino',
        'Male': 'Masculino',
        'Genderless': 'Sem genero',
        'unknown': 'Desconhecido'
    }

    return genders[gender];
}