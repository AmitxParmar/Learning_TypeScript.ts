const anchor = document.querySelector('a')!;
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);

// cost form = document.querySelector('form');
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// input
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});