const marvel_hero = ["thor", "iranman", "hulk"]

const Dc_hero = ["superman", "batman", "aquaman"]

const combine = [...Dc_hero,...marvel_hero]

console.log(combine);


const num_array = [1, 2, 3, [4, 5, 6, ], 7, [8, 9, 10,[4, 7, 6]]]

const usable_array = num_array.flat(Infinity)

console.log(usable_array);
