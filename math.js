console.group('Square')

const calculateSquare = side => {
    return {
        perimeter: `${side * 4}cm`,
        area: `${side * side}cm2`
    }
}

console.table(calculateSquare(5))

console.groupEnd('Square')

console.group('Triangle')

const calculateTriangle = (side1, side2, base, height) => {
    return {
        perimeter: `${side1 + side2 + base}cm`,
        area: `${(base * height) / 2}cm`
    }
}

console.table(calculateTriangle(6, 6, 4, 5.5))

console.groupEnd('Triangle')


console.group('Circle')

const calculateCircle = (radius) => {
    return {
        circumference: (radius * 2) * Math.PI,
        area: (radius ** 2) * Math.PI
    }
}

console.table(calculateCircle(1))

console.groupEnd('Circle')


console.group('Isosceles triangle')

const isoscelesTriangle = (sides, base) => {
    if(sides == base) return 'not an isosceles triangle'
    else {
        return Math.sqrt((sides ** 2) - (base ** 2 / 4))
    }
}

console.table(isoscelesTriangle(6, 4))

console.groupEnd('Isosceles triangle')


console.group('Scalene triangle')

const scaleneTriangle = (side1, side2, side3) => {

    const sp = (side1 + side2 + side3) / 2

    return 2 / side1 * Math.sqrt(sp * (sp - side1) * (sp - side2) * (sp - side3))
}

console.table(scaleneTriangle(6, 8, 10))

console.groupEnd('Scalene triangle')