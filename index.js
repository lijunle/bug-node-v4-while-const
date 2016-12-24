var current = 'a';
const loop = {
  a: 'b',
  b: 'c',
  c: ''
};

while (loop[current]) {
  console.log('current =', current);
  console.log('loop[current] =', loop[current]);
  const next = loop[current];
  console.log('next =', next);
  current = next;
}

console.log('Bye!');
