const capitalize = word => {
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
}

export default capitalize;
