import {useEffect} from "react";

const AnimatedNumber = ({get, oldInput, prefix}: {get:number, oldInput:number, prefix:string}) => {

    let old = createNumberArray(oldInput);

    function createNumberArray(number: number) {
        const numberArray = number.toString().split('');
        for (let i = 0; numberArray.length < 5; i++) {
            if (numberArray[0] === '-') {
                numberArray[0] = '0';
            }
            numberArray.unshift('0');
        }
        return numberArray.map(x => x === '-' || x === '+' ? x : parseInt(x));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function animateNumber(number: number, element: any) {
        // Leert das Element
        element.innerHTML = '';
        // Berechnet den neuen Number Array
        const numberArray = createNumberArray(number);
        // Legt alles in das HTML Element
        createNumberHTML(numberArray, old, element);
        // Berechnet die Ticks die verändert werden sollen.
        const ticks = [...element.querySelectorAll("span[data-value]")];
        setTimeout(() => {
            // Animiert die Werte
            for (let tick of ticks) {
                let dist = parseInt(tick.getAttribute("data-value")) - 1;
                tick.style.transform = `translateY(-${dist * 100}%)`;
            }
        }, 0);
        // Setzten den Zahlen Array zu dem Alten Status
        // old = numberArray;
    }

    function createNumberHTML(numbers: any, old: any, element: any) {
        for (let i = 0; i < numbers.length; i++) {
            if (isNaN(numbers[i]) || isNaN(old[i])) {
                element.insertAdjacentHTML(
                    "beforeend",
                    `<span class="number-span" data-value="${calcDeltaSight(old[i], numbers[i]).length}">${calcDeltaSight(old[i], numbers[i]).join('')}</span>`
                );
            } else {
                element.insertAdjacentHTML(
                    "beforeend",
                    `<span class="number-span" data-value="${calcDeltaBetweenNumbers(old[i], numbers[i]).length}">${calcDeltaBetweenNumbers(old[i], numbers[i]).join('')}</span>`
                );
            }
        }
        return element;
    }

    function calcDeltaSight(oldSight: any, newSight: any) {
        return oldSight !== newSight ? [`<span class="number-span-nested">${oldSight}</span>`, `<span>${newSight}</span>`] : [`<span>${newSight}</span>`];
    }

    function calcDeltaBetweenNumbers(oldNumber: number, newNumber: number) {
        let numberArray = [oldNumber];
        let notFound = true;
        if (oldNumber === newNumber) return numberArray.map(x => `<span>${x}</span>`);
        while (notFound) {
            oldNumber++;
            if (oldNumber > 9) oldNumber = 0;
            numberArray.push(oldNumber);
            if (oldNumber === newNumber) notFound = false;
        }
        return numberArray.map(x => `<span class="number-span-nested">${x}</span>`);
    }

    useEffect(() => {
        const value = parseInt(old.join('')) + (get - oldInput);
        const prefixClass = '.' + prefix + '-numbers';
        animateNumber(value, document.querySelector(prefixClass));
    }, [animateNumber, get, oldInput, old])

    return (
        <div className={`${prefix}-numbers numbers`}>0000</div>
    )
}

export default AnimatedNumber;